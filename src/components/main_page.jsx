import NavBar from "./navBar"
import "./stylesheet/mainpage.css"
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import { FaRegComment, FaRegBookmark, FaBookmark, FaRegHeart } from "react-icons/fa";
import { GoHeart } from "react-icons/go";

import { FcLike } from "react-icons/fc";


import Sidebar from "./Sidebar";
import { useState } from "react";

const MainPage = () => {
    const display = { color: "black", scale: "1.5", transition: "0.5s" }
    const blackDisplay = { color: "black", scale: "1.2", transition: "0.5s" }

    let [likeStyle, setLikeStyle] = useState(false)
    let [likeStyle2, setLikeStyle2] = useState(true)
    let [saveStyle, setSaveStyle] = useState(false)
    let [saveStyle2, setSaveStyle2] = useState(true)

    const likeChangeIcon = () => {
        if (likeStyle === false)
            setLikeStyle(true)
        setLikeStyle2(false)
        setLikeCounter(likeCounter + 1)
    }
    const likeChangeIcon2 = () => {
        if (likeStyle2 === false)
            setLikeStyle2(true)
        setLikeStyle(false)
        setLikeCounter(likeCounter - 1)
    }
    const saveChangeIcon = () => {
        if (saveStyle === false)
            setSaveStyle(true)
        setSaveStyle2(false)
        setSaveCounter(saveCounter + 1)
    }
    const saveChangeIcon2 = () => {
        if (saveStyle2 === false)
            setSaveStyle2(true)
        setSaveStyle(false)
        setSaveCounter(saveCounter - 1)
    }
    let [saveCounter, setSaveCounter] = useState(0)
    let [likeCounter, setLikeCounter] = useState(0)
    //full post function 
    // let [commentClass , setCommentClass] = useState(".full-post-comment")
    let fullPost = () => {
        alert("full post is here")
    }
    return (
        <>
            <div>
                <div className="background">
                    <div className="small-cir1"></div>
                    <div className="small-cir2"></div>
                    <div className="small-cir3"></div>
                </div>
                <NavBar></NavBar>
                <div className="maindiv">
                    {<Sidebar />}
                    {/* <div className="sidebar"></div> */}
                    <div className="postdiv" >
                        <div className="post">
                            <div className="post-function">
                                <div className="post-function-head">
                                    <div className="user-id">
                                        <img src="../default-user-icon.jpg" alt="" />
                                        <div>
                                            <span>user name</span>
                                            <p>india</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-function-caption">
                                    <p>this is caption of this post like or comment or this is only a test caption so dont take it seriously kepp this in mind
                                        this is caption of this post like or comment or this is only a test caption so dont take it seriously kepp this in mind
                                        this is caption of this post like or comment or this is only a test caption so dont take it seriously kepp this in mind
                                    </p>
                                </div>
                                <div className="like-comment-save">
                                    <div className="comment">
                                        <FaRegComment style={blackDisplay} />
                                        <span>{likeCounter}</span>
                                    </div>
                                    <div className="like">
                                        <div className="icon">
                                            {likeStyle2 ? <GoHeart className="likeIcon" onClick={likeChangeIcon} style={display} /> : null}
                                            {likeStyle ? <FcLike className="colorLikeIcon" onClick={likeChangeIcon2} style={display} /> : null}
                                        </div>
                                        <span>{likeCounter}</span>
                                    </div>
                                    <div className="save">
                                        {saveStyle2 ? <FaRegBookmark onClick={saveChangeIcon} style={blackDisplay} /> : null}
                                        {saveStyle ? <FaBookmark onClick={saveChangeIcon2} style={blackDisplay} /> : null}
                                        <span>{saveCounter}</span>
                                    </div>

                                </div>

                            </div>
                            <div className="post-image" onClick={fullPost}>
                                <img src="../background_image.jpg" alt="" />
                            </div>
                        </div>
                        <div className="post">
                            <div className="post-function">
                                <div className="post-function-head">
                                    <div className="user-id">
                                        <img src="../default-user-icon.jpg" alt="" />
                                        <div>
                                            <span>user name</span>
                                            <p>india</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-function-caption">
                                    <p>this is caption of this post like or comment or this is only a test caption so dont take it seriously kepp this in mind
                                        this is caption of this post like or comment or this is only a test caption so dont take it seriously kepp this in mind
                                        this is caption of this post like or comment or this is only a test caption so dont take it seriously kepp this in mind
                                    </p>
                                </div>
                                <div className="like-comment-save">
                                    <div className="comment">
                                        <FaRegComment />
                                        <span>{ }</span>
                                    </div>
                                    <div className="like">
                                        <FaRegHeart onClick={likeChangeIcon} style={likeStyle2} />
                                        <FcLike onClick={likeChangeIcon2} style={likeStyle} />
                                        <span>{likeCounter}</span>
                                    </div>
                                    <div className="save">
                                        <FaRegBookmark />
                                        <span>{saveCounter}</span>
                                    </div>

                                </div>

                            </div>
                            <div className="post-image">
                                <img src="../ibird-mages.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="post">
                            <div className="post-function">
                                <div className="post-function-head">
                                    <div className="user-id">
                                        <img src="../default-user-icon.jpg" alt="" />
                                        <div>
                                            <span>user name</span>
                                            <p>india</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-function-caption">
                                    <p>this is caption of this post like or comment or this is only a test caption so dont take it seriously kepp this in mind
                                        this is caption of this post like or comment or this is only a test caption so dont take it seriously kepp this in mind
                                        this is caption of this post like or comment or this is only a test caption so dont take it seriously kepp this in mind
                                    </p>
                                </div>
                                <div className="like-comment-save">
                                    <div className="comment">
                                        <FaRegComment />
                                        <span>{ }</span>
                                    </div>
                                    <div className="like">
                                        <FaRegHeart onClick={likeChangeIcon} style={likeStyle2} />
                                        <FcLike onClick={likeChangeIcon2} style={likeStyle} />
                                        <span>{likeCounter}</span>
                                    </div>
                                    <div className="save">
                                        <FaRegBookmark />
                                        <span>{saveCounter}</span>
                                    </div>

                                </div>

                            </div>
                            <div className="post-image">
                                <img src="../tiger-image.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="full-post-div" >
                        <div className="full-post">
                            <div className="full-post-head">
                                <img src="../default-user-icon.jpg" alt="" />
                                <span>username</span>
                            </div>
                            <div className="full-post-caption">
                                    <h3>caption</h3>
                            </div>
                            <div className="full-post-image">
                                <img src="../ibird-mages.jpeg" alt="" />
                            </div>
                            <div className="full-post-comment">
                                <div className="comments">
                                    <div className="comment-user-head">
                                    <img src="../default-user-icon.jpg" alt="" />
                                    <h5>username</h5>
                                    </div>
                                    <p>user comment is here</p>
                                </div>
                                <div className="comments">
                                    <div className="comment-user-head">
                                    <img src="../default-user-icon.jpg" alt="" />
                                    <h5>username</h5>
                                    </div>
                                    <p>user comment is here</p>
                                </div>
                                <div className="comments">
                                    <div className="comment-user-head">
                                    <img src="../default-user-icon.jpg" alt="" />
                                    <h5>username</h5>
                                    </div>
                                    <p>user comment is here</p>
                                </div>
                                <div className="comments">
                                    <div className="comment-user-head">
                                    <img src="../default-user-icon.jpg" alt="" />
                                    <h5>username</h5>
                                    </div>
                                    <p>user comment is here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainPage