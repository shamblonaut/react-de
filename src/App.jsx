import { useState } from "react";

import "./App.css";
import Explorer from "./Explorer";
import Window from "./Window";
import Taskbar from "./Taskbar";

import explorerIcon from "./assets/explorer.svg";

const initialWindows = [
  {
    id: crypto.randomUUID(),
    name: "File Explorer",
    icon: explorerIcon,

    component: <Explorer />,
    minimized: false,
  },
  {
    id: crypto.randomUUID(),
    name: "File Searcher",
    icon: explorerIcon,

    component: <Explorer />,
    minimized: false,
  },
];

function App() {
  const [isMouseUp, setIsMouseUp] = useState(true);

  const [windows, setWindows] = useState(initialWindows);

  return (
    <div
      className="desktop"
      style={{
        position: "relative",
      }}
      onMouseDown={() => {
        setIsMouseUp(false);
      }}
      onMouseUp={() => {
        setIsMouseUp(true);
      }}
    >
      {windows.map((window, i) => (
        <Window
          key={window.id}
          title={window.name}
          icon={window.icon}
          minimized={window.minimized}
          initialPosition={{ x: (i + 1) * 100, y: (i + 1) * 100 }}
          isMouseUp={isMouseUp}
        >
          {window.component}
        </Window>
      ))}
      <Taskbar windows={windows} setWindows={setWindows} />
    </div>
  );
}

export default App;
