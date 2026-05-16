import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaCar } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../../features/auth/hooks/useAuth";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const { user, logOut } = useAuth();

    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-500 font-semibold"
                            : "hover:text-orange-500 transition"
                    }
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/browse-cars"
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-500 font-semibold"
                            : "hover:text-orange-500 transition"
                    }
                >
                    Browse Cars
                </NavLink>
            </li>

            {user && (
                <>
                    <li>
                        <NavLink
                            to="/add-car"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-semibold"
                                    : "hover:text-orange-500 transition"
                            }
                        >
                            Add Car
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/my-listings"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-semibold"
                                    : "hover:text-orange-500 transition"
                            }
                        >
                            My Listings
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/my-bookings"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-semibold"
                                    : "hover:text-orange-500 transition"
                            }
                        >
                            My Bookings
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error));
    };

    return (
        <header className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-orange-500 p-2 rounded-xl">
                            <FaCar className="text-white w-6 h-6" />
                        </div>

                        <div>
                            <h1 className="text-2xl font-black text-white tracking-wide">
                                Rent
                                <span className="text-orange-500">Wheels</span>
                            </h1>

                            <p className="text-xs text-gray-400 -mt-1">
                                Car Rental Platform
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex">
                        <ul className="flex items-center gap-8 text-gray-200 font-medium">
                            {navLinks}
                        </ul>
                    </nav>

                    {/* Right Side */}
                    <div className="hidden lg:flex items-center gap-4">
                        {!user ? (
                            <>
                                <Link
                                    to="/login"
                                    className="px-5 py-2.5 rounded-xl border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition duration-300"
                                >
                                    Sign Up
                                </Link>
                            </>
                        ) : (
                            <div className="relative">
                                <button
                                    onClick={() => setProfileOpen(!profileOpen)}
                                    className="flex items-center gap-2"
                                >
                                    <img
                                        src={user?.photoURL}
                                        alt="user"
                                        className="w-11 h-11 rounded-full border-2 border-orange-500 object-cover"
                                    />

                                    <FiChevronDown className="text-white w-4 h-4" />
                                </button>

                                {profileOpen && (
                                    <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden">
                                        <div className="bg-[#0F172A] p-5 text-center">
                                            <img
                                                src={user?.photoURL}
                                                alt=""
                                                className="w-20 h-20 rounded-full mx-auto border-4 border-orange-500 object-cover"
                                            />

                                            <h2 className="text-white font-bold mt-3 text-lg">
                                                {user?.displayName}
                                            </h2>

                                            <p className="text-gray-300 text-sm">
                                                {user?.email}
                                            </p>
                                        </div>

                                        <div className="p-4">
                                            <button
                                                onClick={handleLogout}
                                                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
                                            >
                                                Log Out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden text-white"
                    >
                        {open ? (
                            <FiX className="w-7 h-7" />
                        ) : (
                            <FiMenu className="w-7 h-7" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="lg:hidden pb-6">
                        <ul className="flex flex-col gap-5 text-gray-200 font-medium">
                            {navLinks}

                            {!user ? (
                                <>
                                    <Link
                                        to="/login"
                                        className="w-full text-center border border-orange-500 py-3 rounded-xl text-orange-500"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        to="/register"
                                        className="w-full text-center bg-orange-500 py-3 rounded-xl text-white font-semibold"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            ) : (
                                <button
                                    onClick={handleLogout}
                                    className="bg-orange-500 py-3 rounded-xl text-white font-semibold"
                                >
                                    Log Out
                                </button>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
