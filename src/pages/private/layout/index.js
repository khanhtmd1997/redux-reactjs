import { useCallback, useEffect } from "react";
import LayoutTemplate from "../../../template/private/layout";
import { useDispatch, useSelector } from "react-redux";
import { commonSelector } from "../../../redux/common";
import { setDrawer } from "../../../redux/drawer/reducer";
import { setChangedData } from "../../../redux/common/reducer";

const headerStyle = {
  textAlign: "center",
  height: 72,
  paddingInline: 0,
};
const contentStyle = {
  padding: 12,
};

const footerStyle = {
  textAlign: "center",
};

export default function LayoutPrivatePages() {
  const { isChangeData } = useSelector(commonSelector);
  const dispatch = useDispatch();

  const onUnload = useCallback(
    (e) => {
      if (isChangeData) {
        e.preventDefault();
      }
      e.returnValue = true;
    },
    [isChangeData]
  );
  useEffect(() => {
    window.addEventListener("beforeunload", onUnload);
    return () => window.removeEventListener("beforeunload", onUnload);
  }, [onUnload]);

  useEffect(() => {
    window.addEventListener("load", function (e) {
      e.preventDefault();
      dispatch(setDrawer(false));
      dispatch(setChangedData(false));
    });
    return () =>
      window.removeEventListener("load", function (e) {
        e.preventDefault();
        dispatch(setDrawer(false));
        dispatch(setChangedData(false));
      });
  }, [dispatch]);

  return (
    <LayoutTemplate
      headerStyle={headerStyle}
      contentStyle={contentStyle}
      footerStyle={footerStyle}
    />
  );
}
