import Home from "./Home.jsx";
import Cart from "./Cart.jsx"
import Wishlist from "./wishlist.jsx";
import MenFashionCard from "../Component/MenFashionCard";
import WomenFashionCard from "../Component/WomenFashionCard";
import {Routes, Route, Navigate} from "react-router-dom"

function PageRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Navigate to="Homepage" />} />
            <Route path="/Homepage" element={<Home />} >
                <Route index element={<MenFashionCard />} />
                <Route path="menFashion" element={<MenFashionCard />} />
                <Route path="WomenFashion" element={<WomenFashionCard />} />
            </Route>
            <Route path="/Cart"  element={<Cart />} />
            <Route path="/Wishlist"  element={<Wishlist />} />
        </Routes>
        </>
    )
}

export default PageRoutes;