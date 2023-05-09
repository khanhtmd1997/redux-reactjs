import { COMMON } from "../../constants";
import FormComponent from "../common/form";
import InfoLayout from "./layout";

export default function FormInfoComponent(props) {
  const {
    form,
    loading,
    handleSubmitForm,
    handleCloseModal,
    fieldFormInfo,
    stepModal,
  } = props;
  return (
    <FormComponent
      form={form}
      loading={loading}
      onSubmitForm={handleSubmitForm}
      isButtonFooter
      textButton={
        stepModal === COMMON.ONE ? "Change Profile" : "Change Password"
      }
      handleClose={handleCloseModal}
      textButtonClose="Close"
      initialValues={{
        email: "khanh@gmail.com",
        fullName: "Nguyễn Văn Khánh",
        birthDay: "1997-16-02",
      }}
    >
      <InfoLayout field={fieldFormInfo} form={form} />
    </FormComponent>
  );
}
