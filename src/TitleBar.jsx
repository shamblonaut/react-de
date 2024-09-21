import ActionButton from "./ActionButton";

import minusIcon from "./assets/minus.svg";
import maximizeIcon from "./assets/maximize-2.svg";
import xIcon from "./assets/x.svg";

export default function TitleBar({
  icon,
  title = "Window",
  handleMouseDown,
  handleMouseMove,
}) {
  return (
    <div
      className="title-bar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#313244",
        padding: "8px",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      <div
        className="favicon"
        style={{
          marginLeft: "16px",
        }}
      >
        <img
          src={icon}
          alt="Favicon"
          style={{
            width: "20px",
            height: "auto",
          }}
        />
      </div>
      <div className="title">{title}</div>
      <div className="actions">
        <ActionButton icon={minusIcon} />
        <ActionButton icon={maximizeIcon} />
        <ActionButton icon={xIcon} />
      </div>
    </div>
  );
}
