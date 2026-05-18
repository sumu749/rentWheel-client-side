import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { createBooking } from "../services/bookingService";

const BookingModal = ({ car, user, closeModal, onBookingSuccess }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const bookingData = {
                carId: car._id,

                carName: car.carName,

                carImage: car.image,

                bookingUserName: user?.displayName,

                bookingUserEmail: user?.email,

                bookingDate: data.bookingDate,

                price: car.price,
            };

            const result = await createBooking(bookingData);

            if (result.insertedId) {
                Swal.fire({
                    title: "Booking Confirmed!",
                    text: "Your luxury car has been reserved successfully.",
                    icon: "success",

                    confirmButtonColor: "#f97316",

                    background: "#0f172a",

                    color: "#ffffff",
                });

                toast.success("Booking confirmed");

                if (onBookingSuccess) {
                    onBookingSuccess();
                }

                reset();

                closeModal();
            }
        } catch (error) {
            console.log(error);

            toast.error("Booking Failed");
        }
    };

    return (
        <dialog open className="modal modal-open">
            <div className="modal-box max-w-2xl bg-slate-900 border border-white/10 text-white rounded-4xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-black">Book Car</h2>

                    <button
                        onClick={closeModal}
                        className="btn btn-circle btn-sm bg-orange-500 border-none text-white"
                    >
                        ✕
                    </button>
                </div>

                {/* Car Info */}
                <div className="bg-slate-800 rounded-2xl p-5 mb-8">
                    <img
                        src={car.image}
                        alt={car.carName}
                        className="w-full h-55 object-cover rounded-2xl"
                    />

                    <div className="mt-5">
                        <h3 className="text-2xl font-black">{car.carName}</h3>

                        <p className="text-orange-500 text-xl font-bold mt-2">
                            ${car.price}
                            /day
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Your Name
                        </label>

                        <input
                            type="text"
                            value={user?.displayName || ""}
                            readOnly
                            className="w-full bg-slate-800 border border-white/10 rounded-2xl px-5 py-4 outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Your Email
                        </label>

                        <input
                            type="email"
                            value={user?.email || ""}
                            readOnly
                            className="w-full bg-slate-800 border border-white/10 rounded-2xl px-5 py-4 outline-none"
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Booking Date
                        </label>

                        <input
                            type="date"
                            {...register("bookingDate", {
                                required: true,
                            })}
                            className="w-full bg-slate-800 border border-white/10 rounded-2xl px-5 py-4 outline-none"
                        />
                    </div>

                    {/* Submit */}
                    <button className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 py-5 rounded-2xl font-black text-lg">
                        Confirm Booking
                    </button>
                </form>
            </div>
        </dialog>
    );
};

export default BookingModal;
