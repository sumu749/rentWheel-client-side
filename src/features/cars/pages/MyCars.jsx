import { useContext, useEffect, useState } from "react";

import toast from "react-hot-toast";

import Swal from "sweetalert2";

import { AuthContext } from "../../auth/context/AuthProvider";

import { deleteCar, getMyCars, updateCar } from "../services/carService";
import LoadingSpinner from "../../../components/shared/LoadingSpinner/LoadingSpinner";

const MyCars = () => {
    const { user } = useContext(AuthContext);

    const [cars, setCars] = useState([]);

    const [loading, setLoading] = useState(true);

    const defaultCarImage =
        "https://via.placeholder.com/800x500?text=No+Car+Image";

    const escapeHtml = (value) =>
        String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

    const handleCarImageError = (event) => {
        event.target.src = defaultCarImage;
    };

    // fetch cars
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const data = await getMyCars(user?.email);

                setCars(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        if (user?.email) {
            fetchCars();
        }
    }, [user]);

    // delete car
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Delete Car?",

            text: "This listing will be removed permanently.",

            icon: "warning",

            showCancelButton: true,

            confirmButtonColor: "#f97316",

            cancelButtonColor: "#ef4444",

            confirmButtonText: "Delete",

            background: "#0f172a",

            color: "#ffffff",
        });

        if (!result.isConfirmed) return;

        try {
            const res = await deleteCar(id);

            if (res.deletedCount > 0) {
                setCars((prev) => prev.filter((car) => car._id !== id));

                toast.success("Car Deleted");
            }
        } catch (error) {
            console.log(error);

            toast.error("Delete Failed");
        }
    };

    // update car
    const handleUpdate = async (car) => {
        const { value: formValues } = await Swal.fire({
            title: "Update Car",

            html: `
                <input
                    id="carName"
                    class="swal2-input"
                    placeholder="Car Name"
                    value="${escapeHtml(car.carName)}"
                />

                <input
                    id="image"
                    class="swal2-input"
                    placeholder="Car Image URL"
                    value="${escapeHtml(car.image)}"
                />

                <input
                    id="price"
                    type="number"
                    class="swal2-input"
                    placeholder="Price"
                    value="${escapeHtml(car.price)}"
                />

                <input
                    id="location"
                    class="swal2-input"
                    placeholder="Location"
                    value="${escapeHtml(car.location)}"
                />
            `,

            focusConfirm: false,

            showCancelButton: true,

            confirmButtonText: "Update",

            confirmButtonColor: "#f97316",

            cancelButtonColor: "#ef4444",

            background: "#0f172a",

            color: "#ffffff",

            preConfirm: () => {
                const imageInput = document
                    .getElementById("image")
                    .value.trim();

                return {
                    carName: document.getElementById("carName").value,

                    image: imageInput || car.image,

                    price: Number(document.getElementById("price").value),

                    location: document.getElementById("location").value,
                };
            },
        });

        if (!formValues) return;

        const updatedCar = {
            ...car,
            ...formValues,
            image: formValues.image || car.image,
        };

        try {
            const res = await updateCar(car._id, updatedCar);

            if (res.modifiedCount > 0) {
                setCars((prev) =>
                    prev.map((item) =>
                        item._id === car._id ? updatedCar : item,
                    ),
                );

                Swal.fire({
                    title: "Car Updated!",

                    icon: "success",

                    confirmButtonColor: "#f97316",

                    background: "#0f172a",

                    color: "#ffffff",
                });
            }
        } catch (error) {
            console.log(error);

            toast.error("Update Failed");
        }
    };

    // loading
    if (loading) {
        return <LoadingSpinner />;
    }
    return (
        <section className="bg-black min-h-screen pt-24">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 px-5 py-2 rounded-full mb-6">
                        My Cars
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
                        Manage Your
                        <span className="block text-orange-500 mt-2">
                            Car Listings
                        </span>
                    </h1>
                </div>

                {/* Empty */}
                {cars.length === 0 && (
                    <div className="text-center py-24 bg-slate-900 border border-white/10 rounded-4xl">
                        <h2 className="text-4xl font-black text-white">
                            No Cars Added
                        </h2>

                        <p className="text-gray-400 mt-4 text-lg">
                            Publish your first luxury vehicle today.
                        </p>
                    </div>
                )}

                {/* Cars */}
                {cars.length > 0 && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {cars.map((car) => (
                            <div
                                key={car._id}
                                className="bg-slate-900 border border-white/10 rounded-4xl overflow-hidden"
                            >
                                {/* Image */}
                                <img
                                    src={car.image || defaultCarImage}
                                    alt={car.carName}
                                    onError={handleCarImageError}
                                    className="w-full h-70 object-cover"
                                />

                                {/* Content */}
                                <div className="p-8">
                                    <h2 className="text-3xl font-black text-white">
                                        {car.carName}
                                    </h2>

                                    <p className="text-orange-500 text-2xl font-bold mt-4">
                                        ${car.price}
                                        /day
                                    </p>

                                    <div className="mt-6 space-y-3">
                                        <p className="text-gray-300">
                                            <span className="text-orange-500 font-semibold">
                                                Category:
                                            </span>{" "}
                                            {car.category}
                                        </p>

                                        <p className="text-gray-300">
                                            <span className="text-orange-500 font-semibold">
                                                Location:
                                            </span>{" "}
                                            {car.location}
                                        </p>

                                        <p className="text-gray-300">
                                            <span className="text-orange-500 font-semibold">
                                                Status:
                                            </span>{" "}
                                            {car.status}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                        <button
                                            onClick={() => handleUpdate(car)}
                                            className="flex-1 bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-4 rounded-2xl font-bold"
                                        >
                                            Update
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleDelete(car._id)
                                            }
                                            className="flex-1 bg-red-500 hover:bg-red-600 transition duration-300 text-white py-4 rounded-2xl font-bold"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default MyCars;
