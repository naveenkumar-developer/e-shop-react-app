import Header from './Component/Header.jsx'
import PageRoutes from './page/PageRoutes.jsx';
import Footer from "./Component/Footer";
import { CartProvider } from "./store/Cart";
import { WishlistProvider } from './store/Wishlist.jsx';
import SideBar from './Component/Sidebar.jsx';
import "./App.css";
import { useState, useEffect } from 'react';
function App() {
  const [isOpen, setIsOpen]=useState(false)

  const handleSidebar = ()=>{
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  })
  return (
    <>
    <SideBar status={isOpen} />
    <WishlistProvider>
      <CartProvider>
        <div className="container app_container">
          <Header status={isOpen} sidebarFunc={handleSidebar}/>
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


// TODO CHECKOUT PAGE
export default App;
