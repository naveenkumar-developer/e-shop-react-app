import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import "../assets/styles/Sidebar.css";
import { NavLink } from "react-router-dom";
function SideBar({ status }) {
  return (
    <>
      {status && (
        <div className="sideBar">
          <h5 className="sidebarTitle">
            <span>E</span>-shop
          </h5>
          <div className="sideBarRow1">
            <div className="homelabel_sidebar_container">
              <NavLink to="/e-shop-react-app/" className="sideBarLink">
                <HomeOutlinedIcon />
                <div className="active">Home</div>
              </NavLink>
            </div>
            <div className="shoplabel_sidebar_container">
              <NavLink className="sideBarLink">
                <ShoppingBagOutlinedIcon />
                <div>Shop</div>
              </NavLink>
            </div>
            <div className="shopDetailslable_container">
              <NavLink className="sideBarLink">
                <TextSnippetOutlinedIcon />
                <div>Shop Details</div>
              </NavLink>
            </div>
            <div className="contactlabel_container">
              <NavLink className="sideBarLink">
                <CallOutlinedIcon />
                <div>Contact</div>
              </NavLink>
            </div>
          </div>

          <div className="sideBarRow2">
            <div className="loginAndoutlabel_container">
              <NavLink className="sideBarLink">
                <LoginOutlinedIcon />
                <div>Login</div>
              </NavLink>
            </div>
            <div className="registerLabel_container">
              <NavLink className="sideBarLink">
                <HowToRegOutlinedIcon />
                <div>Register</div>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
