import "./stylesheet/toggleButton.css"
import { useState } from "react";

const ToggleButton = ({ handleChange, isChecked }) => {

    // const setDark = () =>{
    //     document.querySelector('body').setAttribute('data-theme', 'dark')
    // }
    // const setLight = () =>{
    //     document.querySelector('body').setAttribute('data-theme', 'light')
    // }
    // const toggle =(e)=>{
    //     if (e.target.inChecked) {
    //         setDark()
    //     }
    //     else{
    //         setLight()
    //     }

    // }
    // let [isOn , setIsOn] =useState(false)
    // const handleToggleButton =() =>{
    //     setIsOn(!isOn)
    // }
    return (
        <>
            {/* <div className="container" onClick={handleToggleButton} >
            <div className="toggle-switch">
                <div className="switch-state">
                <input type="checkbox" id="check" className="toggle" checked={ischecked} onChange={handleChange}/>
                </div>
            </div>
        </div> */}
            <div className="toggle-container">
                <input
                    type="checkbox"
                    id="check"
                    className="toggle"
                    onChange={handleChange}
                    checked={isChecked}
                />
                <label htmlFor="check"></label>
            </div>
        </>
    )
}

export default ToggleButton