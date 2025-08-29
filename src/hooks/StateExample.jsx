import { useState } from "react";

export const StateExample = () => {
  const [count, setCount] = useState(0);
  // let count = 0;

  const increase = () => {
    setCount((prev) => prev + 1);

    console.log(count);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase Counter</button>
    </div>
  );
};
