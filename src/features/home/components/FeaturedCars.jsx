import { useEffect, useState } from "react";

import CarCard from "../../cars/components/CarCard";

import { getAllCars } from "../../cars/services/carService";
import LoadingSpinner from "../../../components/shared/LoadingSpinner/LoadingSpinner";

const FeaturedCars = () => {
    const [cars, setCars] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const data = await getAllCars();

                setCars(data.slice(0, 6));
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    if (loading) {
        return (
            <section className="bg-black py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <LoadingSpinner />
                </div>
            </section>
        );
    }

    return (
        <section className="bg-black pt-24">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 px-5 py-2 rounded-full mb-6">
                        Featured Collection
                    </div>

                    <h2 className="text-5xl font-black text-white leading-tight">
                        Explore Our
                        <span className="text-orange-500"> Premium Cars</span>
                    </h2>

                    <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                        Discover luxury, comfort and performance with our
                        handpicked premium car collection for every journey.
                    </p>
                </div>

                {/* Cars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {cars.map((car) => (
                        <CarCard key={car._id} car={car} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCars;
