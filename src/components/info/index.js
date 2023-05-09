import { Button, Form } from "antd";
import LanguageComponent from "../common/changeLanguage";
import DropDownComponent from "../common/dropdown";
import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import { useCallback, useState } from "react";
import ModalConfirmComponent from "../common/modalConfirm";
import ModalComponent from "../common/modal";
import { COMMON } from "../../constants";
import { Container } from "./style";
import FormInfoComponent from "./form";
import { useNavigate } from "react-router-dom";

const fieldInfo = [
  {
    id: 1,
    name: "email",
    label: "Email",
    placeholder: "Enter Email",
    isLabel: true,
    type: "email",
    valid: {
      required: true,
    },
  },
  {
    id: 2,
    name: "fullName",
    label: "Full name",
    placeholder: "Enter Full name",
    isLabel: true,
    type: "text",
    valid: {
      required: true,
    },
  },
  {
    id: 3,
    name: "birthDay",
    label: "BirthDay",
    placeholder: "Enter BirthDay",
    isLabel: true,
    type: "date",
    valid: {
      required: false,
    },
  },
];

const fieldPassword = [
  {
    id: 1,
    name: "oldPassword",
    label: "Old Password",
    placeholder: "Enter Old Password",
    isLabel: true,
    type: "password",
    valid: {
      required: true,
      min: 8,
    },
  },
  {
    id: 2,
    name: "newPassword",
    label: "New Password",
    placeholder: "Enter New Password",
    isLabel: true,
    type: "password",
    valid: {
      required: true,
      min: 8,
    },
  },
  {
    id: 3,
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Enter Confirm Password",
    isLabel: true,
    type: "password",
    required: true,
    valid: {
      required: true,
    },
  },
];

export default function InfoComponent() {
  const [form] = Form.useForm();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [stepModal, setStepModal] = useState(COMMON.ZERO);
  const [loading] = useState(false);
  const [fieldFormInfo, setFieldFormInfo] = useState(fieldInfo);
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: (
        <Button type="link" onClick={() => handleOpenModal(1)}>
          My Profile
        </Button>
      ),
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: (
        <Button type="link" onClick={() => handleOpenModal(2)}>
          Change Password
        </Button>
      ),
      icon: <KeyOutlined />,
    },
    {
      key: "3",
      label: (
        <ModalConfirmComponent
          content="Do you want to logout now?"
          buttonText="Logout"
          onOk={() => handleLogout()}
          isIcon
          iconText="logout"
        />
      ),
      danger: true,
    },
  ];

  //
  const handleOpenModal = useCallback(
    (step) => {
      setIsOpenModal(!isOpenModal);
      setStepModal(step);
      if (step === COMMON.ONE) setFieldFormInfo(fieldInfo);
      else setFieldFormInfo(fieldPassword);
    },
    [isOpenModal]
  );

  //
  const handleCloseModal = () => {
    setIsOpenModal(false);
    setStepModal(COMMON.ZERO);
  };

  //
  const openModal = useCallback(() => {
    return (
      isOpenModal && (
        <ModalComponent
          title={stepModal === COMMON.ONE ? "Edit Profile" : "Edit My password"}
          openModal={isOpenModal}
          handleOk={handleOpenModal}
          handleCancel={handleCloseModal}
          isFooter={false}
        >
          <FormInfoComponent
            stepModal={stepModal}
            form={form}
            loading={loading}
            handleSubmitForm={handleSubmitForm}
            handleCloseModal={handleCloseModal}
            fieldFormInfo={fieldFormInfo}
          />
        </ModalComponent>
      )
    );
  }, [isOpenModal, stepModal, fieldFormInfo, handleOpenModal, loading, form]);

  //
  const handleSubmitForm = (values) => {
    console.log(123, values);
  };

  //
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    // <Container>
    <Container className="info">
      {/* <Image width={32} height={32} className="image-info" /> */}
      <div className="fullname-info">
        <DropDownComponent title={"Nguyễn Văn Khánh"} items={items} />
      </div>
      <LanguageComponent />
      {openModal()}
    </Container>

    // </Container>
  );
}
