import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
    const { t } = useLanguage();

    return (
        <nav className="navbar">
            <NavLink to="/about">{t("nav.about")}</NavLink>
            <NavLink to="/resume">{t("nav.resume")}</NavLink>
            <NavLink to="/portfolio">{t("nav.portfolio")}</NavLink>
            <NavLink to="/contact">{t("nav.contact")}</NavLink>
        </nav>
    );
}

export default Navbar;
