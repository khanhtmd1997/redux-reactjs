import MenuComponent from "../../../components/menu";
import { Layout } from "antd";
import { COMMON } from "../../../constants";

const { Sider } = Layout;
export default function SiderPrivate({ collapsed, setCollapsed }) {
  return (
    <Sider
      theme="light"
      width={256}
      style={{
        height: "100vh",
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <MenuComponent mode={COMMON.FORMLAYOUT_VER} />
    </Sider>
  );
}
