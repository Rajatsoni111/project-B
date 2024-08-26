import { IoHomeOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import "./stylesheet/footer.css"
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="mainhome">
                <NavLink to="/feed" className={"sidebar-btns"} style={{color:"black"}}>
                    <IoHomeOutline />
                </NavLink>

            </div>
            <div className="makepostpluse">
                <NavLink to="/create" className={"sidebar-btns"} style={{color:"black"}}>
                    <FaPlus />
                </NavLink>
            </div>
            <div className="mainprofile">
                <NavLink to="/account" className={"sidebar-btns"} style={{color:"black"}}>
                    <CiUser />
                </NavLink>

            </div>
            {/* <IoHomeOutline/> */}


        </div>
    )
}
export default Footer