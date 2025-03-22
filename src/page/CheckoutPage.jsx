import { UseCart } from "../store/Cart";
import GppGoodIcon from "@mui/icons-material/GppGood";
import CloseIcon from "@mui/icons-material/Close";
import "../assets/styles/CheckoutPage.css";
import { useState } from "react";
function CheckoutPage() {
  const [showModal, setShowModal] = useState(false);
  const ProductItems = UseCart();
  const totalAmount = ProductItems.reduce(
    (acc, item) => acc + item.productPrice * item.quantity,
    0
  );

  const handleForm = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="checkout_container container">
        <h4 className="checkoutPage_title">Order</h4>
        <form className="checkoutForm" onSubmit={handleForm}>
          <div className="inputGroup">
            <label htmlFor="name" className="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="nameInputBox"
              name="User name"
              aria-label="User name"
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="email" className="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="emailInputBox"
              name="User Email"
              aria-label="User Email"
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="mobileNumber" className="mobileNumber">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              className="mobileNumberInputBox"
              name="Mobile Number"
              aria-label="Mobile Number"
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="address" className="address">
              Address
            </label>
            <textarea
              name="address"
              id="address"
              aria-label="address"
              required
            ></textarea>
          </div>
          <fieldset name="paymentMethod">
            <legend>Payment Methods</legend>
            <div className="inputGroup_radio">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="cash on delivery"
                required
              />
              <label htmlFor="cod">Cash On Delivery</label>
            </div>
            <div className="inputGroup_radio">
              <input
                type="radio"
                className="onlinePaymentInputBox"
                name="paymentMethod"
                aria-label="online payment"
                required
              />
              <label htmlFor="onlinePayment" className="onlinePayment">
                Online Payment
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Shipping to</legend>
            <div className="inputGroup_radio">
              <input
                type="radio"
                id="home"
                name="shippingLocation"
                className="homeInputBox"
                required
              />
              <label htmlFor="home">Home</label>
            </div>
            <div className="inputGroup_radio">
              <input
                type="radio"
                id="office"
                name="shippingLocation"
                className="officeInputBox"
                required
              />
              <label htmlFor="office">Office</label>
            </div>
          </fieldset>
          <div className="TP_container">
            <h5>Total Payment</h5>
            <strong>{`₹ ${totalAmount}`}</strong>
          </div>
          <button type="submit" className="confirmOrderBtn">
            Confirm order
          </button>
        </form>
      </div>
      {showModal && (
        <div className={`formSubmittedModal ${showModal ? "show" : "hide"}`}>
          <GppGoodIcon className="doneIcon" />
          <h5>Order Placed</h5>
          <CloseIcon
            className="closeModal"
            role="button"
            aria-label="closeBtn"
            onClick={handleForm}
          />
        </div>
      )}
    </>
  );
}

export default CheckoutPage;
