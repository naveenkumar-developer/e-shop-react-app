import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import "../assets/styles/Header.css"
import { UseCart } from '../store/Cart';
import { UseWishlist } from '../store/Wishlist';
import { NavLink, Link } from 'react-router-dom';


function Header({status,sidebarFunc}){
const CartItems = UseCart();
const WishlistItems= UseWishlist()
return (
  <>
    <header className="header_container mt-3">
      {/* LABEL AND ICONS HEADER  */}
      <div className="header_labelsAndIcons_container">
        <div className="labels_container_header">
          <div>FAQs</div>
          <div>Help</div>
          <div>Support</div>
        </div>
        <div className="icons_container_header">
          <FacebookIcon />
          <WhatsAppIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <LinkedInIcon />
        </div>
      </div>
      {/* SEARCH & WISHLIST & CART  */}
      <div className="SearchAndWishlistAndCart_container mt-3">
        <Link className="titleLink" to="/e-shop-react-app/">
          <div className="TitleForXL">
            <h1 className="Title">
              <span>E</span>-shop
            </h1>
          </div>
        </Link>

        <div className="searchInputGroup">
          <input type="text" placeholder="Search for products" />
          <SearchIcon />
        </div>
        <div className="WishlistAndCart_container">
          <Link className="wishlistLink" to="/e-shop-react-app/Wishlist">
            <FavoriteBorderOutlinedIcon className="wishlistIcon_header" />
            <span className="stauts">{WishlistItems.length}</span>
          </Link>
          <Link className="cartLink" to="/e-shop-react-app/Cart">
            <ShoppingCartOutlinedIcon className="cartIcon_header" />
            <span className="stauts">{CartItems.length}</span>
          </Link>
        </div>
      </div>
      {/* TITLE AND CATEGORIES BUTTON  */}
      <div className="TitleAndCategoriesBtn_container mt-3 ">
        <Link className="titleLink" to="/e-shop-react-app/">
          <div className="TitleForSM">
            <h1 className="Title">
              <span>E</span>-shop
            </h1>
          </div>
        </Link>

        <div className="categoriesBtn">
          {status ? (
            <CloseIcon role="button" onClick={sidebarFunc} />
          ) : (
            <MenuOutlinedIcon role="button" onClick={sidebarFunc} />
          )}
        </div>
      </div>
      {/* SUBHEADER LABELS  */}
      <div className="SubHeader_labels mt-3">
        <div className="col1">
          <NavLink className="headerLabelLinks" to="/e-shop-react-app/">
            <div>Home</div>
          </NavLink>
          <div>Shop</div>
          <div>Shop Details</div>
          <div>Contact</div>
        </div>

        <div className="col2">
          <div>Login</div>
          <div>Register</div>
        </div>
      </div>
    </header>
  </>
);
}

export default Header;