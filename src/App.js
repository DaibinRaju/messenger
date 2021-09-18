import logo from "./logo.svg";
import "./App.css";
import Messenger from "./Messenger/Messenger";
import { StyleReset } from "atomize";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

function App() {
  const debug =
    process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

  // 1. Create a client engine instance
  const engine = new Styletron();
  return (
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <>
        <StyleReset />
        <Messenger />
      </>
    </StyletronProvider>
  );
}

export default App;
