import TitleBar from "./TitleBar";
import WindowContent from "./WindowContent";

export default function Window({ title, icon, children }) {
  return (
    <div
      className="window"
      style={{
        width: "600px",
        height: "600px",
        backgroundColor: "#11111b",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TitleBar icon={icon} title={title} />
      <WindowContent>{children}</WindowContent>
    </div>
  );
}
