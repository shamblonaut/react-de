import WindowListItem from "./WindowListItem";

export default function WindowList({ windows = [], setWindows }) {
  return (
    <ul
      style={{
        display: "flex",
      }}
    >
      {windows.map((window) => (
        <WindowListItem
          key={window.id}
          window={window}
          handleMinimize={() => {
            const newWindows = windows.slice();

            const currentWindowIndex = newWindows.findIndex(
              (newWindow) => newWindow.id === window.id,
            );
            newWindows[currentWindowIndex].minimized = !window.minimized;

            setWindows(newWindows);
          }}
        />
      ))}
    </ul>
  );
}
