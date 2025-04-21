import { useState } from "react";

function Target() {
  const [data, setData] = useState({ data1: "Ducat", data2: "India" });
  return (
    <>
      <input
        type="text"
        value={data.data1}
        onChange={(e) => setData({ ...data, data1: e.target.value })}
        placeholder="Enter Your Data"
      />
      <input
        type="text"
        value={data.data2}
        onChange={(e) => setData({ ...data, data2: e.target.value })}
        placeholder="Enter Your Data"
      />

      <h1>{data.data1}</h1>
      <h1>{data.data2}</h1>
    </>
  );
}

export default Target;
