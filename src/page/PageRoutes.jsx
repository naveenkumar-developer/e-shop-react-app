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
            <Route path="/e-shop-react-app/" element={<Home />} >
                <Route index element={<MenFashionCard />} />
                <Route path="menFashion" element={<MenFashionCard />} />
                <Route path="WomenFashion" element={<WomenFashionCard />} />
                <Route path="*" element={<h1>Not found</h1>} />
            </Route>
            <Route path="/e-shop-react-app/Cart"  element={<Cart />} />
            <Route path="/e-shop-react-app/Wishlist"  element={<Wishlist />} />
        </Routes>
        </>
    )
}

export default PageRoutes;