export default function WindowListItem({ window, handleMinimize }) {
  return (
    <button
      type="button"
      style={{
        padding: "8px 12px",
        margin: "0 4px",
        borderRadius: "8px",
        border: "none",
        background: "none",
        backgroundColor: window.minimized ? "transparent" : "#1e1e2e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "background-color 300ms ease-in-out",
      }}
      onClick={handleMinimize}
    >
      <img
        src={window.icon}
        alt={window.name}
        style={{
          width: "32px",
          height: "auto",
        }}
      />
      <div
        className="marker"
        style={{
          backgroundColor: "var(--color)",
          width: window.minimized ? "4px" : "50%",
          height: "4px",
          borderRadius: "2px",
          transition: "width 300ms ease-in-out",
        }}
      ></div>
    </button>
  );
}
