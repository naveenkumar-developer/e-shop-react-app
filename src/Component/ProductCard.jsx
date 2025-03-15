import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ACTION } from "../store/Cart";
import { ACTIONWISHLIST } from "../store/Wishlist";
import { UseWishlist } from "../store/Wishlist";
import { UseDispatchCart } from "../store/Cart";
import { UseDispatchWishlist } from "../store/Wishlist";
import "../assets/styles/ProductCard.css";

function ProductCard({ product }) {
  const ProductItemsWishlist  = UseWishlist()
  const dispatch = UseDispatchCart();
  const dispatchWishlist = UseDispatchWishlist();

  const addTocart = (items) => {
      dispatch({ type: ACTION.ADD, item: items });
    }
  

  const addToWishlist = (items, itemId) => {
    const existingItem = ProductItemsWishlist.find( (productInStore) => productInStore.id === itemId)
    if(existingItem){
      alert("It is already selected")
    }else{
      
      dispatchWishlist({ type: ACTIONWISHLIST.ADD, item: items })
    }
    
  };

  return (
    <>
      <div className="ProductCard" data-name={product.productName}>
        <div className="img_container">
          <img src={product.imgUrl} alt="product card" />
        </div>
        <div className="productCard_body">
          <h2>{`₹ ${product.productPrice}`}</h2>
          <h4>{product.productModel}</h4>
          <h3>{product.productBrand}</h3>
        </div>
        <div className="productCard_footer">
          <FavoriteBorderOutlinedIcon
            className="wishlistIcon"
            role="button"
            tabIndex="0"
            aria-label="Add To Wishlist"
            onClick={() => addToWishlist(product, product.id)}
          />
          <ShoppingCartOutlinedIcon
            className="AddToCartIcon"
            role="button"
            tabIndex="0"
            aria-label="Add To Cart"
            onClick={() => addTocart(product)}
          />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
