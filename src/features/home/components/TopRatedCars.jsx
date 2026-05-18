import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import { FaArrowRight, FaMapMarkerAlt, FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";

import { getAllCars } from "../../cars/services/carService";

import "swiper/css";
import "swiper/css/pagination";

const TopRatedCars = () => {
    const [cars, setCars] = useState([]);
    const canLoop = cars.length >= 4;

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const data = await getAllCars();

                setCars(data.slice(0, 10));
            } catch (error) {
                console.log(error);
            }
        };

        fetchCars();
    }, []);

    return (
        <section className="bg-slate-950 pt-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 mb-16">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 px-5 py-2 rounded-full mb-6">
                            Top Rated Collection
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                            Luxury Cars
                            <span className="block text-orange-500 mt-2">
                                Loved By Customers
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                            Explore our highest-rated premium vehicles trusted
                            by thousands of happy customers across the country.
                        </p>
                    </div>

                    {/* Button */}
                    <Link
                        to="/browse-cars"
                        className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3"
                    >
                        View All Cars
                        <FaArrowRight />
                    </Link>
                </div>
                {/* Slider */}
                {cars.length > 0 ? (
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        spaceBetween={24}
                        loop={canLoop}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },

                            768: {
                                slidesPerView: 2,
                            },

                            1280: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-14"
                    >
                        {cars.map((car) => (
                            <SwiperSlide key={car._id}>
                                <div className="group bg-slate-900 border border-white/10 rounded-4xl overflow-hidden hover:border-orange-500/40 transition duration-500">
                                    {/* Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={car.image}
                                            alt={car.carName}
                                            className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>

                                        {/* Rating */}
                                        <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full flex items-center gap-2">
                                            <FaStar className="text-orange-500" />

                                            <span className="text-white font-semibold">
                                                4.9
                                            </span>
                                        </div>

                                        {/* Price */}
                                        <div className="absolute bottom-5 right-5 bg-orange-500 text-white px-5 py-3 rounded-2xl">
                                            <span className="text-2xl font-black">
                                                ${car.price}
                                            </span>

                                            <span className="text-sm">
                                                /day
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-7">
                                        {/* Category */}
                                        <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                                            {car.category}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-3xl font-black text-white group-hover:text-orange-500 transition duration-300">
                                            {car.carName}
                                        </h3>

                                        {/* Location */}
                                        <div className="flex items-center gap-3 text-gray-400 mt-4">
                                            <FaMapMarkerAlt className="text-orange-500" />

                                            <span>{car.location}</span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-400 leading-relaxed mt-5">
                                            Premium luxury vehicle with high
                                            performance, comfort and
                                            unforgettable driving experience.
                                        </p>

                                        {/* Button */}
                                        <Link
                                            to={`/cars/${car._id}`}
                                            className="mt-7 inline-flex items-center gap-3 text-orange-500 font-bold hover:gap-5 transition-all duration-300"
                                        >
                                            Book This Car
                                            <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="pb-14 text-center text-white/70">
                        Loading top-rated cars...
                    </div>
                )}{" "}
            </div>
        </section>
    );
};

export default TopRatedCars;
