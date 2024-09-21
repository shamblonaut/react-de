import { useState } from "react";
import "./App.css";
import Explorer from "./Explorer";
import Window from "./Window";

import explorerIcon from "./assets/explorer.svg";

function App() {
  const [isMouseUp, setIsMouseUp] = useState(true);

  return (
    <div
      className="desktop"
      onMouseDown={() => {
        setIsMouseUp(false);
      }}
      onMouseUp={() => {
        setIsMouseUp(true);
      }}
    >
      <Window title="File Explorer" icon={explorerIcon} isMouseUp={isMouseUp}>
        <Explorer />
      </Window>
    </div>
  );
}

export default App;
