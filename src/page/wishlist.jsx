import { UseWishlist } from "../store/Wishlist";
import { UseDispatchWishlist } from "../store/Wishlist";
import { ACTION } from "../store/Cart";
import { ACTIONWISHLIST } from "../store/Wishlist";
import { UseDispatchCart } from "../store/Cart";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from '@mui/icons-material/Close';
import emptyStatusLogo from "../assets/img/emptyWishlistLogo.jpg";
import "../assets/styles/EmptyStatus.css"

import "../assets/styles/Wishlist.css"
function Wishlist(){
    const ProductItems = UseWishlist()
    const dispatch = UseDispatchCart()
    const dispatchWishlist = UseDispatchWishlist()
  const addTocart = (items) => {
    dispatch({ type: ACTION.ADD, item: items });
  };
    const removeWishlist = (items)=>{
        dispatchWishlist({ type: ACTIONWISHLIST.REMOVE, item: items });
    }
    return(
        <>
        {
            ProductItems.length === 0 ? <div className="emptyStatus_container mt-5">
                <div className="emptyStatusImg_container">
                    <img src={emptyStatusLogo} alt="empty wishlist logo" loading="lazy"/>
                </div>
                <div className="emptyStatus">
                    <h2>Your wishlist is empty!</h2>
                    <p>Explore more and shortlist some items</p>
                </div>
            </div> :
            <div className="wishlist_container mt-5">
                {
                    ProductItems.map( (item)=>(
                        <div className="WishlistCard" key={item.id}>
                            <div className="img_wishlistCard">
                                <img src={item.imgUrl} alt="wishlist card" />
                            </div>
                            <div className="wishlist_description">
                            <div className="wishlistCard_body">
                                <div className="BrandedAndModel_wrapper">
                                    <h3>{item.productBrand}</h3>
                                    <h4>{item.productModel}</h4>
                                </div>
                            </div>
                            <div className="wishlistCard_footer">
                                <strong className="price">{`₹ ${item.productPrice}`}</strong>
                                <button type="button" className="addToCartBtn" onClick={()=>addTocart(item)}><AddIcon /> Add to cart</button>
                            </div>
                            </div>
                            <div className="closeBtn_wishlist" onClick={()=> removeWishlist(item)}>
                                <CloseIcon />
                            </div>
                        </div>
                    ))
                }
            </div>
        }
        </>
    )
}

export default Wishlist;