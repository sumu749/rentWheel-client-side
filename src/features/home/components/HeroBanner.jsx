import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import {
    FaArrowRight,
    FaCalendarAlt,
    FaCarSide,
    FaHeadset,
    FaMapMarkerAlt,
    FaStar,
    FaUsers,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        title: "Feel the Power",

        subtitle: "Every Mile",

        description: "Unleash performance and dominate the road.",
    },

    {
        image: "https://images.unsplash.com/photo-1603189617530-6d32306f57c5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        title: "Luxury Redefined",

        subtitle: "Comfort in Every Drive",

        description: "Experience elegance, comfort and class together.",
    },

    {
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        title: "Drive Your Passion",

        subtitle: "Live the Thrill",

        description: "Make every journey an unforgettable adventure.",
    },
];

const HeroBanner = () => {
    return (
        <section className="relative bg-black overflow-hidden">
            <Swiper
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                effect="fade"
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1200}
                loop={true}
                className="h-230"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-230">
                            {/* Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-right scale-105"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            ></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/65"></div>

                            {/* Gradient */}
                            <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-black/20"></div>

                            {/* Content */}
                            <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
                                <div className="max-w-3xl pt-24">
                                    {/* Small Badge */}
                                    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 px-5 py-2 rounded-full mb-8 backdrop-blur-md">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                        Premium Car Rental Platform
                                    </div>

                                    {/* Heading */}
                                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                        {slide.title}
                                    </h1>

                                    <h2 className="text-2xl md:text-4xl text-orange-500 mt-3 font-light italic">
                                        {slide.subtitle}
                                    </h2>

                                    {/* Description */}
                                    <p className="mt-8 text-xl text-gray-300 max-w-2xl leading-relaxed">
                                        {slide.description}
                                    </p>

                                    {/* Buttons */}
                                    <div className="flex flex-wrap gap-5 mt-10">
                                        <button className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3">
                                            Browse Cars
                                            <FaArrowRight />
                                        </button>

                                        <button className="border border-white/20 hover:border-orange-500 hover:bg-orange-500/10 transition duration-300 text-white px-8 py-4 rounded-xl font-bold text-lg">
                                            Add Your Car
                                        </button>
                                    </div>
                                </div>

                                {/* Search Box */}
                                <div className="mt-20 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                                    {/* Pickup */}
                                    <div className="border-r border-white/10 pr-5">
                                        <div className="flex items-center gap-3 text-orange-500 mb-2">
                                            <FaMapMarkerAlt />

                                            <span className="font-semibold text-white">
                                                Pick-up Location
                                            </span>
                                        </div>

                                        <input
                                            type="text"
                                            placeholder="Select location"
                                            className="bg-transparent outline-none text-white placeholder:text-gray-400 w-full"
                                        />
                                    </div>

                                    {/* Dropoff */}
                                    <div className="border-r border-white/10 pr-5">
                                        <div className="flex items-center gap-3 text-orange-500 mb-2">
                                            <FaMapMarkerAlt />

                                            <span className="font-semibold text-white">
                                                Drop-off Location
                                            </span>
                                        </div>

                                        <input
                                            type="text"
                                            placeholder="Select location"
                                            className="bg-transparent outline-none text-white placeholder:text-gray-400 w-full"
                                        />
                                    </div>

                                    {/* Pickup Date */}
                                    <div className="border-r border-white/10 pr-5">
                                        <div className="flex items-center gap-3 text-orange-500 mb-2">
                                            <FaCalendarAlt />

                                            <span className="font-semibold text-white">
                                                Pick-up Date
                                            </span>
                                        </div>

                                        <input
                                            type="date"
                                            className="bg-transparent outline-none text-white w-full"
                                        />
                                    </div>

                                    {/* Return Date */}
                                    <div className="border-r border-white/10 pr-5">
                                        <div className="flex items-center gap-3 text-orange-500 mb-2">
                                            <FaCalendarAlt />

                                            <span className="font-semibold text-white">
                                                Drop-off Date
                                            </span>
                                        </div>

                                        <input
                                            type="date"
                                            className="bg-transparent outline-none text-white w-full"
                                        />
                                    </div>

                                    {/* Button */}
                                    <button className="bg-orange-500 hover:bg-orange-600 transition duration-300 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 min-h-[70px]">
                                        Search Cars
                                        <FaArrowRight />
                                    </button>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pb-20">
                                    <div className="flex items-center gap-4">
                                        <FaCarSide className="text-4xl text-orange-500" />

                                        <div>
                                            <h3 className="text-3xl font-black text-white">
                                                500+
                                            </h3>

                                            <p className="text-gray-400">
                                                Premium Cars
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <FaUsers className="text-4xl text-orange-500" />

                                        <div>
                                            <h3 className="text-3xl font-black text-white">
                                                10K+
                                            </h3>

                                            <p className="text-gray-400">
                                                Happy Clients
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <FaStar className="text-4xl text-orange-500" />

                                        <div>
                                            <h3 className="text-3xl font-black text-white">
                                                4.8
                                            </h3>

                                            <p className="text-gray-400">
                                                Customer Rating
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <FaHeadset className="text-4xl text-orange-500" />

                                        <div>
                                            <h3 className="text-3xl font-black text-white">
                                                24/7
                                            </h3>

                                            <p className="text-gray-400">
                                                Support Service
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroBanner;
