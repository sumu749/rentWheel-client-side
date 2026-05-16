import { Link } from "react-router-dom";

const HeroBanner = () => {
    return (
        <section className="relative min-h-[90vh] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 min-h-[90vh] flex items-center">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 px-5 py-2 rounded-full mb-6">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Premium Car Rental Platform
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                        Drive Your
                        <span className="block text-orange-500">Dream Car</span>
                        Today
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
                        Rent luxury, electric, SUV, and family cars anytime,
                        anywhere. Experience seamless booking with trusted
                        providers at affordable prices.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-10">
                        <Link
                            to="/browse-cars"
                            className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white px-8 py-4 rounded-xl font-bold text-lg"
                        >
                            Browse Cars
                        </Link>

                        <Link
                            to="/add-car"
                            className="border border-white/20 hover:border-orange-500 hover:bg-orange-500/10 transition duration-300 text-white px-8 py-4 rounded-xl font-bold text-lg"
                        >
                            Add Your Car
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mt-14 max-w-xl">
                        <div>
                            <h2 className="text-3xl font-black text-white">
                                500+
                            </h2>

                            <p className="text-gray-400 mt-1">Premium Cars</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black text-white">
                                10K+
                            </h2>

                            <p className="text-gray-400 mt-1">Happy Clients</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black text-white">
                                24/7
                            </h2>

                            <p className="text-gray-400 mt-1">Support</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-950 to-transparent"></div>
        </section>
    );
};

export default HeroBanner;
