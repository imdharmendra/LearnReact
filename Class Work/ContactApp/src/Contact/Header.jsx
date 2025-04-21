import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="insert">Insert Data</NavLink>
          </li>
          <li>
            <NavLink to="view">View Data</NavLink>
          </li>
          <li>
            <NavLink to="update">Update Data</NavLink>
          </li>
          <li>
            <NavLink to="delete">Delete Data</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
