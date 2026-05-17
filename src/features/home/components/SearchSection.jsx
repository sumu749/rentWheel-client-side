import {
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaArrowRight,
    FaUsers,
    FaCarSide,
    FaStar,
    FaHeadset,
} from "react-icons/fa";

const SearchSection = () => {
    return (
        <section className="relative z-20 -mt-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#0f172a]/90 backdrop-blur-2xl border border-white/10 rounded-4xl p-6 lg:p-8 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {/* Pick Up */}
                        <div className="lg:border-r border-white/10 lg:pr-6">
                            <div className="flex items-center gap-3 text-orange-500 mb-3">
                                <FaMapMarkerAlt />

                                <span className="font-semibold text-white">
                                    Pick-up Location
                                </span>
                            </div>

                            <select className="w-full bg-transparent text-gray-300 outline-none">
                                <option className="bg-slate-900">
                                    Select location
                                </option>

                                <option className="bg-slate-900">Dhaka</option>

                                <option className="bg-slate-900">
                                    Chittagong
                                </option>

                                <option className="bg-slate-900">Sylhet</option>
                                <option className="bg-slate-900">
                                    Rajshahi
                                </option>
                                <option className="bg-slate-900">Khulna</option>
                                <option className="bg-slate-900">
                                    Rangpur
                                </option>
                                <option className="bg-slate-900">
                                    Cumilla
                                </option>
                            </select>
                        </div>

                        {/* Drop Off */}
                        <div className="lg:border-r border-white/10 lg:pr-6">
                            <div className="flex items-center gap-3 text-orange-500 mb-3">
                                <FaMapMarkerAlt />

                                <span className="font-semibold text-white">
                                    Drop-off Location
                                </span>
                            </div>

                            <select className="w-full bg-transparent text-gray-300 outline-none">
                                <option className="bg-slate-900">
                                    Select location
                                </option>

                                <option className="bg-slate-900">Dhaka</option>

                                <option className="bg-slate-900">
                                    Chittagong
                                </option>

                                <option className="bg-slate-900">Sylhet</option>
                                <option className="bg-slate-900">Khulna</option>
                                <option className="bg-slate-900">
                                    Rangpur
                                </option>
                                <option className="bg-slate-900">
                                    Cumilla
                                </option>
                            </select>
                        </div>

                        {/* Pickup Date */}
                        <div className="lg:border-r border-white/10 lg:pr-6">
                            <div className="flex items-center gap-3 text-orange-500 mb-3">
                                <FaCalendarAlt />

                                <span className="font-semibold text-white">
                                    Pick-up Date
                                </span>
                            </div>

                            <input
                                type="date"
                                className="w-full bg-transparent text-gray-300 outline-none"
                            />
                        </div>

                        {/* Return Date */}
                        <div className="lg:border-r border-white/10 lg:pr-6">
                            <div className="flex items-center gap-3 text-orange-500 mb-3">
                                <FaCalendarAlt />

                                <span className="font-semibold text-white">
                                    Drop-off Date
                                </span>
                            </div>

                            <input
                                type="date"
                                className="w-full bg-transparent text-gray-300 outline-none"
                            />
                        </div>

                        {/* Search Button */}
                        <button className="bg-orange-500 hover:bg-orange-600 transition duration-300 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 min-h-18">
                            Search Cars
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pb-20">
                    <div className="flex items-center gap-4">
                        <FaCarSide className="text-4xl text-orange-500" />

                        <div>
                            <h3 className="text-3xl font-black text-white">
                                500+
                            </h3>

                            <p className="text-gray-400">Premium Cars</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaUsers className="text-4xl text-orange-500" />

                        <div>
                            <h3 className="text-3xl font-black text-white">
                                10K+
                            </h3>

                            <p className="text-gray-400">Happy Clients</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaStar className="text-4xl text-orange-500" />

                        <div>
                            <h3 className="text-3xl font-black text-white">
                                4.8
                            </h3>

                            <p className="text-gray-400">Customer Rating</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaHeadset className="text-4xl text-orange-500" />

                        <div>
                            <h3 className="text-3xl font-black text-white">
                                24/7
                            </h3>

                            <p className="text-gray-400">Support Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchSection;
