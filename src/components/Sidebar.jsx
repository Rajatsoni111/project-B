import React, { useState } from 'react'
import './stylesheet/sidebar.css'
import { FiLogOut, FiHome, FiEdit3, FiUser } from "react-icons/fi";
import ToggleButton from './toggleButton';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    let [dark, setdark] = useState(false)
    return (
        <div className='sidebar' data-theme={dark ? "dark" : "light"}>
            <div className="profile-section">
                <img src="https://i.pinimg.com/originals/a7/d7/44/a7d7440d4f05189812570c580427eb79.jpg" alt="" id="profile-img" />
                <span id='profile-uname'>rajeshsoni</span>
            </div>
            <div className="buttons">
                <div className="sidebar-buttons"><FiHome id='sidebar-icon' />
                <NavLink to="/feed" className={"sidebar-btns"}>Home</NavLink>
                </div>
                <div className="sidebar-buttons"><FiEdit3 id='sidebar-icon' />
                <NavLink to="/create" className={"sidebar-btns"}>Make a Post</NavLink>
                </div>
                <div className="sidebar-buttons"><FiUser id='sidebar-icon' />
                <NavLink to="/account" className={"sidebar-btns"}>Account</NavLink>
                </div>
                <div className="sidebar-buttons"><FiLogOut id='sidebar-icon' />
                <NavLink to="/logout" className={"sidebar-btns"}>Logout</NavLink>
                </div>
                <div className='sidebar-buttons' id='theme'>
                    <ToggleButton isChecked={dark} handleChange={() => { setdark(!dark) }} />
                    <span>Theme</span>
                </div>
            </div>


        </div>
    )
}

export default Sidebar