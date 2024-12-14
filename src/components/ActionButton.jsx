export default function ActionButton({ icon }) {
  return (
    <button
      className="action-button"
      type="button"
      style={{
        border: "none",
        background: "none",
        margin: "0 4px",
      }}
    >
      <img
        className="icon"
        src={icon}
        alt="Action Button"
        style={{
          width: "16px",
          height: "auto",
        }}
      />
    </button>
  );
}
