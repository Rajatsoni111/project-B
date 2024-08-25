import { IoHomeOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import "./stylesheet/footer.css"


const Footer = () => {
    return (
        <div className="footer">
            <div className="mainhome">
                <IoHomeOutline />
            </div>
            <div className="makepostpluse">
                <FaPlus />
            </div>
            <div className="mainprofile">
                <CiUser />
            </div>
            {/* <IoHomeOutline/> */}


        </div>
    )
}
export default Footer