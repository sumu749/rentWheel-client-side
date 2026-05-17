import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import {
    FaCalendarAlt,
    FaCarSide,
    FaCheckCircle,
    FaGasPump,
    FaMapMarkerAlt,
    FaUserFriends,
} from "react-icons/fa";

import { getSingleCar } from "../services/carService";
import BookingModal from "../../bookings/components/BookingModal";
import useAuth from "../../auth/hooks/useAuth";
import LoadingSpinner from "../../../components/shared/LoadingSpinner/LoadingSpinner";

const defaultCarImage =
    "https://via.placeholder.com/1200x800?text=No+Car+Image";

const CarDetails = () => {
    const { id } = useParams();

    const [car, setCar] = useState(null);

    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { user } = useAuth();

    const handleCarImageError = (event) => {
        event.target.src = defaultCarImage;
    };

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const data = await getSingleCar(id);

                setCar(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCar();
    }, [id]);

    // loading
    if (loading) {
        return <LoadingSpinner />;
    }

    // no car found
    if (!car) {
        return (
            <section className="bg-black min-h-screen flex justify-center items-center">
                <h2 className="text-4xl font-black text-white">
                    Car Not Found
                </h2>
            </section>
        );
    }

    return (
        <section className="bg-black min-h-screen py-28">
            <div className="max-w-7xl mx-auto px-4">
                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                    {/* Left Side */}
                    <div>
                        {/* Image */}
                        <div className="rounded-4xl overflow-hidden border border-white/10">
                            <img
                                src={car.image || defaultCarImage}
                                alt={car.carName}
                                onError={handleCarImageError}
                                className="w-full h-125 object-cover"
                            />
                        </div>

                        {/* Small Info */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
                            <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 text-center">
                                <FaCarSide className="mx-auto text-3xl text-orange-500 mb-4" />

                                <h3 className="text-white font-bold">
                                    {car.category}
                                </h3>
                            </div>

                            <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 text-center">
                                <FaGasPump className="mx-auto text-3xl text-orange-500 mb-4" />

                                <h3 className="text-white font-bold">Hybrid</h3>
                            </div>

                            <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 text-center">
                                <FaUserFriends className="mx-auto text-3xl text-orange-500 mb-4" />

                                <h3 className="text-white font-bold">
                                    4 Seats
                                </h3>
                            </div>

                            <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 text-center">
                                <FaCheckCircle className="mx-auto text-3xl text-orange-500 mb-4" />

                                <h3 className="text-white font-bold capitalize">
                                    {car.status}
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div>
                        {/* Category */}
                        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 px-5 py-2 rounded-full mb-6">
                            {car.category}
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
                            {car.carName}
                        </h1>

                        {/* Location */}
                        <div className="flex items-center gap-3 text-gray-400 mt-6 text-lg">
                            <FaMapMarkerAlt className="text-orange-500" />

                            <span>{car.location}</span>
                        </div>

                        {/* Price */}
                        <div className="mt-8">
                            <h2 className="text-6xl font-black text-orange-500">
                                ${car.price}
                                <span className="text-2xl text-gray-400">
                                    /day
                                </span>
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="mt-10">
                            <h3 className="text-2xl font-bold text-white mb-5">
                                Description
                            </h3>

                            <p className="text-gray-400 leading-relaxed text-lg">
                                {car.description}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Features
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                                    <FaCheckCircle className="text-orange-500 text-xl" />

                                    <span className="text-white">
                                        Air Conditioning
                                    </span>
                                </div>

                                <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                                    <FaCheckCircle className="text-orange-500 text-xl" />

                                    <span className="text-white">
                                        GPS Navigation
                                    </span>
                                </div>

                                <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                                    <FaCheckCircle className="text-orange-500 text-xl" />

                                    <span className="text-white">
                                        Bluetooth Audio
                                    </span>
                                </div>

                                <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                                    <FaCheckCircle className="text-orange-500 text-xl" />

                                    <span className="text-white">
                                        Backup Camera
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Provider */}
                        <div className="mt-12 bg-slate-900 border border-white/10 rounded-4xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Car Provider
                            </h3>

                            <div className="space-y-4">
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

                        {/* Booking */}
                        <div className="mt-12">
                            <button
                                disabled={car.status === "unavailable"}
                                onClick={() => setIsModalOpen(true)}
                                className={`w-full py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-4 transition duration-300 ${
                                    car.status === "unavailable"
                                        ? "bg-gray-600 cursor-not-allowed text-gray-300"
                                        : "bg-orange-500 hover:bg-orange-600 text-white"
                                }`}
                            >
                                <FaCalendarAlt />

                                {car.status === "unavailable"
                                    ? "Already Booked"
                                    : "Book This Car"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <BookingModal
                    car={car}
                    user={user}
                    closeModal={() => setIsModalOpen(false)}
                    onBookingSuccess={() =>
                        setCar((prev) => ({ ...prev, status: "unavailable" }))
                    }
                />
            )}
        </section>
    );
};

export default CarDetails;
