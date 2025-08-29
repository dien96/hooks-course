import { useRef, useEffect, useState } from "react";

export const RefExample = () => {
  //   const inputRef = useRef();

  //   const onClick = () => {
  //     inputRef.current.value = "Hello";
  //   };
  const [count, setCount] = useState(0);
  const previousCountRef = useRef(0);
    useEffect(() => {
      previousCountRef.current = count
  }, [count]);
  return (
    <>
      <p>Count: {count}</p>
      <p>Previous Count: {previousCountRef.current}</p>
      {/* <input type="text" ref={inputRef} /> */}
      <button onClick={() => setCount(prev => prev + 1)}>increment</button>
    </>
  );
};
