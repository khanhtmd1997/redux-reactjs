import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import SiderTemplate from "../common/sider";
import InfoComponent from "../../../components/info";
import BreadcrumbComponent from "../../../components/common/breadcrumb";
import FooterPrivate from "../common/footer";

const { Header, Footer, Content } = Layout;

export default function LayoutTemplate(props) {
  const { collapsed, setCollapsed, headerStyle, contentStyle, footerStyle } =
    props;
  return (
    <Layout>
      <SiderTemplate collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Header style={headerStyle}>
          <InfoComponent />
        </Header>
        <Content style={contentStyle}>
          <BreadcrumbComponent />
          <Outlet />
        </Content>
        <Footer style={footerStyle}>
          <FooterPrivate />
        </Footer>
      </Layout>
    </Layout>
  );
}
