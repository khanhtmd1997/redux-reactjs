import { ExclamationCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { COMMON } from "../../../constants";
import { useCallback } from "react";

export default function ModalConfirmComponent(props) {
  const {
    title = "Confirm",
    icon = <ExclamationCircleOutlined />,
    content = "",
    okText = "Ok",
    cancelText = COMMON.BUTTON_TEXTCANCEL,
    buttonText = COMMON.BUTTON_TEXTCONFIRM,
    onOk = () => {},
    onCancel = () => {},
    isIcon = false,
    iconText = "",
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
        <Button type="link" onClick={confirm}>
          {buttonText}
        </Button>
      </Space>
      {contextHolder}
    </>
  );
}
