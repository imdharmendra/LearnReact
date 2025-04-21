import Ecompt from "./Ecompt";
import { UserContext } from "../App";
import { useContext } from "react";

function Ccompt() {
  let data = useContext(UserContext);
  return (
    <div>
      <h1>
        Ccompt <span>{data}</span>
      </h1>

      <Ecompt />
    </div>
  );
}

export default Ccompt;
