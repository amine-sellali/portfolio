import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function MainLayout() {
    return (
        <div className="background">
            <div className="layout">
                <Sidebar />
                <main className="content-card">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default MainLayout;

