import { UserContext } from "../App";
import { useContext } from "react";

function Fcompt() {
  let data = useContext(UserContext);
  return (
    <div>
      <h1>
        Fcompt <span>{data}</span>
      </h1>
    </div>
  );
}

export default Fcompt;
