import { Form, Input } from "antd";
import {
  GooglePlusOutlined,
  UserOutlined,
  KeyOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Fragment } from "react";
import DatePickerComponent from "../../../components/common/datepicker";

export default function RegisterTemplate() {
  return (
    <Fragment>
      <Form.Item name="email">
        <div className="form-field d-flex align-items-center">
          <GooglePlusOutlined className="icon" />
          <Input type="email" placeholder="Enter Email" />
        </div>
      </Form.Item>
      <Form.Item name="fullName">
        <div className="form-field d-flex align-items-center">
          <UserOutlined className="icon" />
          <Input type="text" placeholder="Enter FullName" />
        </div>
      </Form.Item>
      <Form.Item name="birthDay">
        <div className="form-field d-flex align-items-center">
          <CalendarOutlined className="icon" />
          <DatePickerComponent />
        </div>
      </Form.Item>
      <Form.Item name="password">
        <div className="form-field d-flex align-items-center">
          <KeyOutlined className="icon" />
          <Input type="password" placeholder="Enter password" />
        </div>
      </Form.Item>
    </Fragment>
  );
}
