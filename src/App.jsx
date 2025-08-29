import "./App.css";
import { ContextExample } from "./hooks/ContextExample";
import { EffectExample } from "./hooks/EffectExample";
import { ImperativeHandleExample } from "./hooks/ImperativeHandleExample";
import { InsertionEffectExample } from "./hooks/InsertionEffectExample";
import { LayoutEffectExample } from "./hooks/LayoutEffectExample";
import { ReducerExample } from "./hooks/ReducerExample";
import { RefExample } from "./hooks/RefExample";
import { StateExample } from "./hooks/StateExample";
import { TransitionExample } from "./hooks/TransitionExample";
import { UseIdExample } from "./hooks/UseIdExample";

function App() {
  return (
    <>
      {/*<StateExample />*/}
      {/* <EffectExample /> */}
      {/* <ContextExample /> */}
      {/* <ReducerExample /> */}
      {/* <RefExample /> */}
      {/* <ImperativeHandleExample /> */}
      {/* <LayoutEffectExample /> */}
      {/* <InsertionEffectExample /> */}
      {/* <UseIdExample /> */}
      <TransitionExample />
    </>
  );
}

export default App;
