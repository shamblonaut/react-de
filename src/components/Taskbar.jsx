import WindowList from "./WindowList";

export default function Taskbar({ windows, setWindows }) {
  return (
    <div
      className="taskbar"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "8px",
        backgroundColor: "#181825",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <WindowList windows={windows} setWindows={setWindows} />
    </div>
  );
}
