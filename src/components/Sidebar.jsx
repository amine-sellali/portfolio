import "../styles/sidebar.css";
import profile from "../assets/profile.png";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

function Sidebar() {
  const { t, language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className="sidebar">
      <div className={`sidebar-card ${isExpanded ? "expanded" : ""}`}>
        {/* Toggle button for mobile */}
        <button
          className="sidebar-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
            className={isExpanded ? "rotated" : ""}
          >
            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>

        {/* Avatar */}
        <div className="avatar-box">
          <img src={profile} alt="Profile" />
        </div>

        {/* Name */}
        <h1 className="sidebar-name">Amine Sellali</h1>

        {/* Role */}
        <div className="sidebar-role">{t("sidebar.role")}</div>

        {/* Expandable content */}
        <div className="sidebar-details">
          <div className="sidebar-separator" />

          {/* Contact */}
          <ul className="sidebar-info">
            <li>
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </span>
              <span>aminesellali@outlook.com</span>
            </li>
            <li>
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </span>
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
              href={language === "fr" ? "/Amine_Sellali_CV_FR.pdf" : "/Amine_Sellali_CV_EN.pdf"}
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
        {/* End of sidebar-details */}

      </div>
    </aside>
  );
}

export default Sidebar;
