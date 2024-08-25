import React from "react";
import NavBar from "./navBar";
import Sidebar from "./Sidebar";
import "./stylesheet/makepost.css"
import { FiUploadCloud } from "react-icons/fi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Footer from "./footer";


const Makepost = () => {

    // funciton fo tags
    let [tags, setTags] = useState([])
    let [tagsCaption , setTagsCaption] = useState("add tags")

    const handleTags = (e) => {
        if (e.key !== "Enter") return
        const value = e.target.value

        if (!value.trim()) return
        setTags([...tags, value])
        setTagsCaption("add more tags")
        e.target.value = ''

    }
    function removeTags(i) {
        setTags(tags.filter((el, index) => index !== i))
    }

    const [uploadImage, setUploadImage] = useState()
    const upload = (e) => {
        console.log(e.target.files)
        setUploadImage(URL.createObjectURL(e.target.files[0]))
    }
    const [title, setTitle] = useState()
    const [caption, setCaption] = useState()
    let arr
    const handle = () => {

        let post = localStorage.getItem("post")
        if (post == null) {
            arr = []
        }
        else {
            arr = JSON.parse(post)
        }
        let myObj = {
            title: title,
            caption: caption,
            image: uploadImage
        }
        arr.push(myObj)
        localStorage.setItem("post", JSON.stringify(arr))

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
                            <textarea type="text" placeholder="add a title" onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="caption">
                            <textarea type="text" placeholder="add a caption" onChange={(e) => setCaption(e.target.value)} />
                        </div>
                        <div className="image">
                            <img src={uploadImage} alt="" />
                            <label htmlFor="file-input"><span>upload photo </span> <FiUploadCloud /></label>
                            <input type="file" id="file-input" accept="image/.png, .jpg, .jpeg" onChange={upload} />
                        </div>
                        <div className="tagss">
                            {tags.map((tag, i) => (
                                <div className="tags-name">
                                    <span>{tag}</span>
                                    <RxCross2 onClick={() => removeTags(i)}>&times</RxCross2>
                                </div>
                            ))}
                            <input type="text" placeholder={tagsCaption} onKeyDown={handleTags} />
                        </div>
                        <div className="button"><button onClick={handle}>upload</button></div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default Makepost