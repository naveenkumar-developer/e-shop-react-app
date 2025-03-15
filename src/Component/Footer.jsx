import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import "../assets/styles/Footer.css"
function Footer(){
    return(
        <>
        <footer className="footer_container mt-5">


        <address>
          <h2>Address</h2>
          <div className="location_container">
            <LocationOnOutlinedIcon className='footerIcon'/> 123 Street, Coimbatore, INDIA
          </div>
          <div className="mail_container">
            <MailOutlineOutlinedIcon className='footerIcon'/> info@example.com
          </div>
          <div className="phoneNumber_container">
            <CallOutlinedIcon className='footerIcon'/>012 456 7890
          </div>
        </address>
        <div className="quickLinks_container">
          <h2>Quick links</h2>
          <ul className='quicklinks_container'>
            <li><a href="#" className="link-1"><ChevronRightOutlinedIcon />Home</a></li>
            <li><a href="#" className="link-2"><ChevronRightOutlinedIcon />Our Shop</a></li>
            <li><a href="#" className="link-3"><ChevronRightOutlinedIcon />Shop Detail</a></li>
            <li><a href="#" className="link-4"><ChevronRightOutlinedIcon />Shopping Cart</a></li>
            <li><a href="#" className="link-5"><ChevronRightOutlinedIcon />Checkout</a></li>
            <li><a href="#" className="link-6"><ChevronRightOutlinedIcon />Contact Us</a></li>
          </ul>
        </div>
        </footer>
        </>
    )
}

export default Footer;