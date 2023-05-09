import { Input, InputNumber } from "antd";
import { Fragment } from "react";
import { useCallback } from "react";
// import styled from "styled-components";

export default function InputComponent(props) {
  const renderInputType = useCallback(() => {
    switch (props.type) {
      case "textarea":
        return <Input.TextArea {...props} />;
      case "password":
        return <Input.Password {...props} />;
      case "number":
        return <InputNumber {...props} />;
      default:
        return <Input {...props} />;
    }
  }, [props]);
  return <Fragment>{renderInputType()}</Fragment>;
}

// const InputContainer = styled(Input)`
//   // margin-bottom: 12px;
// `;
