import { useState } from "react"
import "./stylesheet/profile.css"
import React from "react"

const Profile = () => {

    let [image, setImage] = useState()

    // const handelImageClick = () =>{
    //     imgref.current.click()
    // }
    const changeimage = (event) => {
        const file = event.target.file
        console.log(file);
        setImage(URL.createObjectURL(event.target.files[0]))
    }
    return (
        <>
            <div>
                <div className="cir1"></div>
                <div className="cir2"></div>
                <div className="cir3"></div>

            </div>
            <div className="profile_section">
                <div className="username">
                    {image ? <img src={image} alt=""/> :                     <img src="../background_image.jpg" alt="" id="profile-img" />
                }
                    <div className="username-1">
                        <h3>username</h3>
                        <label  htmlFor="inputtext">upload photo</label>
                        <input  type="file" id="inputtext" accept="image/.jpg, .png, .jpeg"  onChange={changeimage}/>
                    </div>
                </div>
                <div className="additional_detail">
                    <div className="details_added">
                        <div className="bio">
                        <textarea name="" id="" rows="3" placeholder="add bio"></textarea>
                        <button>add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile