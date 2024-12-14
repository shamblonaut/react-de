import Entry from "./Entry";

export default function EntryList({ entries = [] }) {
  if (entries.length === 0) {
    return (
      <div
        className="entry-list"
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <p>No entries found</p>
      </div>
    );
  }

  return (
    <div
      className="entry-list"
      style={{
        flex: "1",
        display: "grid",
        width: "100%",
        gridTemplateColumns: "repeat(auto-fit, 100px)",
        gridTemplateRows: "repeat(auto-fit, 100px)",
        gap: "8px",
        padding: "16px",
      }}
    >
      {entries.map((entry) => {
        return <Entry key={entry.id} entry={entry} />;
      })}
    </div>
  );
}
