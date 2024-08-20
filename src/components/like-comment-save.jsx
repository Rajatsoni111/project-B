import './stylesheet/like-save-comment.css'

import { useState } from "react"
import { FaRegComment, FaRegBookmark, FaBookmark, FaRegHeart } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import { AiTwotoneLike, AiTwotoneDislike, AiFillLike, AiFillDislike  } from "react-icons/ai";


const LikeSaveComment = () => {

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

    return (
        <>
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
        </>
    )
}
export const CommetnLikeDislike = () => {

    //function for comment like dislike or reply
    let [commentLike, setCommentLike] = useState(true)
    let [commetNotLike, setCommentNotLike] = useState(false)
    let[commentLikeCounter , setCommentLikeCounter] = useState(0)
    const displayCommentLike = () => {
        setCommentNotLike(true)
        setCommentLike(false)
        setCommentNotDislike(false)
        setCommentDislike(true)
        setCommentLikeCounter(commentLikeCounter +1)
        if (commentDislikeCounter > 0) {
            setCommentDislikeCounter(commentDislikeCounter -1)
        }
    }
    const displayCommentNotLike = () => {
        setCommentNotLike(false)
        setCommentLike(true)
        setCommentLikeCounter(commentLikeCounter -1)

    }

    let [commentDislike, setCommentDislike] = useState(true)
    let [commentNotDsialike, setCommentNotDislike] = useState(false)
    let [commentDislikeCounter , setCommentDislikeCounter] = useState(0)
    const displayCommentDislike = () => {
        setCommentNotDislike(true)
        setCommentDislike(false)
        setCommentNotLike(false)
        setCommentLike(true)
        setCommentDislikeCounter(commentDislikeCounter +1)
        if (commentLikeCounter > 0) {
        setCommentLikeCounter(commentLikeCounter -1)
        }

    }
    const displayCommentNotDislike = () => {
        setCommentNotDislike(false)
        setCommentDislike(true)
        setCommentDislikeCounter(commentDislikeCounter -1)
    }

    return(
        <>
            <div className="like-dislike-reply">
                <div className="commentLike">
                    {commentLike ? <AiTwotoneLike onClick={displayCommentLike} /> : null}
                    {commetNotLike ? <AiFillLike onClick={displayCommentNotLike} /> : null}

                    <span>{commentLikeCounter}</span>
                </div>
                <div className="commentDislike">
                    {commentDislike ? <AiTwotoneDislike onClick={displayCommentDislike} /> : null}
                    {commentNotDsialike ? <AiFillDislike onClick={displayCommentNotDislike} /> : null}
                    <span>{commentDislikeCounter}</span>
                </div>
                <div className="commentReply">
                    <h5>reply</h5>
                    <span>0</span>
                </div>
            </div>
        </>
    )
}
export default LikeSaveComment 