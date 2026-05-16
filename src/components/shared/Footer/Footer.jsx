import { Link } from "react-router-dom";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaCar,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#020617] border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo & About */}
                    <div>
                        <Link to="/" className="flex items-center gap-3">
                            <div className="bg-orange-500 p-3 rounded-xl">
                                <FaCar className="text-white w-6 h-6" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-white">
                                    Rent
                                    <span className="text-orange-500">
                                        Wheels
                                    </span>
                                </h2>

                                <p className="text-xs text-gray-400 -mt-1">
                                    Car Rental Platform
                                </p>
                            </div>
                        </Link>

                        <p className="mt-5 text-gray-400 leading-relaxed">
                            Rent premium and affordable cars anytime, anywhere.
                            Experience smooth booking, trusted providers, and
                            reliable customer support with RentWheels.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 mt-6">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300"
                            >
                                <FaXTwitter />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">
                            Quick Links
                        </h3>

                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-orange-500 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/browse-cars"
                                    className="hover:text-orange-500 transition"
                                >
                                    Browse Cars
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/add-car"
                                    className="hover:text-orange-500 transition"
                                >
                                    Add Car
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/my-bookings"
                                    className="hover:text-orange-500 transition"
                                >
                                    My Bookings
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/my-listings"
                                    className="hover:text-orange-500 transition"
                                >
                                    My Listings
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">
                            Services
                        </h3>

                        <ul className="space-y-4 text-gray-400">
                            <li className="hover:text-orange-500 transition cursor-pointer">
                                Luxury Car Rental
                            </li>

                            <li className="hover:text-orange-500 transition cursor-pointer">
                                SUV & Family Cars
                            </li>

                            <li className="hover:text-orange-500 transition cursor-pointer">
                                Airport Pickup
                            </li>

                            <li className="hover:text-orange-500 transition cursor-pointer">
                                Corporate Rentals
                            </li>

                            <li className="hover:text-orange-500 transition cursor-pointer">
                                Long-Term Leasing
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">
                            Contact Us
                        </h3>

                        <div className="space-y-5 text-gray-400">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-orange-500 mt-1" />

                                <p>Lalmonirhat, Rangpur, Bangladesh</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-orange-500" />

                                <p>+880 1234-567890</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-orange-500" />

                                <p>support@rentwheels.com</p>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="mt-8">
                            <h4 className="text-white font-semibold mb-3">
                                Subscribe Newsletter
                            </h4>

                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-l-xl outline-none text-white placeholder:text-gray-500 focus:border-orange-500"
                                />

                                <button className="bg-orange-500 hover:bg-orange-600 px-5 rounded-r-xl text-white font-semibold transition duration-300">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center">
                        © {new Date().getFullYear()} RentWheels. All rights
                        reserved.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <Link
                            to="/terms"
                            className="hover:text-orange-500 transition"
                        >
                            Terms & Conditions
                        </Link>

                        <Link
                            to="/privacy"
                            className="hover:text-orange-500 transition"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            to="/support"
                            className="hover:text-orange-500 transition"
                        >
                            Support
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
