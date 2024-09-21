export default function WindowContent({ children }) {
  return (
    <div
      className="window-content"
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}
