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
        to="/dinosaurs"
        className="nav-link"
      >
        Dinosaurs
      </NavLink>
      <NavLink
        to="/create"
        className="nav-link"
      >
        New Dino
      </NavLink>
    </nav>
  )
}

export default NavBar