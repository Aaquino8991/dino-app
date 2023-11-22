import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/"
        className="nav-link"
      >
        Add Dino
      </NavLink>
    </nav>
  )
}

export default NavBar