import { Spin } from "antd";
import { COMMON } from "../../../constants";

export default function LoadingComponent(props) {
  const { loading, children } = props;
  return loading ? (
    <Spin size="large" tip={COMMON.LOADING}>
      {children}
    </Spin>
  ) : (
    children
  );
}
