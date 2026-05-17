import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { FaCar, FaImage, FaMapMarkerAlt } from "react-icons/fa";

import toast from "react-hot-toast";

import Swal from "sweetalert2";

import { AuthContext } from "../../auth/context/AuthProvider";

import { addCar } from "../services/carService";

const AddCar = () => {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const handleAddCar = async (e) => {
        e.preventDefault();

        setLoading(true);

        const form = e.target;

        const carName = form.carName.value;

        const image = form.image.value;

        const category = form.category.value;

        const price = Number(form.price.value);

        const location = form.location.value;

        const description = form.description.value;

        const carData = {
            carName,
            image,
            category,
            price,
            location,
            description,

            status: "available",

            providerName: user?.displayName,

            providerEmail: user?.email,

            createdAt: new Date(),
        };

        try {
            const result = await addCar(carData);

            if (result.insertedId) {
                Swal.fire({
                    title: "Car Added Successfully!",

                    text: "Your car listing is now live.",

                    icon: "success",

                    confirmButtonColor: "#f97316",

                    background: "#0f172a",

                    color: "#ffffff",
                });

                form.reset();

                navigate("/browse-cars");
            }
        } catch (error) {
            console.log(error);

            toast.error("Failed To Add Car");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-black min-h-screen py-28">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 px-5 py-2 rounded-full mb-6">
                        Add New Car
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
                        Publish Your
                        <span className="block text-orange-500 mt-2">
                            Luxury Vehicle
                        </span>
                    </h1>

                    <p className="text-gray-400 mt-6 text-lg">
                        Share your premium car with thousands of renters
                        worldwide.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleAddCar}
                    className="bg-slate-900 border border-white/10 rounded-4xl p-8 md:p-12 space-y-8"
                >
                    {/* Car Name */}
                    <div>
                        <label className="block mb-3 text-gray-300 font-semibold">
                            Car Name
                        </label>

                        <div className="relative">
                            <FaCar className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />

                            <input
                                type="text"
                                name="carName"
                                required
                                placeholder="Tesla Model S"
                                className="w-full bg-slate-800 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-white outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block mb-3 text-gray-300 font-semibold">
                            Car Image URL
                        </label>

                        <div className="relative">
                            <FaImage className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />

                            <input
                                type="text"
                                name="image"
                                required
                                placeholder="https://image-url.com"
                                className="w-full bg-slate-800 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-white outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>

                    {/* Category + Price */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Category */}
                        <div>
                            <label className="block mb-3 text-gray-300 font-semibold">
                                Category
                            </label>

                            <select
                                name="category"
                                required
                                className="w-full bg-slate-800 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500"
                            >
                                <option value="">Select Category</option>

                                <option value="SUV">SUV</option>

                                <option value="Luxury">Luxury</option>

                                <option value="Sports">Sports</option>

                                <option value="Electric">Electric</option>

                                <option value="Sedan">Sedan</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block mb-3 text-gray-300 font-semibold">
                                Daily Price
                            </label>

                            <input
                                type="number"
                                name="price"
                                required
                                placeholder="$150"
                                className="w-full bg-slate-800 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-3 text-gray-300 font-semibold">
                            Location
                        </label>

                        <div className="relative">
                            <FaMapMarkerAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />

                            <input
                                type="text"
                                name="location"
                                required
                                placeholder="New York, USA"
                                className="w-full bg-slate-800 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-white outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-3 text-gray-300 font-semibold">
                            Description
                        </label>

                        <textarea
                            name="description"
                            required
                            rows="6"
                            placeholder="Write car details..."
                            className="w-full bg-slate-800 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500 resize-none"
                        ></textarea>
                    </div>

                    {/* Provider Info */}
                    <div className="bg-slate-800 border border-white/10 rounded-2xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5">
                            Provider Information
                        </h3>

                        <div className="space-y-3">
                            <p className="text-gray-300">
                                <span className="text-orange-500 font-semibold">
                                    Name:
                                </span>{" "}
                                {user?.displayName}
                            </p>

                            <p className="text-gray-300">
                                <span className="text-orange-500 font-semibold">
                                    Email:
                                </span>{" "}
                                {user?.email}
                            </p>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        disabled={loading}
                        className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-5 rounded-2xl font-black text-lg"
                    >
                        {loading ? "Adding Car..." : "Publish Car"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddCar;
