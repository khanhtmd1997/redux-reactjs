import { Button, Col, Form, Row } from "antd";
import LoadingComponent from "../loading";
import { ContainerForm } from "./style";
import { COMMON } from "../../../constants";

export default function FormComponent(props) {
  const {
    formLayout = COMMON.FORMLAYOUT_VER,
    labelCol = 5,
    wrapperCol = 19,
    loading = false,
    children,
    onSubmitForm,
    isButtonFooter = false,
    textButton = "Submit",
    handleClose,
    textButtonClose = "Close",
    buttonClass = "btn ",
    initialValues = {},
    form,
  } = props;

  const formItemLayout =
    formLayout === COMMON.FORMLAYOUT_HORI
      ? {
          labelCol: {
            span: labelCol,
          },
          wrapperCol: {
            span: wrapperCol,
          },
        }
      : null;
  return (
    <LoadingComponent loading={loading}>
      <ContainerForm className="container-form">
        {/*formLayout =  horizontal | vertical | inline */}
        <Form
          scrollToFirstError
          {...formItemLayout}
          form={form}
          onFinish={onSubmitForm}
          autoComplete="off"
          layout={formLayout}
          initialValues={initialValues}
        >
          {children}

          {isButtonFooter ? (
            <Row gutter={24} align={"middle"} className="button-form">
              <Col span={24}>
                {handleClose ? (
                  <Button
                    type="default"
                    onClick={() => handleClose()}
                    className="close"
                  >
                    {textButtonClose ? textButtonClose : "Close"}
                  </Button>
                ) : null}
                <Button
                  type="primary"
                  htmlType="submit"
                  className={buttonClass}
                >
                  {textButton ? textButton : "Submit"}
                </Button>
              </Col>
            </Row>
          ) : null}
        </Form>
      </ContainerForm>
    </LoadingComponent>
  );
}
