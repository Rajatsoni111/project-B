import NavBar from "./navBar"
import "./stylesheet/mainpage.css"
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

const MainPage = () => {
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
                    <div className="sidebar"></div>
                    <div className="postdiv">
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
                                <div className="like-comment"></div>
                            </div>
                            <div className="post-image">
                                <img src="../background_image.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainPage