import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import { FaQuoteRight, FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Sarah Ahmed",

        role: "Business Traveler",

        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",

        review: "RentWheels made my business trips incredibly smooth. The car quality and service were absolutely top-notch.",

        rating: 5,
    },

    {
        name: "Rakib Hasan",

        role: "Travel Enthusiast",

        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",

        review: "The booking process was super fast and easy. I loved the premium experience and clean vehicles.",

        rating: 5,
    },

    {
        name: "Nusrat Jahan",

        role: "Frequent Renter",

        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",

        review: "Amazing customer support and luxury cars at affordable prices. Highly recommended for family trips.",

        rating: 5,
    },

    {
        name: "Tanvir Alam",

        role: "Car Enthusiast",

        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",

        review: "Driving a Lamborghini through RentWheels was an unforgettable experience. Everything felt premium.",

        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="bg-black pt-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-87.5 h-87.5 bg-orange-500/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-87.5 h-87.5 bg-orange-500/10 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 px-5 py-2 rounded-full mb-6">
                        Customer Reviews
                    </div>

                    <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                        What Our
                        <span className="block text-orange-500 mt-2">
                            Customers Say
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed mt-6">
                        Thousands of happy customers trust RentWheels for
                        luxury, comfort and unforgettable travel experiences.
                    </p>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={24}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },

                        1280: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-14"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="group bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-4xl p-8 hover:border-orange-500/40 transition duration-500 relative overflow-hidden h-full">
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 text-6xl text-orange-500/10">
                                    <FaQuoteRight />
                                </div>

                                {/* Stars */}
                                <div className="flex items-center gap-2 mb-6">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <FaStar
                                                key={i}
                                                className="text-orange-500"
                                            />
                                        ),
                                    )}
                                </div>

                                {/* Review */}
                                <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
                                    “{testimonial.review}”
                                </p>

                                {/* User */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-2xl object-cover border border-white/10"
                                    />

                                    <div>
                                        <h3 className="text-xl font-bold text-white">
                                            {testimonial.name}
                                        </h3>

                                        <p className="text-orange-500">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-linear-to-br from-orange-500/0 via-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
