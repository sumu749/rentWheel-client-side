import {
    FaCarSide,
    FaHeadset,
    FaShieldAlt,
    FaWallet,
    FaClock,
    FaMapMarkedAlt,
} from "react-icons/fa";

const features = [
    {
        icon: <FaCarSide />,
        title: "Premium Car Collection",
        description:
            "Choose from luxury sedans, SUVs, sports cars and electric vehicles for every journey.",
    },

    {
        icon: <FaWallet />,
        title: "Affordable Pricing",
        description:
            "Transparent pricing with no hidden charges and flexible rental packages.",
    },

    {
        icon: <FaShieldAlt />,
        title: "Safe & Secure",
        description:
            "Verified vehicles, trusted providers and secure booking experience for every customer.",
    },

    {
        icon: <FaClock />,
        title: "Instant Booking",
        description:
            "Book your desired car within minutes using our seamless and fast booking system.",
    },

    {
        icon: <FaMapMarkedAlt />,
        title: "Multiple Locations",
        description:
            "Available across major cities with convenient pickup and drop-off points.",
    },

    {
        icon: <FaHeadset />,
        title: "24/7 Support",
        description:
            "Our support team is always ready to assist you anytime during your journey.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-black pt-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-100 h-100 bg-orange-500/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-100 h-100 bg-orange-500/10 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 px-5 py-2 rounded-full mb-6">
                        Why Choose Us
                    </div>

                    <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                        The Smarter Way
                        <span className="block text-orange-500 mt-2">
                            To Rent Cars
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed mt-6">
                        Experience premium car rental with comfort, safety and
                        reliability. RentWheels provides the best vehicles and
                        seamless booking experience for modern travelers.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-orange-500/40 transition duration-500 overflow-hidden"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-linear-to-br from-orange-500/0 via-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            {/* Icon */}
                            <div className="relative z-10 w-20 h-20 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-4xl text-orange-500 mb-8 group-hover:scale-110 transition duration-500">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-2xl font-black text-white mb-4 group-hover:text-orange-500 transition duration-300">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="relative z-10 text-gray-400 leading-relaxed text-lg">
                                {feature.description}
                            </p>

                            {/* Decorative Border */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24">
                    <div className="bg-linear-to-r from-orange-500 to-orange-600 rounded-[40px] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Text */}
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                Ready To Start Your Journey?
                            </h2>

                            <p className="text-white/80 text-lg mt-5 leading-relaxed">
                                Explore premium cars and enjoy unforgettable
                                driving experiences with RentWheels.
                            </p>
                        </div>

                        {/* Button */}
                        <button className="bg-black hover:bg-slate-900 transition duration-300 text-white px-10 py-5 rounded-2xl font-bold text-lg whitespace-nowrap">
                            Browse Cars
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
