import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about">Sobre mi</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/skills">Habilidades</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
