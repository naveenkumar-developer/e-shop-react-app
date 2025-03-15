import "../assets/styles/Sidebar.css"
function SideBar() {
  return (
    <>
      <div className="sideBar">
        <div className="sideBarRow1">
          <div className="active">Home</div>
          <div>Shop</div>
          <div>Shop Details</div>
          <div>Contact</div>
        </div>

        <div className="sideBarRow2">
          <div>Login</div>
          <div>Register</div>
        </div>
      </div>
    </>
  );
}

export default SideBar;


