import "./stylesheet/navBar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from "react";

const NavBar = () =>{
    const [dark, setdark] = useState(false);
    return(
        <>
        <nav className="navbar" data-theme={dark ? "dark" : "light"}>
            <div className="logodiv">
                <h1>Blog.</h1>
            </div>
            <div className="search_bar">
                <input type="text" placeholder="search blogger" />
                <SearchOutlinedIcon/>
                                </div>
        </nav>
        </>
    )
}
export default NavBar