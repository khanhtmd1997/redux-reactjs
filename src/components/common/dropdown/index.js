import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

export default function DropDownComponent(props) {
  const { title, items } = props;
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {title}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
