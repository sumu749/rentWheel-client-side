import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import {
    FaArrowRight,
    // FaCalendarAlt,
    // FaCarSide,
    // FaHeadset,
    // FaMapMarkerAlt,
    // FaStar,
    // FaUsers,
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
        <section className="relative bg-black overflow-hidden -mb-4">
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
                className="h-200"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-200 ">
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
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center"
                            >
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
                                        <Typewriter
                                            words={[slide.subtitle]}
                                            cursor
                                            cursorStyle="|"
                                            typeSpeed={80}
                                            deleteSpeed={40}
                                            delaySpeed={4000}
                                        />
                                    </h2>

                                    {/* Description */}
                                    <p className="mt-8 text-xl text-gray-300 max-w-2xl leading-relaxed">
                                        <Typewriter
                                            words={[slide.description]}
                                            cursor
                                            cursorStyle="|"
                                            typeSpeed={50}
                                            deleteSpeed={20}
                                            delaySpeed={6000}
                                        />
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
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroBanner;
