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
        to="/new-dino"
        className="nav-link"
      >
        New Dino
      </NavLink>
    </nav>
  )
}

export default NavBar