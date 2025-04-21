import { useState } from "react";

function Card() {
  const [data, setData] = useState({
    data1: "",
    data2: "",
    data3: "",
    data4: "",
    color1: "white",
    color2: "white",
    color3: "white",
    color4: "white",
    align: "left",
  });
  return (
    <>
      <div className="template">
        <div className="data">
          <input
            type="text"
            value={data.data1}
            onChange={(e) => setData({ ...data, data1: e.target.value })}
            placeholder="Enter Your Name"
          />

          <input
            type="text"
            value={data.data2}
            onChange={(e) => setData({ ...data, data2: e.target.value })}
            placeholder="Enter Your Course"
          />

          <input
            type="text"
            value={data.data3}
            onChange={(e) => setData({ ...data, data3: e.target.value })}
            placeholder="Enter Your Email Id"
          />

          <input
            type="text"
            value={data.data4}
            onChange={(e) => setData({ ...data, data4: e.target.value })}
            placeholder="Enter Your Batch Time"
          />
        </div>

        <div className="inp">
          <input
            type="color"
            onChange={(e) => setData({ ...data, color1: e.target.value })}
          />
          <input
            type="color"
            onChange={(e) => setData({ ...data, color2: e.target.value })}
          />
          <input
            type="color"
            onChange={(e) => setData({ ...data, color3: e.target.value })}
          />
          <input
            type="color"
            onChange={(e) => setData({ ...data, color4: e.target.value })}
          />
        </div>

        <div className="card">
          <h1 style={{ color: data.color1, textAlign: data.align }}>
            Name: {data.data1}
          </h1>
          <h1 style={{ color: data.color2, textAlign: data.align }}>
            Course: {data.data2}
          </h1>
          <h1 style={{ color: data.color3, textAlign: data.align }}>
            Email Id: {data.data3}
          </h1>
          <h1 style={{ color: data.color4, textAlign: data.align }}>
            Batch: {data.data4}
          </h1>
        </div>
      </div>

      <div className="btn">
        <button onClick={() => setData({ ...data, align: "left" })}>
          Left
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => setData({ ...data, align: "center" })}>
          Center
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => setData({ ...data, align: "right" })}>
          Right
        </button>
      </div>
    </>
  );
}

export default Card;
