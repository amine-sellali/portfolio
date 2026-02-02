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
            <span>aminesellali@outlook.com</span>
          </li>
          <li>
            <span className="icon">📍</span>
            <span>France</span>
          </li>
        </ul>

        <div className="sidebar-separator" />

        {/* Socials */}
        <div className="sidebar-socials">
          <a
            href="https://www.linkedin.com/in/amine-sellali-56b528224/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
      2.761 2.239 5 5 5h14c2.762 0 5-2.239 
      5-5v-14c0-2.761-2.238-5-5-5zm-11 
      19h-3v-11h3v11zm-1.5-12.268c-.966 
      0-1.75-.79-1.75-1.764s.784-1.764 
      1.75-1.764 1.75.79 1.75 
      1.764-.783 1.764-1.75 
      1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 
      0v5.604h-3v-11h3v1.765c1.396-2.586 
      7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a
            href="https://github.com/amine-sellali"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 
      3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94 
      -.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53 
      .63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66 
      .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
      0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 
      0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27 
      .68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82 
      .44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 
      0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 
      0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 
      8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>

          <a
            href="https://leetcode.com/u/amine_sellali/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
          >
            <svg viewBox="0 0 24 24">
              <path d="M13.483 0L2.907 10.576c-1.202 1.203-1.202 
    3.152 0 4.354l6.163 6.163c1.202 
    1.202 3.151 1.202 4.353 0l10.577-10.576-2.175-2.175-9.49 
    9.49c-.402.402-1.054.402-1.456 0l-6.163-6.163c-.402-.402-.402-1.054 
    0-1.456l9.49-9.49L13.483 0z" />
              <path d="M17.67 6.33a1.5 1.5 0 1 1 
    2.121-2.121 1.5 1.5 0 0 1-2.121 2.121z" />
            </svg>
          </a>


          <a
            href="/Amine_Sellali_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
          >
            <svg viewBox="0 0 16 16">
              <path d="M4 0a2 2 0 0 0-2 2v12c0 
      1.1.9 2 2 2h8a2 2 0 0 0 2-2V5.5L10.5 
      0H4zm6.5 1.5L13 5h-2a.5.5 
      0 0 1-.5-.5V1.5zM4 6h8v1H4V6zm0 
      2h8v1H4V8zm0 2h5v1H4v-1z" />
            </svg>
          </a>
        </div>


      </div>
    </aside>
  );
}

export default Sidebar;
