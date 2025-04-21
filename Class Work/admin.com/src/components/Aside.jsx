import { NavLink } from "react-router-dom";
function Aside() {
  return (
    <>
      <aside>
        <h1>Blog.com</h1>

        <navbar className="list">
          <ul>
            <li>
              <NavLink to="Home">HOME</NavLink>
            </li>
            <li>
              <NavLink to="Html">HTML</NavLink>
            </li>
            <li>
              <NavLink to="Css">CSS</NavLink>
            </li>
            <li>
              <NavLink to="Javascript">JAVASCRIPT</NavLink>
            </li>
            <li>
              <NavLink to="React">REACT</NavLink>
            </li>
          </ul>
        </navbar>
      </aside>
    </>
  );
}

export default Aside;
