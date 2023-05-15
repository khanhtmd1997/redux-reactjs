import { Button, Col, Form, Row } from "antd";
import LoadingComponent from "../loading";
import { ContainerForm } from "./style";
import { COMMON } from "../../../constants";
import { useCallback } from "react";
import { setChangedData } from "../../../redux/common/reducer";
import { useDispatch } from "react-redux";

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
    textAlignBtnFooter = "right",
    data = {},
  } = props;
  const dispatch = useDispatch();

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

  const handleFieldsChange = useCallback(
    (changedFields) => {
      if (data && data[changedFields[0].name] === changedFields[0].value) {
        dispatch(setChangedData(false));
      } else dispatch(setChangedData(true));
    },
    [data, dispatch]
  );

  return (
    <LoadingComponent loading={loading}>
      <ContainerForm className="container-form">
        {/*formLayout =  horizontal | vertical | inline */}
        <Form
          onFieldsChange={handleFieldsChange}
          scrollToFirstError
          {...formItemLayout}
          form={form}
          onFinish={onSubmitForm}
          autoComplete="off"
          layout={formLayout}
          initialValues={{
            ...initialValues,
          }}
        >
          {children}

          {isButtonFooter ? (
            <Row
              gutter={24}
              align={"middle"}
              className="button-form"
              style={{ textAlign: textAlignBtnFooter }}
            >
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
