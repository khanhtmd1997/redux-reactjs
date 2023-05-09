import { Breadcrumb } from "antd";
import { useState } from "react";

// let data = [
//   {
//     id: 1,
//     href: "/admin",
//     title: <HomeOutlined />,
//   },
//   {
//     id: 2,
//     href: "",
//     title: (
//       <>
//         <UserOutlined />
//         <span>Application List</span>
//       </>
//     ),
//   },
//   {
//     id: 3,
//     title: "Application",
//   },
// ];
export default function BreadcrumbComponent(props) {
  const { items } = props;
  const [breadcrumbs] = useState(items);
  return (
    <div
      style={{
        padding: "8px 0px 8px 0",
        borderBottom: "2px solid",
        display: items ? "block" : "none",
      }}
    >
      <Breadcrumb items={breadcrumbs} />
    </div>
  );
}
