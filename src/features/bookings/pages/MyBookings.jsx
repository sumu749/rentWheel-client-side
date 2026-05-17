/* eslint-disable indent */
import { useContext, useEffect, useState } from "react";

import toast from "react-hot-toast";
import Swal from "sweetalert2";

import { AuthContext } from "../../../features/auth/context/AuthProvider";

import {
    deleteBooking,
    getMyBookings,
    updateBookingDate,
} from "../services/bookingService";

const MyBookings = () => {
    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState([]);

    const [loading, setLoading] = useState(true);

    // fetch bookings
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const data = await getMyBookings(user?.email);

                setBookings(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        if (user?.email) {
            fetchBookings();
        }
    }, [user]);

    // cancel booking
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Cancel Booking?",
            text: "You can not undo this action.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#f97316",
            cancelButtonColor: "#ef4444",
            confirmButtonText: "Yes, Cancel",
            background: "#0f172a",
            color: "#fff",
        });

        if (!result.isConfirmed) return;

        try {
            const res = await deleteBooking(id);

            if (res.deletedCount > 0) {
                setBookings((prev) =>
                    prev.filter((booking) => booking._id !== id),
                );

                toast.success("Booking Cancelled");
            }
        } catch (error) {
            console.log(error);

            toast.error("Delete Failed");
        }
    };

    // update booking
    const handleUpdateDate = async (id) => {
        const { value: newDate } = await Swal.fire({
            title: "Modify Booking Date",

            input: "date",

            inputLabel: "Select a new booking date",

            showCancelButton: true,

            confirmButtonText: "Update Date",

            confirmButtonColor: "#f97316",

            cancelButtonColor: "#ef4444",

            background: "#0f172a",

            color: "#ffffff",

            inputAttributes: {
                min: new Date().toISOString().split("T")[0],
            },
        });

        if (!newDate) return;

        try {
            const result = await updateBookingDate(id, newDate);

            if (result.modifiedCount > 0) {
                setBookings((prev) =>
                    prev.map((booking) =>
                        booking._id === id
                            ? {
                                  ...booking,
                                  bookingDate: newDate,
                              }
                            : booking,
                    ),
                );

                Swal.fire({
                    title: "Booking Updated!",

                    text: "Your booking date has been modified.",

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
        return (
            <section className="bg-black min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-orange-500"></span>
            </section>
        );
    }

    return (
        <section className="bg-black min-h-screen py-28">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 px-5 py-2 rounded-full mb-6">
                        My Bookings
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
                        Your Reserved
                        <span className="block text-orange-500 mt-2">
                            Luxury Cars
                        </span>
                    </h1>
                </div>

                {/* Empty */}
                {bookings.length === 0 && (
                    <div className="text-center py-24 bg-slate-900 border border-white/10 rounded-4xl">
                        <h2 className="text-4xl font-black text-white">
                            No Bookings Found
                        </h2>

                        <p className="text-gray-400 mt-4 text-lg">
                            Start booking your favorite cars today.
                        </p>
                    </div>
                )}

                {/* Cards */}
                {bookings.length > 0 && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {bookings.map((booking) => (
                            <div
                                key={booking._id}
                                className="bg-slate-900 border border-white/10 rounded-4xl overflow-hidden"
                            >
                                {/* Image */}
                                <img
                                    src={booking.carImage}
                                    alt={booking.carName}
                                    className="w-full h-70 object-cover"
                                />

                                {/* Content */}
                                <div className="p-8">
                                    <h2 className="text-3xl font-black text-white">
                                        {booking.carName}
                                    </h2>

                                    <p className="text-orange-500 text-2xl font-bold mt-4">
                                        ${booking.price}
                                        /day
                                    </p>

                                    <div className="mt-6 space-y-3">
                                        <p className="text-gray-300">
                                            <span className="text-orange-500 font-semibold">
                                                Booking Date:
                                            </span>{" "}
                                            {booking.bookingDate}
                                        </p>

                                        <p className="text-gray-300">
                                            <span className="text-orange-500 font-semibold">
                                                User:
                                            </span>{" "}
                                            {booking.bookingUserName}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                        <button
                                            onClick={() =>
                                                handleUpdateDate(booking._id)
                                            }
                                            className="flex-1 bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-4 rounded-2xl font-bold"
                                        >
                                            Modify
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleDelete(booking._id)
                                            }
                                            className="flex-1 bg-red-500 hover:bg-red-600 transition duration-300 text-white py-4 rounded-2xl font-bold"
                                        >
                                            Cancel
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

export default MyBookings;
