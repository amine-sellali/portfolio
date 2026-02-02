import "../styles/sidebar.css";
import profile from "../assets/profile.png";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-card">
        {/* Avatar */}
        <div className="avatar-box">
          <img src={profile} alt="Profile" />
        </div>

        {/* Name */}
        <h1 className="sidebar-name">Amine Sellali</h1>

        {/* Role */}
        <div className="sidebar-role">Software Developer</div>

        <div className="sidebar-separator" />

        {/* Contact */}
        <ul className="sidebar-info">
          <li>
            <span className="icon">✉️</span>
            <span>amine.sellali@email.com</span>
          </li>
          <li>
            <span className="icon">📍</span>
            <span>France</span>
          </li>
        </ul>

        <div className="sidebar-separator" />

        {/* Socials */}
        <div className="sidebar-socials">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Instagram">ig</a>
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="X">x</a>
          <a href="#" aria-label="GitHub">gh</a>
          <a href="#" aria-label="Resume">cv</a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
