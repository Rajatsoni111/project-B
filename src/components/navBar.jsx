import "./stylesheet/navBar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from "react";

const NavBar = () => {
    const [dark, setdark] = useState(false);
    const [right, setRight] = useState("-100%");


    const handleUserShower = () => {
        setRight(0)
    }
    return (
        <>
            <nav className="navbar" data-theme={dark ? "dark" : "light"}>
                <div className="logodiv">
                    <h1>Blog.</h1>
                </div>
                <div className="search_bar">
                    <input onClick={handleUserShower} type="text" placeholder="search blogger" />
                    <SearchOutlinedIcon />
                </div>
            </nav>
            <div className="side-user-bar" style={{ right: right }}>
                <div className='searched-user'>
                    <div className='userdata'>
                        <img src="./default-user-icon.jpg" alt="" />
                        <p>username</p>
                    </div>
                    <button>follow</button>
                </div>
            </div>
        </>
    )
}
export default NavBar