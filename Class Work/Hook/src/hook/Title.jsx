import { useEffect } from "react";
import { useState } from "react";

function Title() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Ducat India ${count}`;
  }, [count]);
  return (
    <>
      <h1>Post Like {count}</h1>
      <button onClick={() => setCount(count + 1)}>Like</button>
    </>
  );
}

export default Title;
