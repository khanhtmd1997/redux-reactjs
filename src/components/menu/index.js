import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Image, Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { COMMON } from "../../constants";
const items = [
  getItem("Dashboard", "/", <HomeOutlined />),
  getItem("Detail", "/admin/users", <HomeOutlined />),
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem("Navigation Three", "sub4", <SettingOutlined />),
];

function getItem(label, key, icon, children, type, disabled) {
  return {
    key,
    icon,
    children,
    label,
    type,
    disabled,
  };
}

export default function MenuComponent(props) {
  const { mode = COMMON.FORMLAYOUT_HORI } = props;
  const [current, setCurrent] = useState("/");

  const navigate = useNavigate();

  //
  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <div
      style={{
        height: COMMON.FORMLAYOUT_HORI ? "unset" : "100vh",
      }}
    >
      <div
        style={{
          display: mode === COMMON.FORMLAYOUT_HORI ? "none" : "block",
          textAlign: "center",
          padding: 12,
        }}
      >
        <Image width={80} height={80} />
      </div>

      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode={mode}
        items={items}
      />
    </div>
  );
}
