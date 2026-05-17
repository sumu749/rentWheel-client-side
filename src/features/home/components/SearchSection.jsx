import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaArrowRight,
    FaSearch,
    FaCarSide,
    FaStar,
    FaUsers,
    FaHeadset,
} from "react-icons/fa";

const SearchSection = () => {
    const navigate = useNavigate();

    const [searchText, setSearchText] = useState("");
    const [category, setCategory] = useState("All");
    const [maxPrice, setMaxPrice] = useState("");

    const handleSearch = () => {
        const params = new URLSearchParams();

        if (searchText) {
            params.set("searchText", searchText);
        }

        if (category && category !== "All") {
            params.set("category", category);
        }

        if (maxPrice) {
            params.set("maxPrice", maxPrice);
        }

        const queryString = params.toString();

        navigate(`/browse-cars${queryString ? `?${queryString}` : ""}`);
    };

    return (
        <section className="relative z-20 -mt-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#0f172a]/90 backdrop-blur-2xl border border-white/10 rounded-4xl p-6 lg:p-8 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Search Term */}
                        <div className="lg:border-r border-white/10 lg:pr-6">
                            <div className="flex items-center gap-3 text-orange-500 mb-3">
                                <FaSearch />

                                <span className="font-semibold text-white">
                                    Search by name or category
                                </span>
                            </div>

                            <input
                                type="text"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder="Enter car name or category"
                                className="w-full bg-transparent text-gray-300 outline-none"
                            />
                        </div>

                        {/* Category */}
                        <div className="lg:border-r border-white/10 lg:pr-6">
                            <div className="flex items-center gap-3 text-orange-500 mb-3">
                                <FaCarSide />

                                <span className="font-semibold text-white">
                                    Category
                                </span>
                            </div>

                            <select
                                className="w-full bg-transparent text-gray-300 outline-none"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option className="bg-slate-900" value="All">
                                    All Categories
                                </option>
                                <option className="bg-slate-900" value="SUV">
                                    SUV
                                </option>
                                <option className="bg-slate-900" value="Luxury">
                                    Luxury
                                </option>
                                <option className="bg-slate-900" value="Sports">
                                    Sports
                                </option>
                                <option
                                    className="bg-slate-900"
                                    value="Electric"
                                >
                                    Electric
                                </option>
                                <option className="bg-slate-900" value="Sedan">
                                    Sedan
                                </option>
                            </select>
                        </div>

                        {/* Max Price */}
                        <div className="lg:border-r border-white/10 lg:pr-6">
                            <div className="flex items-center gap-3 text-orange-500 mb-3">
                                <FaStar />

                                <span className="font-semibold text-white">
                                    Max price
                                </span>
                            </div>

                            <input
                                type="number"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                placeholder="Enter max price"
                                min="0"
                                className="w-full bg-transparent text-gray-300 outline-none"
                            />
                        </div>

                        {/* Search Button */}
                        <button
                            type="button"
                            onClick={handleSearch}
                            className="bg-orange-500 hover:bg-orange-600 transition duration-300 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 min-h-18"
                        >
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
