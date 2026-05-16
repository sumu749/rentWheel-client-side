import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-950 text-white">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
