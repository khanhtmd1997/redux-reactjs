import { Button, Image } from "antd";
import { Container } from "./style";
import { Fragment } from "react";
import FormComponent from "../../../components/common/form";
import { COMMON } from "../../../constants";

export default function LoginPages(props) {
  const { renderStep, onSubmitForm, step, setStep } = props;
  return (
    <Container className="wrapper">
      <div className="wrapper">
        <div className="logo">
          <Image
            src="https://3si.vn/media/djzdkd30/logo-fix.png"
            alt="logo"
            preview={false}
          />
        </div>
        <FormComponent
          autoComplete="off"
          scrollToFirstError
          onSubmitForm={onSubmitForm}
          isButtonFooter
          textButton={
            step === COMMON.TWO
              ? "Send Email"
              : step === COMMON.THREE
              ? "Register"
              : "Login"
          }
          buttonClass="btn mt-3"
        >
          {renderStep()}
        </FormComponent>
        <div className="text-center fs-6 form-bottom">
          {step !== COMMON.TWO ? (
            <Fragment>
              <Button type="link" onClick={() => setStep(2)}>
                Forgot password?
              </Button>
              |
            </Fragment>
          ) : null}

          {step !== COMMON.THREE ? (
            <Fragment>
              <Button type="link" onClick={() => setStep(3)}>
                Sign up
              </Button>
            </Fragment>
          ) : null}
          {step !== COMMON.ONE ? (
            <Fragment>
              {step === COMMON.THREE ? null : "|"}
              <Button type="link" onClick={() => setStep(1)}>
                Login
              </Button>
            </Fragment>
          ) : null}
        </div>
      </div>
    </Container>
  );
}
