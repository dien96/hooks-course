import { useEffect, useState } from "react";

export const EffectExample = () => {
  const [data, setData] = useState([]);
  const [showDien, setShowDien] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((reseponse) => reseponse.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    console.log("Dien");
  }, [showDien]);
  return (
    <div>
      <button onClick={() => setShowDien((prev) => !prev)}>Toggle</button>
      <h1>Posts</h1>
      <ul>
        {data.slice(0, 50).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
