import Header from './Component/Header.jsx'
import PageRoutes from './page/PageRoutes.jsx';
import Footer from "./Component/Footer";
import { CartProvider } from "./store/Cart";
import { WishlistProvider } from './store/Wishlist.jsx';
import "./App.css";
function App() {
  return (
    <>
    <WishlistProvider>

      <CartProvider>
        <div className="container app_container">
          <Header />
          <main className='main'>

            <PageRoutes />
          </main>
          <Footer className="footer_absolute"/>
        </div>
      </CartProvider>
    </WishlistProvider>

    </>
  );
}
// TODO CREATE REACT ROUTER LINKS IN THE PAGINATION CATEGORIES COMPONENT

// TODO CHECKOUT PAGE
export default App;
