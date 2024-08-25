import NavBar from "./navBar"
import "./stylesheet/mainpage.css"
import { AiFillCloseCircle } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { useState } from "react";
import LikeSaveComment from "./like-comment-save";
import { CommetnLikeDislike } from "./like-comment-save";
import { useEffect } from "react";
import Footer from "./footer";






const MainPage = () => {

    //full post function 
    let [fullPost, setFullPost] = useState(false)
    const displayFullPost = () => {
        setFullPost(true)
    }
    const fullDisplayClose = () => {
        setFullPost(false)
    }
    // let post = localStorage.getItem("post")

    // const MyData = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const value = localStorage.getItem('post')
        setItems(JSON.parse(value))
    }, [])
    console.log(items)

    return (
        // <>
        <div className="parent-div">
            <div className="background">
                <div className="small-cir1"></div>
                {/* <div className="small-cir2"></div>
                <div className="small-cir3"></div> */}
            </div>
            <div className="div-for-main-content">
                <NavBar></NavBar>
                <div className="maindiv">
                    {<Sidebar className="mainSidebar" />}
                    <div className="postdiv" >
                        {items.map((item, i) => (
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
                                    <div className="post-title">
                                        <h5>{item.title}</h5>
                                    </div>
                                    <div className="post-function-caption">
                                        <p>{item.caption}</p>
                                    </div>
                                    <div className="like-comment-share-div">
                                        {<LikeSaveComment />}
                                    </div>
                                </div>
                                <div className="post-image" onClick={displayFullPost}>
                                    <img src={item.image} alt="" />
                                </div>
                            </div>
                        ))}


                    </div>
                    {fullPost ? <div className="full-post-div" >
                        <div className="full-post">
                            <div className="full-post-head">
                                <img src="../default-user-icon.jpg" alt="" />
                                <span>username</span>
                            </div>
                            <div className="full-post-title">
                                <h4>this is a demo title</h4>
                            </div>
                            <div className="full-post-caption">
                                <p>Just winging it through life, one feather at a time.<br />
                                    Flapping my wings and embracing my flyness..<br />
                                    Feathered and fabulous..<br />
                                    Freedom never felt so good..<br />
                                    Chirping my way through life..<br />
                                    Birds of a feather flock together..<br />
                                    Ready to spread some birdie love..<br />
                                    Fly high, dream big</p>
                            </div>
                            {<LikeSaveComment />}
                            <div className="full-post-image">
                                <img src="../ibird-mages.jpeg" alt="" />
                            </div>

                            <div className="full-post-comment">
                                <div className="user-comment">
                                    <div className="comment-user-head">
                                        <img src="../default-user-icon.jpg" alt="" />
                                        <div className="div-username-or-comment">
                                            <h5>username</h5>
                                            <input type="text" placeholder="Type something..." />
                                        </div>
                                    </div>

                                </div>
                                <div className="comments">
                                    <div className="comment-user-head">
                                        <img src="../default-user-icon.jpg" alt="" />
                                        <div className="div-username-or-comment">
                                            <h5>username</h5>
                                            <p>this is a comment by my side or we can say it is just a comment to test the comment box this is a comment by my side or we can say it is just a comment to test the comment box this is a comment by my side or we can say it is just a comment to test the comment boxthis is a comment by my side or we can say it is just a comment to test the comment boxthis is a comment by my side or we can say it is just a comment to test the comment box </p>
                                            {<CommetnLikeDislike />}
                                        </div>
                                    </div>
                                    <div className="commentReplies">
                                        <div className="replies">
                                            <div className="user-replies">
                                                <img src="../default-user-icon.jpg" alt="" />
                                                <div className="replies-comment-div">
                                                    <h5>username</h5>
                                                    <input type="text" placeholder="Type something..." />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="replies">
                                            <div className="comment-user-head">
                                                <img src="../default-user-icon.jpg" alt="" />
                                                <div className="div-username-or-comment">
                                                    <h5>username</h5>
                                                    <p>this is a reply of this comment</p>
                                                    {<CommetnLikeDislike />}

                                                </div>
                                            </div>      
                            
                                        </div>
                                        <div className="replies">
                                            <div className="comment-user-head">
                                                <img src="../default-user-icon.jpg" alt="" />
                                                <div className="div-username-or-comment">
                                                    <h5>username</h5>
                                                    <p>this is a reply of this comment</p>
                                                    {<CommetnLikeDislike />}

                                                </div>
                                            </div>
                                        </div>
                                        <div className="replies">
                                            <div className="comment-user-head">
                                                <img src="../default-user-icon.jpg" alt="" />
                                                <div className="div-username-or-comment">
                                                    <h5>username</h5>
                                                    <p>this is a reply of this comment</p>
                                                    {<CommetnLikeDislike />}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comments">
                                    <div className="comment-user-head">
                                        <img src="../default-user-icon.jpg" alt="" />
                                        <div className="div-username-or-comment">
                                            <h5>username</h5>
                                            <p>this is a comment by my side or we can say it is just a comment to test the comment box </p>
                                            {<CommetnLikeDislike />}

                                        </div>
                                    </div>
                                </div>
                                <div className="comments">
                                    <div className="comment-user-head">
                                        <img src="../default-user-icon.jpg" alt="" />
                                        <div className="div-username-or-comment">
                                            <h5>username</h5>
                                            <p>this is a comment by my side or we can say it is just a comment to test the comment box </p>
                                            {<CommetnLikeDislike />}

                                        </div>
                                    </div>
                                </div>
                                <div className="comments">
                                    <div className="comment-user-head">
                                        <img src="../default-user-icon.jpg" alt="" />
                                        <div className="div-username-or-comment">
                                            <h5>username</h5>
                                            <p>this is a comment by my side or we can say it is just a comment to test the comment box </p>
                                            {<CommetnLikeDislike />}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="close-button"><AiFillCloseCircle className="fullPostClose" onClick={fullDisplayClose} style={{ transform: "Scale(2)", margin: "30px" }} /></div>
                    </div> : null}
                </div>
                <Footer/>
                
            </div>
        </div>
        // </>
    )
}
export default MainPage