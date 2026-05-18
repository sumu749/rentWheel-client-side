import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaCar, FaImage, FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../auth/context/AuthProvider";
import { getSingleCar, updateCar } from "../services/carService";
import LoadingSpinner from "../../../components/shared/LoadingSpinner/LoadingSpinner";

const UpdateCar = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const data = await getSingleCar(id);
                setCar(data);
            } catch (error) {
                console.log(error);
                toast.error("Failed to load car details.");
            } finally {
                setLoading(false);
            }
        };

        fetchCar();
    }, [id]);

    const handleUpdateCar = async (e) => {
        e.preventDefault();
        setSaving(true);

        const form = e.target;
        const updatedCar = {
            carName: form.carName.value,
            image: form.image.value,
            category: form.category.value,
            price: Number(form.price.value),
            location: form.location.value,
            description: form.description.value,
            status: form.status.value,
        };

        try {
            const result = await updateCar(id, updatedCar);

            if (result.modifiedCount > 0) {
                Swal.fire({
                    title: "Car Updated Successfully!",
                    icon: "success",
                    confirmButtonColor: "#f97316",
                    background: "#0f172a",
                    color: "#ffffff",
                });

                navigate("/my-cars");
            } else {
                toast.error("No changes were saved.");
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to update car.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!car) {
        return (
            <section className="bg-black min-h-screen flex items-center justify-center py-28">
                <div className="text-center px-4">
                    <h1 className="text-4xl font-black text-white">
                        Car not found
                    </h1>
                </div>
            </section>
        );
    }

    if (user?.email !== car.providerEmail) {
        return (
            <section className="bg-black min-h-screen flex items-center justify-center py-28">
                <div className="text-center px-4 bg-slate-900 border border-white/10 rounded-4xl p-12">
                    <h1 className="text-4xl font-black text-white">
                        Unauthorized
                    </h1>
                    <p className="text-gray-400 mt-4">
                        Only the car owner can update this listing.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-black min-h-screen py-28">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 px-5 py-2 rounded-full mb-6">
                        Update Car
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
                        Edit Your
                        <span className="block text-orange-500 mt-2">
                            Car Listing
                        </span>
                    </h1>
                    <p className="text-gray-400 mt-6 text-lg">
                        Adjust the details and keep your listing up to date.
                    </p>
                </div>

                <form
                    onSubmit={handleUpdateCar}
                    className="bg-slate-900 border border-white/10 rounded-4xl p-8 md:p-12 space-y-8"
                >
                    <div>
                        <label className="block mb-3 text-gray-300 font-semibold">
                            Car Name
                        </label>
                        <div className="relative">
                            <FaCar className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />
                            <input
                                type="text"
                                name="carName"
                                defaultValue={car.carName}
                                required
                                className="w-full bg-slate-800 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-white outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-3 text-gray-300 font-semibold">
                            Car Image URL
                        </label>
                        <div className="relative">
                            <FaImage className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />
                            <input
                                type="text"
                                name="image"
                                defaultValue={car.image}
                                required
                                className="w-full bg-slate-800 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-white outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-3 text-gray-300 font-semibold">
                                Category
                            </label>
                            <select
                                name="category"
                                defaultValue={car.category}
                                required
                                className="w-full bg-slate-800 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500"
                            >
                                <option value="SUV">SUV</option>
                                <option value="Luxury">Luxury</option>
                                <option value="Sports">Sports</option>
                                <option value="Electric">Electric</option>
                                <option value="Sedan">Sedan</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-3 text-gray-300 font-semibold">
                                Daily Price
                            </label>
                            <input
                                type="number"
                                name="price"
                                defaultValue={car.price}
                                required
                                className="w-full bg-slate-800 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-3 text-gray-300 font-semibold">
                            Location
                        </label>
                        <div className="relative">
                            <FaMapMarkerAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />
                            <input
                                type="text"
                                name="location"
                                defaultValue={car.location}
                                required
                                className="w-full bg-slate-800 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-white outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-3 text-gray-300 font-semibold">
                            Description
                        </label>
                        <textarea
                            name="description"
                            defaultValue={car.description}
                            required
                            rows="6"
                            className="w-full bg-slate-800 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500 resize-none"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block mb-3 text-gray-300 font-semibold">
                            Listing Status
                        </label>
                        <select
                            name="status"
                            defaultValue={car.status || "available"}
                            required
                            className="w-full bg-slate-800 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500"
                        >
                            <option value="available">Available</option>
                            <option value="unavailable">Unavailable</option>
                        </select>
                    </div>

                    <div className="bg-slate-800 border border-white/10 rounded-2xl p-6">
                        <h3 className="text-white font-bold text-xl mb-5">
                            Provider Information
                        </h3>
                        <div className="space-y-3">
                            <p className="text-gray-300">
                                <span className="text-orange-500 font-semibold">
                                    Name:
                                </span>{" "}
                                {car.providerName}
                            </p>
                            <p className="text-gray-300">
                                <span className="text-orange-500 font-semibold">
                                    Email:
                                </span>{" "}
                                {car.providerEmail}
                            </p>
                        </div>
                    </div>

                    <button
                        disabled={saving}
                        className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-5 rounded-2xl font-black text-lg"
                    >
                        {saving ? "Saving Changes..." : "Update Car"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default UpdateCar;
