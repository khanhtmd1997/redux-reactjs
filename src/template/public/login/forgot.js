import { Form, Input } from "antd";
import { GooglePlusOutlined } from "@ant-design/icons";
import { Fragment } from "react";
export default function ForgotPasswordTemplate() {
  return (
    <Fragment>
      <Form.Item name="sendEmail">
        <div className="form-field d-flex align-items-center">
          <GooglePlusOutlined className="icon" />
          <Input type="email" placeholder="Enter Email" />
        </div>
      </Form.Item>
    </Fragment>
  );
}
