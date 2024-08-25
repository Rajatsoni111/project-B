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
                                    <div className="userpost-head"></div>
                                </div>
                                <div className="userpost">
                                </div>
                                <div className="userpost">
                                </div>
                                <div className="userpost">
                                </div>
                                <div className="userpost">
                                </div>
                                <div className="userpost">
                                </div>
                                <div className="userpost">
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Account