import Entry from "./Entry";

export default function Explorer() {
  const entries = [
    {
      id: crypto.randomUUID(),
      name: "node_modules",
      type: "folder",
    },
    {
      id: crypto.randomUUID(),
      name: "public",
      type: "folder",
    },
    {
      id: crypto.randomUUID(),
      name: "src",
      type: "folder",
    },
    {
      id: crypto.randomUUID(),
      name: "README.md",
      type: "file",
    },
    {
      id: crypto.randomUUID(),
      name: "package.json",
      type: "file",
    },
    {
      id: crypto.randomUUID(),
      name: "index.html",
      type: "file",
    },
  ];

  if (entries.length === 0) {
    return (
      <div
        className="explorer"
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <p>No entries found</p>
      </div>
    );
  }

  return (
    <div
      className="explorer"
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
