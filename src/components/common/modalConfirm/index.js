import { ExclamationCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { COMMON } from "../../../constants";
import { useCallback } from "react";

export default function ModalConfirmComponent(props) {
  const {
    title = "Confirm",
    icon = <ExclamationCircleOutlined />,
    content = "Do you want to delete it?",
    okText = "Ok",
    cancelText = COMMON.BUTTON_TEXTCANCEL,
    buttonText = COMMON.BUTTON_TEXTCONFIRM,
    onOk = () => {},
    onCancel = () => {},
    isIcon = false,
    iconText = "",
    danger = false,
    buttonIcon = false,
    isNotTextBtn = false,
  } = props;
  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title,
      icon,
      content,
      okText,
      cancelText,
      onOk,
      onCancel,
    });
  };

  const renderIcon = useCallback(() => {
    switch (iconText) {
      case "logout":
        return <LogoutOutlined />;
      default:
        return "";
    }
  }, [iconText]);
  return (
    <>
      <Space>
        {isIcon ? renderIcon() : null}
        <Button
          type="link"
          onClick={confirm}
          icon={buttonIcon ? buttonIcon : null}
          danger={danger}
        >
          {isNotTextBtn ? null : buttonText}
        </Button>
      </Space>
      {contextHolder}
    </>
  );
}
