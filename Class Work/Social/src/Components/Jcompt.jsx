import { UserContext } from "../App";
function Jcompt() {
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
    </div>
  );
}

export default Jcompt;
