import "./stylesheet/toggleButton.css"
import { useState } from "react";

const ToggleButton = ({handleChange , isChecked}) => {

    // let [isOn , setIsOn] =useState(false)
    // const handleToggleButton =() =>{
    //     setIsOn(!isOn)
    // }
    return(
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