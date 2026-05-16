import axiosInstance from "../../../api/axiosInstance";

// get all cars
export const getAllCars = async () => {
    const res = await axiosInstance.get("/cars");

    return res.data;
};

// get single car
export const getSingleCar = async (id) => {
    const res = await axiosInstance.get(`/cars/${id}`);

    return res.data;
};

// add car
export const addCar = async (carData) => {
    const res = await axiosInstance.post("/cars", carData);

    return res.data;
};

// update car
export const updateCar = async (id, updatedData) => {
    const res = await axiosInstance.put(`/cars/${id}`, updatedData);

    return res.data;
};

// delete car
export const deleteCar = async (id) => {
    const res = await axiosInstance.delete(`/cars/${id}`);

    return res.data;
};

// my listings
export const getMyCars = async (email) => {
    const res = await axiosInstance.get(`/my-cars?email=${email}`);

    return res.data;
};
