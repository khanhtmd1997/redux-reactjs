import { Drawer, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { drawerSelector, setDrawer } from "../../../redux/drawer/reducer";
import { WarningOutlined } from "@ant-design/icons";
import { commonSelector, setChangedData } from "../../../redux/common/reducer";
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
  console.log(isChangeData);
  //close drawer
  const onClose = () => {
    if (isChangeData) {
      Modal.confirm({
        title: "Confirm",
        icon: <WarningOutlined />,
        content: "Data is change. You sure close it?",
        okText: "Yes",
        cancelText: "Close",
        onOk: () => {
          dispatch(setDrawer(false));
          dispatch(setChangedData(false));
          return null;
        },
        onCancel: () => {},
      });
    } else {
      dispatch(setDrawer(false));
      dispatch(setChangedData(false));
    }
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
