import { Modal } from "antd";

export default function ModalComponent(props) {
  const {
    openModal = false,
    handleOk = () => {},
    handleCancel = () => {},
    title = "Modal Title",
    children,
    isFooter = false,
    customFooter = [],
  } = props;

  return (
    <Modal
      title={title}
      open={openModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={isFooter ? [customFooter] : null}
    >
      {children}
    </Modal>
  );
}
