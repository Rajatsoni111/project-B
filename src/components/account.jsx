import Footer from "./footer"
import NavBar from "./navBar"
import Sidebar from "./Sidebar"
import "./stylesheet/account.css"

const Account = () => {
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

                    <div className="account-div">
                        <div className="account-div-1">
                            <div className="account-data">
                                <img src="./default-user-icon.jpg" alt="" />
                                <div className="username-caption">
                                    <h1>userdata</h1>
                                    <div className="caption-user-account">
                                        <p> ioncaptioncaptioncaptioncaptioncaptioncaptioncaptioncaptioncaptioncaptioncaptioncaptioncaptioncaptioncaptioncaptioncaptioncaptioncaption</p>
                                    </div>
                                </div>
                                <div className="account-button">
                                <button>upgrade profile</button>
                                </div>
                            </div>

                            <div className="post-draft-saved">
                                <span>Post</span>
                                <span>Draft</span>
                                <span>Saved</span>
                            </div>
                            <div className="user-post">
                                <div className="userpost">
                                    <div className="userpost-head">
                                        <img src="./default-user-icon.jpg" alt="" />
                                        <span>username</span>
                                    </div>
                                    <div className="self-post-title">
                                        <h4>this is a title</h4>
                                    </div>
                                    <div className="self-post-caption">
                                        <p>this is a caption for the self post caption</p>
                                    </div>
                                    <div className="self-post-image">
                                        <img src="./ibird-mages.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="userpost">
                                    <div className="userpost-head">
                                        <img src="./default-user-icon.jpg" alt="" />
                                        <span>username</span>
                                    </div>
                                    <div className="self-post-title">
                                        <h4>this is a title</h4>
                                    </div>
                                    <div className="self-post-caption">
                                        <p>this is a caption for the self post caption</p>
                                    </div>
                                    <div className="self-post-image">
                                        <img src="./ibird-mages.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="userpost">
                                    <div className="userpost-head">
                                        <img src="./default-user-icon.jpg" alt="" />
                                        <span>username</span>
                                    </div>
                                    <div className="self-post-title">
                                        <h4>this is a title</h4>
                                    </div>
                                    <div className="self-post-caption">
                                        <p>this is a caption for the self post caption</p>
                                    </div>
                                    <div className="self-post-image">
                                        <img src="./ibird-mages.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="userpost">
                                    <div className="userpost-head">
                                        <img src="./default-user-icon.jpg" alt="" />
                                        <span>username</span>
                                    </div>
                                    <div className="self-post-title">
                                        <h4>this is a title</h4>
                                    </div>
                                    <div className="self-post-caption">
                                        <p>this is a caption for the self post caption</p>
                                    </div>
                                    <div className="self-post-image">
                                        <img src="./ibird-mages.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="userpost">
                                    <div className="userpost-head">
                                        <img src="./default-user-icon.jpg" alt="" />
                                        <span>username</span>
                                    </div>
                                    <div className="self-post-title">
                                        <h4>this is a title</h4>
                                    </div>
                                    <div className="self-post-caption">
                                        <p>this is a caption for the self post caption</p>
                                    </div>
                                    <div className="self-post-image">
                                        <img src="./ibird-mages.jpeg" alt="" />
                                    </div>
                                </div>
                               

                            </div>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>
        </>
    )
}
export default Account