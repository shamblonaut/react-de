import "./App.css";
import Explorer from "./Explorer";
import Window from "./Window";

import explorerIcon from "./assets/explorer.svg";

function App() {
  return (
    <div className="desktop">
      <Window title="File Explorer" icon={explorerIcon}>
        <Explorer />
      </Window>
    </div>
  );
}

export default App;
