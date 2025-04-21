import { UserContext } from "../App";
import Hcompt from "./Hcompt";
import Icompt from "./Icompt";

function Gcompt() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <h1>
              Gcompt <span>{user}</span>
            </h1>
          );
        }}
      </UserContext.Consumer>

      <Hcompt />
      <Icompt />
    </div>
  );
}

export default Gcompt;
