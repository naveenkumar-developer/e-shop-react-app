import HeroSectionCarousel from "../Component/HerosectionCarousel";
import FeaturesLabel from "../Component/FeaturesLabels";
import CategoriesBanner from "../Component/CategoriesBanner";
import PageCategoriesLabel from "../Component/PageCategoriesLabel";
import TrendyProduct from "../Component/Trendy_product";
import NewsLetter from "../Component/NewsLetter";
import { Outlet } from "react-router-dom";

function Home(){
    return(
        <>
        <HeroSectionCarousel />
        <FeaturesLabel />
        <CategoriesBanner />
        <PageCategoriesLabel />
        <Outlet />
        <TrendyProduct />
        <NewsLetter />
        </>
    )
}

export default Home;