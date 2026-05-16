import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../features/home/pages/Home";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";

import BrowseCars from "../features/cars/pages/BrowseCars";
import CarDetails from "../features/cars/pages/CarDetails";
import AddCar from "../features/cars/pages/AddCar";
import UpdateCar from "../features/cars/pages/UpdateCar";
import MyListings from "../features/cars/pages/MyListings";

import MyBookings from "../features/bookings/pages/MyBookings";

import ErrorPage from "../features/error/ErrorPage";

import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,

        errorElement: <ErrorPage />,

        children: [
            // Home
            {
                path: "/",
                element: <Home />,
            },

            // Auth
            {
                path: "/login",
                element: <Login />,
            },

            {
                path: "/register",
                element: <Register />,
            },

            // Cars
            {
                path: "/browse-cars",
                element: <BrowseCars />,
            },

            {
                path: "/cars/:id",
                element: (
                    <PrivateRoute>
                        <CarDetails />
                    </PrivateRoute>
                ),
            },

            {
                path: "/add-car",
                element: (
                    <PrivateRoute>
                        <AddCar />
                    </PrivateRoute>
                ),
            },

            {
                path: "/update-car/:id",
                element: (
                    <PrivateRoute>
                        <UpdateCar />
                    </PrivateRoute>
                ),
            },

            {
                path: "/my-listings",
                element: (
                    <PrivateRoute>
                        <MyListings />
                    </PrivateRoute>
                ),
            },

            // Bookings
            {
                path: "/my-bookings",
                element: (
                    <PrivateRoute>
                        <MyBookings />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;
