import { useEffect, useMemo, useState } from "react";

import { FaSearch, FaSlidersH } from "react-icons/fa";

import CarCard from "../components/CarCard";

import { getAllCars } from "../services/carService";

const BrowseCars = () => {
    const [cars, setCars] = useState([]);

    const [loading, setLoading] = useState(true);

    const [searchText, setSearchText] = useState("");

    const [category, setCategory] = useState("All");

    const [sortBy, setSortBy] = useState("");

    // fetch cars
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const data = await getAllCars();

                setCars(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    // filtered cars
    const filteredCars = useMemo(() => {
        let filtered = [...cars];

        // search
        if (searchText) {
            filtered = filtered.filter((car) =>
                car.carName.toLowerCase().includes(searchText.toLowerCase()),
            );
        }

        // category
        if (category !== "All") {
            filtered = filtered.filter((car) => car.category === category);
        }

        // sort
        if (sortBy === "low-to-high") {
            filtered.sort((a, b) => a.price - b.price);
        }

        if (sortBy === "high-to-low") {
            filtered.sort((a, b) => b.price - a.price);
        }

        return filtered;
    }, [cars, searchText, category, sortBy]);

    return (
        <section className="bg-black min-h-screen pt-24">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 px-5 py-2 rounded-full mb-6">
                        Browse Collection
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
                        Explore Our
                        <span className="block text-orange-500 mt-2">
                            Luxury Cars
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                        Discover premium vehicles for unforgettable driving
                        experiences.
                    </p>
                </div>

                {/* Filters */}
                <div className="bg-slate-900 border border-white/10 rounded-4xl p-6 mb-14">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                        {/* Search */}
                        <div className="relative lg:col-span-2">
                            <FaSearch className="absolute top-1/2 -translate-y-1/2 left-5 text-gray-400" />

                            <input
                                type="text"
                                placeholder="Search cars..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                className="w-full bg-slate-800 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-white outline-none focus:border-orange-500"
                            />
                        </div>

                        {/* Category */}
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="bg-slate-800 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500"
                        >
                            <option value="All">All Categories</option>

                            <option value="SUV">SUV</option>

                            <option value="Luxury">Luxury</option>

                            <option value="Sports">Sports</option>

                            <option value="Electric">Electric</option>

                            <option value="Sedan">Sedan</option>
                        </select>

                        {/* Sort */}
                        <div className="relative">
                            <FaSlidersH className="absolute top-1/2 -translate-y-1/2 left-5 text-gray-400" />

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full bg-slate-800 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-white outline-none focus:border-orange-500"
                            >
                                <option value="">Sort By Price</option>

                                <option value="low-to-high">Low to High</option>

                                <option value="high-to-low">High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="flex justify-center py-20">
                        <span className="loading loading-spinner loading-lg text-orange-500"></span>
                    </div>
                )}

                {/* Empty State */}
                {!loading && filteredCars.length === 0 && (
                    <div className="text-center py-24 bg-slate-900 border border-white/10 rounded-4xl">
                        <h2 className="text-4xl font-black text-white">
                            No Cars Found
                        </h2>

                        <p className="text-gray-400 mt-4 text-lg">
                            Try searching with different keywords.
                        </p>
                    </div>
                )}

                {/* Cars Grid */}
                {!loading && filteredCars.length > 0 && (
                    <>
                        {/* Results */}
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-2xl font-bold text-white">
                                {filteredCars.length} Cars Available
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredCars.map((car) => (
                                <CarCard key={car._id} car={car} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default BrowseCars;
