import "./App.css";
import { ContextExample } from "./hooks/ContextExample";
import { EffectExample } from "./hooks/EffectExample";
import { ReducerExample } from "./hooks/ReducerExample";
import { StateExample } from "./hooks/StateExample";

function App() {
  return (
    <>
      {/*<StateExample />*/}
      {/* <EffectExample /> */}
      {/* <ContextExample /> */}
      <ReducerExample />
    </>
  );
}

export default App;
