import { useState } from "react";

export const ContextExample = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildToggle setIsToggle={setIsToggle} />
      <ChildDisplay isToggle={isToggle} />
    </div>
  );
};

const ChildToggle = ({ setIsToggle }) => {
  return (
    <div>
      <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
    </div>
  );
};

const ChildDisplay = ({ isToggle }) => {
  return (
    <div>
          <p>Current State : {isToggle ? "ON" : "OFF"}</p>
          <GrandChildDisplay isToggle={isToggle} />
    </div>
  );
};

const GrandChildDisplay = ({ isToggle }) => {
  return (
    <div>
      <h2>Grand Child Component</h2>
      <p>Current State : {isToggle ? "ON" : "OFF"}</p>
    </div>
  );
}
