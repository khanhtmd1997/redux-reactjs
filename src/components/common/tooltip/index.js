import { Tooltip } from "antd";

export default function TooltipComponent(props) {
  const { children, arrow = "Show", placement = "topLeft" } = props;
  // arrow = Show | Hide | Center
  // placement = topLeft | top | topRight | leftTop | left | leftBottom | rightTop | right | rightBottom | bottomLeft | bottom | bottomRight

  return (
    <Tooltip placement={placement} title={text} arrow={arrow}>
      {children}
    </Tooltip>
  );
}
