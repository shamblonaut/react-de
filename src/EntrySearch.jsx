import searchIcon from "./assets/search.svg";

export default function EntrySearch({ query, updateHandler }) {
  return (
    <div
      className="entry-search"
      style={{
        display: "flex",
        padding: "8px",
        borderBottom: "1px solid #1e1e2e",
      }}
    >
      <img
        className="icon"
        src={searchIcon}
        alt="Search"
        style={{
          padding: "8px",
        }}
      />
      <input
        type="text"
        style={{
          flex: "1",
          padding: "8px",
          background: "none",
          border: "none",
          borderRadius: "8px",
        }}
        value={query}
        placeholder="Search"
        onChange={updateHandler}
      />
    </div>
  );
}
