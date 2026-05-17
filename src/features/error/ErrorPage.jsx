import { Link } from "react-router-dom";

import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <section className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="max-w-2xl text-center">
                {/* Icon */}
                <div className="w-28 h-28 mx-auto rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <FaExclamationTriangle className="text-orange-500 text-5xl" />
                </div>

                {/* 404 */}
                <h1 className="text-8xl md:text-9xl font-black text-white mt-10">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-black text-white mt-6">
                    Page Not Found
                </h2>

                {/* Text */}
                <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                    The page you are looking for does not exist or has been
                    moved.
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-3 mt-10 bg-orange-500 hover:bg-orange-600 transition duration-300 text-white px-8 py-4 rounded-2xl font-bold text-lg"
                >
                    <FaHome />
                    Back To Home
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;
