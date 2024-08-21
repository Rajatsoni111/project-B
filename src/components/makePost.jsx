import React from "react";
import NavBar from "./navBar";
import Sidebar from "./Sidebar";
import "./stylesheet/makepost.css"
import { FiUploadCloud } from "react-icons/fi";
import { useState } from "react";


const Makepost = () => {

    const [uploadImage, setUploadImage] = useState()
    const upload = (e) =>{
        console.log(e.target.files)
        setUploadImage(URL.createObjectURL(e.target.files[0]))
    }
    
    return (
        <>
            <div>
                <div className="background">
                    <div className="small-cir1"></div>
                    <div className="small-cir2"></div>
                    <div className="small-cir3"></div>
                </div>
                <NavBar />
                <div className="maindiv">
                    <Sidebar />
                    <div className="makePostDiv">
                        <div className="title">
                            <textarea type="text" placeholder="add a title" />
                        </div>
                        <div className="caption">
                            <textarea type="text" placeholder="add a caption" />
                        </div>
                        <div className="image">
                            <img src={uploadImage} alt="" />
                            <label htmlFor="file-input"><span>upload photo </span> <FiUploadCloud /></label>
                            <input type="file" id="file-input" accept="image/.png, .jpg, .jpeg" onChange={upload}/>
                        </div>
                        <div className="tags">
                            <input type="text" placeholder="add a tag"/>
                        </div>
                        <div className="button"><button>upload</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Makepost