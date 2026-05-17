import axiosInstance from "../../../api/axiosInstance";

// create booking
export const createBooking = async (bookingData) => {
    const res = await axiosInstance.post("/bookings", bookingData);

    return res.data;
};

// get my bookings
export const getMyBookings = async (email) => {
    const res = await axiosInstance.get(`/bookings?email=${email}`);

    return res.data;
};

// delete booking
export const deleteBooking = async (id) => {
    const res = await axiosInstance.delete(`/bookings/${id}`);

    return res.data;
};

// update booking
export const updateBookingDate = async (id, bookingDate) => {
    const res = await axiosInstance.patch(`/bookings/${id}`, {
        bookingDate,
    });

    return res.data;
};
