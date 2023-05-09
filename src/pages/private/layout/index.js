import { useState } from "react";
import LayoutTemplate from "../../../template/private/layout";

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
  const [collapsed, setCollapsed] = useState(false);
  return (
    <LayoutTemplate
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      headerStyle={headerStyle}
      contentStyle={contentStyle}
      footerStyle={footerStyle}
    />
  );
}
