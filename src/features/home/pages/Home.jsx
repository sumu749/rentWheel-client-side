import HeroBanner from "../components/HeroBanner";
import SearchSection from "../components/SearchSection";
import FeaturedCars from "../components/FeaturedCars";
import WhyChooseUs from "../components/WhyChooseUs";
import TopRatedCars from "../components/TopRatedCars";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
        <div>
            <HeroBanner />

            <SearchSection />

            <FeaturedCars />

            <WhyChooseUs />

            <TopRatedCars />

            <Testimonials />
        </div>
    );
};

export default Home;
