import { Form } from "antd";
import { GooglePlusOutlined, KeyOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import InputComponent from "../../../components/common/input";

export default function LoginTemplate() {
  return (
    <Fragment>
      <Form.Item name="email">
        <div className="form-field d-flex align-items-center">
          <GooglePlusOutlined className="icon" />
          <InputComponent
            type="email"
            placeholder="Enter Email"
            autoComplete="email"
          />
        </div>
      </Form.Item>
      <Form.Item name="password">
        <div className="form-field d-flex align-items-center">
          <KeyOutlined className="icon" />
          <InputComponent type="password" placeholder="Enter password" />
        </div>
      </Form.Item>
    </Fragment>
  );
}
