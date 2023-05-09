import { useCallback, useState } from "react";
import LoginPages from "./login";
import ForgotPasswordTemplate from "../../../template/public/login/forgot";
import RegisterTemplate from "../../../template/public/login/register";
import LoginTemplate from "../../../template/public/login";
import { COMMON } from "../../../constants";
export default function Index() {
  const onSubmitForm = (values) => {
    console.log(values);
  };

  const [step, setStep] = useState(1);

  //
  const renderStep = useCallback(() => {
    switch (step) {
      case COMMON.TWO:
        return <ForgotPasswordTemplate setStep={setStep} />;
      case COMMON.THREE:
        return <RegisterTemplate setStep={setStep} />;
      default:
        return <LoginTemplate setStep={setStep} />;
    }
  }, [step]);

  return (
    <LoginPages
      renderStep={renderStep}
      onSubmitForm={onSubmitForm}
      step={step}
      setStep={setStep}
    />
  );
}
