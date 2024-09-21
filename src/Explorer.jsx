import { useState } from "react";
import EntryList from "./EntryList";
import EntrySearch from "./EntrySearch";

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

  const [query, setQuery] = useState("");

  return (
    <div
      className="explorer"
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <EntrySearch
        query={query}
        updateHandler={(event) => setQuery(event.target.value)}
      />
      <EntryList entries={getFilteredEntries(entries, query)} />
    </div>
  );
}

function getFilteredEntries(entries, query) {
  return entries.filter((entry) => entry.name.includes(query));
}
