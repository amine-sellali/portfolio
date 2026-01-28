function Sidebar() {
    return (
        <aside className="sidebar">
            <img
                src="https://via.placeholder.com/120"
                alt="Profile"
                style={{ borderRadius: "50%", marginBottom: "1rem" }}
            />

            <h2>Amine Sellali</h2>
            <p>Software Developer</p>

            <p>aminesellali@outlook.com</p>
            <p>Lille, France</p>

            <div>
                <a href="#">GitHub</a><br />
                <a href="#">LinkedIn</a>
            </div>
        </aside>
    );
}

export default Sidebar;
