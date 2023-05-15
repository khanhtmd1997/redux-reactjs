import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { drawerSelector } from "../../../redux/drawer/reducer";
import { commonSelector } from "../../../redux/common/reducer";
import { confirmChangeData } from "../../../ultis/function";
const DrawerComponent = (props) => {
  const {
    title = "Basic Drawer",
    placement = "left" | "right" | "top" | "bottom",
    template,
    children,
    closable = true,
  } = props;

  const { openDrawer } = useSelector(drawerSelector);
  const { isChangeData } = useSelector(commonSelector);
  const dispatch = useDispatch();

  //close drawer
  const onClose = () => {
    confirmChangeData(isChangeData, dispatch);
  };
  //end close drawer

  //style
  const containerStyle = {
    position: "relative",
    height: "100%",
    width: "100%",
    // padding: 48,
    overflow: "hidden",
  };
  //end style
  return (
    <Container style={containerStyle}>
      {template}
      <Drawer
        title={title}
        placement={placement}
        closable={closable}
        onClose={onClose}
        open={openDrawer}
        getContainer={false}
      >
        {children}
      </Drawer>
    </Container>
  );
};
const Container = styled.div`
  .ant-drawer-header-title {
  }
  .ant-drawer-content-wrapper {
    width: 100% !important;
    height: 100% !important;
  }
`;
export default DrawerComponent;
