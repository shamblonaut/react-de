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
        src={icon}
        alt="Action Button"
        style={{
          width: "16px",
          height: "auto",
          filter:
            "invert(99%) sepia(88%) saturate(43%) hue-rotate(205deg) brightness(117%) contrast(100%)",
        }}
      />
    </button>
  );
}
