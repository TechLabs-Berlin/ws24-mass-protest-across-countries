import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink to="/">FIND MY PROTEST</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
