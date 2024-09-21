import fileIcon from "./assets/file.svg";
import folderIcon from "./assets/folder.svg";

function getEntryIcon(type) {
  switch (type) {
    case "file":
      return fileIcon;
    case "folder":
      return folderIcon;
  }
}

export default function Entry({ entry }) {
  return (
    <div
      className="entry"
      style={{
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        overflow: "hidden",
        textAlign: "left",
      }}
    >
      <img
        src={getEntryIcon(entry.type)}
        alt="Icon"
        className="icon"
        style={{
          width: "48px",
          height: "auto",
        }}
      />
      <p>{entry.name}</p>
    </div>
  );
}
