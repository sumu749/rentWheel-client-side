import { useState } from "react";
import toast from "react-hot-toast";

import useAuth from "../../auth/hooks/useAuth";

import { addCar } from "../services/carService";

const AddCar = () => {
    const { user } = useAuth();

    const [loading, setLoading] = useState(false);

    const handleAddCar = async (e) => {
        e.preventDefault();

        setLoading(true);

        const form = e.target;

        const carName = form.carName.value;
        const description = form.description.value;
        const category = form.category.value;
        const price = form.price.value;
        const location = form.location.value;
        const image = form.image.value;

        const newCar = {
            carName,
            description,
            category,
            price: Number(price),
            location,
            image,

            providerName: user?.displayName,
            providerEmail: user?.email,

            status: "available",

            createdAt: new Date(),
        };

        try {
            const result = await addCar(newCar);

            if (result.insertedId) {
                toast.success("Car Added Successfully");

                form.reset();
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-16">
            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-12">
                <div className="mb-10">
                    <h1 className="text-4xl font-black text-white">
                        Add A New Car
                    </h1>

                    <p className="text-gray-400 mt-3">
                        List your car for rental and start earning.
                    </p>
                </div>

                <form
                    onSubmit={handleAddCar}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* Car Name */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Car Name
                        </label>

                        <input
                            type="text"
                            name="carName"
                            required
                            placeholder="Tesla Model S"
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Category
                        </label>

                        <select
                            name="category"
                            required
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                        >
                            <option value="">Select Category</option>

                            <option value="Sedan">Sedan</option>

                            <option value="SUV">SUV</option>

                            <option value="Luxury">Luxury</option>

                            <option value="Electric">Electric</option>

                            <option value="Hatchback">Hatchback</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Rent Price Per Day
                        </label>

                        <input
                            type="number"
                            name="price"
                            required
                            placeholder="120"
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Location
                        </label>

                        <input
                            type="text"
                            name="location"
                            required
                            placeholder="Dhaka"
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                        />
                    </div>

                    {/* Image */}
                    <div className="md:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Image URL
                        </label>

                        <input
                            type="text"
                            name="image"
                            required
                            placeholder="https://image-url.com"
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                        />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Description
                        </label>

                        <textarea
                            name="description"
                            rows="5"
                            required
                            placeholder="Write car details..."
                            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                        ></textarea>
                    </div>

                    {/* Provider Name */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Provider Name
                        </label>

                        <input
                            type="text"
                            readOnly
                            value={user?.displayName || ""}
                            className="w-full bg-slate-700 border border-white/10 rounded-xl px-4 py-3 cursor-not-allowed"
                        />
                    </div>

                    {/* Provider Email */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Provider Email
                        </label>

                        <input
                            type="email"
                            readOnly
                            value={user?.email || ""}
                            className="w-full bg-slate-700 border border-white/10 rounded-xl px-4 py-3 cursor-not-allowed"
                        />
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2">
                        <button
                            disabled={loading}
                            className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-4 rounded-xl font-bold text-lg"
                        >
                            {loading ? "Adding Car..." : "Add Car"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCar;
