import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { drawerSelector, setDrawer } from "../../../redux/drawer/reducer";

export default function DrawerComponent() {
  const { openDrawer, children } = useSelector(drawerSelector);
  const dispatch = useDispatch();
  const closeDrawer = () => {
    dispatch(setDrawer(false));
  };
  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={closeDrawer}
      open={openDrawer}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}
