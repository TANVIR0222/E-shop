import TrendingProduct from "../Shop/TrendingProduct";
import Banner from "./Banner";
import Blogs from "./Blogs";
import Category from "./Category";
import DealsSections from "./DealsSections";
import Hero from "./Hero";
import PromoBanner from "./PromoBanner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Hero/>
            <TrendingProduct/>
            <DealsSections/>
            <PromoBanner/>
            <Blogs />
        </div>
    );
};

export default Home;