import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
}

export default Navbar;
