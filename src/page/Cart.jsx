import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { UseCart } from "../store/Cart";
import { UseDispatchCart } from "../store/Cart";
import { ACTION } from "../store/Cart";
import emptyCartLogo from "../assets/img/emptyCartLogo.jpg";
import { NavLink} from "react-router-dom";
import "../assets/styles/EmptyStatus.css";
import "../assets/styles/Cart.css";
function Cart() {
  const ProductItems = UseCart();
  const dispatch = UseDispatchCart();
  const totalAmount = ProductItems.reduce(
    (acc, item) => acc + item.productPrice * item.quantity,
    0
  );
  return (
    <>
      {ProductItems.length === 0 ? (
        <div className="emptyStatus_container mt-5">
          <div className="emptyStatusImg_container">
            <img src={emptyCartLogo} alt="empty Cart logo" loading="lazy" />
          </div>
          <div className="emptyStatus">
            <h2>Ohhh... Your cart is empty</h2>
            <p>but it doesn't have to be</p>
          </div>
        </div>
      ) : (
        <div className="Cart_wrapper">
          <div className="cartCards_container">
            {ProductItems.map((item) => (
              <div className="CartCard" key={item.id}>
                <div className="img_cartCard">
                  <img src={item.imgUrl} alt="Cart img" />
                </div>
                <div className="CartCard_body">
                  <div className="BrandAndModel_wrapper">
                    <h3>{item.productBrand}</h3>
                    <h4>{item.productModel}</h4>
                  </div>
                  <div className="CartCard_footer">
                    <div className="quandity_wrapper">
                      <div
                        role="button"
                        onClick={() =>
                          dispatch({ type: ACTION.DECREMENT, id: item.id })
                        }
                      >
                        <RemoveIcon />
                      </div>
                      <strong>{item.quantity}</strong>
                      <div
                        role="button"
                        onClick={() =>
                          dispatch({ type: ACTION.INCREMENT, id: item.id })
                        }
                      >
                        <AddIcon />
                      </div>
                    </div>
                    <div className="CartPrice__wrapper">
                      <h4>{`₹ ${item.productPrice}`}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <NavLink className="checkoutBtnLink" to="/e-shop-react-app/cart/Checkout">
            <div className="checkoutBtn mt-5" role="button">
              Checkout <span>{`₹ ${totalAmount}`}</span>
            </div>
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Cart;
