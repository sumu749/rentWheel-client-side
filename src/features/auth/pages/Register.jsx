import { Link, useNavigate } from "react-router-dom";
import { FaCar, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

import useAuth from "../hooks/useAuth";

const Register = () => {
    const { createUser, updateUser, googleLogin } = useAuth();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        setLoading(true);

        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            toast.error(
                "Password must contain uppercase, lowercase and minimum 6 characters",
            );

            setLoading(false);

            return;
        }

        try {
            // create user
            await createUser(email, password);

            // update profile
            await updateUser({
                displayName: name,
                photoURL: photo,
            });

            toast.success("Account Created Successfully");

            navigate("/");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();

            toast.success("Login Successful");

            navigate("/");
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
                        Create Account
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Join RentWheels and start your journey.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleRegister} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your Name"
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 text-white"
                        />
                    </div>

                    {/* Photo */}
                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Photo URL
                        </label>

                        <input
                            type="text"
                            name="photo"
                            required
                            placeholder="https://image-url.com"
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 text-white"
                        />
                    </div>

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

                    {/* Submit */}
                    <button
                        disabled={loading}
                        className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-3 rounded-xl font-bold"
                    >
                        {loading ? "Creating Account..." : "Register"}
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

                {/* Login Link */}
                <p className="text-center text-gray-400 mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-orange-500 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
