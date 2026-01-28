function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <img
                    src="https://via.placeholder.com/120"
                    alt="Profile"
                    className="avatar"
                />
                <h2>Amine Sellali</h2>
                <p className="title">Software Developer</p>
            </div>

            <div className="separator" />

            <div className="sidebar-info">
                <p>Email</p>
                <span>amine.sellali@email.com</span>

                <p>Location</p>
                <span>Lille, France</span>
            </div>

            <div className="separator" />

            <div className="sidebar-social">
                <a
                    href="https://github.com/TON_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/TON_PROFIL"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>

                <a
                    href="https://leetcode.com/TON_USERNAME/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LeetCode
                </a>

                <a
                    href="/cv/Amine_Sellali_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CV (PDF)
                </a>
            </div>

        </aside>
    );
}

export default Sidebar;
