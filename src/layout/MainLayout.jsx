import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LanguageToggle from "../components/LanguageToggle";

function MainLayout() {
    return (
        <div className="background">
            <div className="language-toggle-wrapper">
                <LanguageToggle />
            </div>
            <div className="layout">
                <Sidebar />
                <main className="content-card">
                    <Navbar />
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default MainLayout;
