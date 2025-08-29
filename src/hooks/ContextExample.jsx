import { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext(null);

export const ContextExample = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ isToggle, setIsToggle }}>
      <div>
        <h1>Parent Component</h1>
        <ChildToggle setIsToggle={setIsToggle} />
        <ChildDisplay isToggle={isToggle} />
      </div>
    </GlobalStateContext.Provider>
  );
};

const ChildToggle = () => {
  const { setIsToggle } = useContext(GlobalStateContext);
  return (
    <div>
      <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
    </div>
  );
};

const ChildDisplay = () => {
  const { isToggle } = useContext(GlobalStateContext);
  return (
    <div>
      <p>Current State : {isToggle ? "ON" : "OFF"}</p>
      <GrandChildDisplay isToggle={isToggle} />
    </div>
  );
};

const GrandChildDisplay = () => {
  const { isToggle } = useContext(GlobalStateContext);
  return (
    <div>
      <h2>Grand Child Component</h2>
      <p>Current State : {isToggle ? "ON" : "OFF"}</p>
    </div>
  );
};
