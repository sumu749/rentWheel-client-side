import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaCar, FaGoogle } from "react-icons/fa";

import { useState } from "react";

import toast from "react-hot-toast";

import useAuth from "../hooks/useAuth";

const Login = () => {
    const { loginUser, googleLogin } = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

    const [loading, setLoading] = useState(false);

    const from = location.state || "/";

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);

        const form = e.target;

        const email = form.email.value;

        const password = form.password.value;

        try {
            await loginUser(email, password);

            toast.success("Login Successful");

            navigate(from);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();

            toast.success("Google Login Successful");

            navigate(from);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-8">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto">
                        <FaCar className="text-white w-6 h-6" />
                    </div>

                    <h1 className="text-4xl font-black text-white mt-5">
                        Welcome Back
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Login to continue using RentWheels.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="example@gmail.com"
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 text-white"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="••••••••"
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 text-white"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        disabled={loading}
                        className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-3 rounded-xl font-bold"
                    >
                        {loading ? "Logging In..." : "Login"}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-white/10"></div>

                    <span className="text-gray-400 text-sm">OR</span>

                    <div className="flex-1 h-px bg-white/10"></div>
                </div>

                {/* Google Login */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full border border-white/10 hover:border-orange-500 transition duration-300 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-3"
                >
                    <FaGoogle />
                    Continue With Google
                </button>

                {/* Register Link */}
                <p className="text-center text-gray-400 mt-6">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-orange-500 hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
