import { NavLink } from "react-router-dom";

function Aside() {
  return (
    <>
      <aside>
        <ul>
          <li>
            <NavLink to="home">Home</NavLink>
          </li>
          <li>
            <NavLink to="insert">Insert Data</NavLink>
          </li>
          <li>
            <NavLink to="view">View Data</NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Aside;
