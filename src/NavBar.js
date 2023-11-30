import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/dinosaurs"
        className="nav-link"
      >
        Dinosaurs
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
    </nav>
  )
}

export default NavBar