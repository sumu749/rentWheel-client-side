import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FaGasPump, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const defaultCarImage = "https://via.placeholder.com/800x500?text=No+Car+Image";

const CarCard = ({ car }) => {
    const { _id, carName, image, category, location, price, providerName } =
        car;

    const handleImageError = (event) => {
        event.target.src = defaultCarImage;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="group bg-slate-900 border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/40 transition duration-500"
        >
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src={image || defaultCarImage}
                    alt={carName}
                    onError={handleImageError}
                    className="w-full h-65 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Category */}
                <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                        {category}
                    </span>
                </div>

                {/* Availability Badge */}
                <div className="absolute top-4 right-4 z-20">
                    <span
                        className={`px-4 py-2 rounded-full text-sm font-bold ${
                            car.status === "available"
                                ? "bg-green-500 text-white"
                                : "bg-red-500 text-white"
                        }`}
                    >
                        {car.status === "available" ? "Available" : "Booked"}
                    </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 right-4">
                    <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl">
                        <span className="text-2xl font-black">${price}</span>

                        <span className="text-sm text-gray-300">/day</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Title */}
                <h2 className="text-2xl font-black text-white group-hover:text-orange-500 transition duration-300">
                    {carName}
                </h2>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-400 mt-3">
                    <FaMapMarkerAlt className="text-orange-500" />

                    <span>{location}</span>
                </div>

                {/* Provider */}
                {providerName && (
                    <div className="flex items-center gap-2 text-gray-400 mt-3">
                        <FaUsers className="text-orange-500" />

                        <span>Provider: {providerName}</span>
                    </div>
                )}

                {/* Specs */}
                <div className="flex items-center gap-6 mt-5 text-gray-300">
                    <div className="flex items-center gap-2">
                        <FaUsers className="text-orange-500" />

                        <span>4 Seats</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaGasPump className="text-orange-500" />

                        <span>Hybrid</span>
                    </div>
                </div>

                {/* Button */}
                <Link
                    to={`/cars/${_id}`}
                    className="mt-6 block w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white text-center py-4 rounded-2xl font-bold"
                >
                    Book Now
                </Link>
            </div>
        </motion.div>
    );
};

export default CarCard;
