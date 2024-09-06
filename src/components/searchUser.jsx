import React from 'react'
import Footer from './footer'
import { IoSearchOutline } from "react-icons/io5";
import "./stylesheet/searchUser.css"

function SearchUser() {
    return (
        <>
            <div>
                <div className="background">
                    <div className="small-cir1"></div>
                    <div className="small-cir2"></div>
                    <div className="small-cir3"></div>
                </div>
                <div className='search-user-page'>
                    <div className="search">
                        <input type="text" placeholder='search user' />
                        <div className='search-icon'>
                            <IoSearchOutline />
                        </div>
                    </div>
                    <div className='show-user'>
                            <div className='searched-user'>
                                <div className='userdata'>
                                <img src="./default-user-icon.jpg" alt="" />
                                <p>username</p>
                                </div>
                                <button>follow</button>
                            </div>
                            <div className='searched-user'>
                                <div className='userdata'>
                                <img src="./default-user-icon.jpg" alt="" />
                                <p>username</p>
                                </div>
                                <button>follow</button>
                            </div> <div className='searched-user'>
                                <div className='userdata'>
                                <img src="./default-user-icon.jpg" alt="" />
                                <p>username</p>
                                </div>
                                <button>follow</button>
                            </div> <div className='searched-user'>
                                <div className='userdata'>
                                <img src="./default-user-icon.jpg" alt="" />
                                <p>username</p>
                                </div>
                                <button>follow</button>
                            </div> <div className='searched-user'>
                                <div className='userdata'>
                                <img src="./default-user-icon.jpg" alt="" />
                                <p>username</p>
                                </div>
                                <button>follow</button>
                            </div> <div className='searched-user'>
                                <div className='userdata'>
                                <img src="./default-user-icon.jpg" alt="" />
                                <p>username</p>
                                </div>
                                <button>follow</button>
                            </div> <div className='searched-user'>
                                <div className='userdata'>
                                <img src="./default-user-icon.jpg" alt="" />
                                <p>username</p>
                                </div>
                                <button>follow</button>
                            </div> <div className='searched-user'>
                                <div className='userdata'>
                                <img src="./default-user-icon.jpg" alt="" />
                                <p>username</p>
                                </div>
                                <button>follow</button>
                            </div> <div className='searched-user'>
                                <div className='userdata'>
                                <img src="./default-user-icon.jpg" alt="" />
                                <p>username</p>
                                </div>
                                <button>follow</button>
                            </div> <div className='searched-user'>
                                <div className='userdata'>
                                <img src="./default-user-icon.jpg" alt="" />
                                <p>username</p>
                                </div>
                                <button>follow</button>
                            </div>
                            <div className='searched-user'>
                                <div className='userdata'>
                                <img src="./default-user-icon.jpg" alt="" />
                                <p>username</p>
                                </div>
                                <button>follow</button>
                            </div> <div className='searched-user'>
                                <div className='userdata'>
                                <img src="./default-user-icon.jpg" alt="" />
                                <p>username</p>
                                </div>
                                <button>follow</button>
                            </div>
                    </div>
                    
                </div>
                {/* <NavBar /> */}

            </div>
            <Footer />
        </>
    )
}

export default SearchUser
