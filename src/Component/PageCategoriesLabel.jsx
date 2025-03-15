import { NavLink} from "react-router-dom";
import "../assets/styles/PageCategoriesLabel.css"
function PageCategoriesLabel(){
    return(
        <>
        <div className="pageCategoriesLabels mt-5">
           <NavLink className="fashionPageLinks" to="/menFashion"><h2>Men</h2></NavLink> 
           <NavLink className="fashionPageLinks" to="/womenFashion"><h2>Women</h2></NavLink> 
        </div>
        </>
    )
}
export  default PageCategoriesLabel;