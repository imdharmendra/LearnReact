import { useState } from "react";

function Counter() {
  let name = "Dharmendra";

  const click = () => {
    alert("This is alert");
  };

  const handel = () => {
    document.getElementById("data").innerHTML = "Hello Ducat";
  };

  const [count, setCount] = useState(0);
  return (
    <>
      <h1 id="data">Hello {name}</h1>
      <button onClick={click}>Get Alert</button>
      <button onClick={handel}>Change Data</button>

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}

export default Counter;
