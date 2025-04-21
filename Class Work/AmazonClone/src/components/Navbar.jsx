import amazonlogo from "../assets/amazon_logo.png";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo ">
          <div className="logo">
            <img src={amazonlogo} alt="" width="100px" />
          </div>
        </div>

        <a href="/">
          <div className="address border">
            <p className="add-first">Deliver to</p>
            <div className="add-icon">
              <i className="fa-solid fa-location-dot"></i>
              <p className="add-sec">India</p>
            </div>
          </div>
        </a>

        <div className="nav-search">
          <select className="search-select">
            <option>All</option>
          </select>
          <input placeholder="Search amazon" className="search-input" />
          <div className="search-icon">
            <a href="/">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
        </div>

        <a href="/">
          <div className="flag border">
            <i className="fa-solid fa-earth-americas"></i>
            EN ^
          </div>
        </a>

        <a href="/">
          <div className="nav-signin border">
            <span>Hello, sign in</span>
            <p className="nav-second">Account & Lists</p>
          </div>
        </a>

        <a href="/">
          <div className="nav-return border">
            <span>Returns</span>
            <p className="nav-second">& Orders</p>
          </div>
        </a>

        <a href="/">
          <div className="nav-cart border">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </div>
        </a>
      </div>
    </>
  );
}

export default Navbar;
