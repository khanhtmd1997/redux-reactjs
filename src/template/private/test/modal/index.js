import { Form, Input } from "antd";
import { Fragment } from "react";

export default function FormModalEdit() {
  return (
    <Fragment>
      <Form.Item name="text" label="Text">
        <Input />
      </Form.Item>
    </Fragment>
  );
}
