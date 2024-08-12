import styles from '../stylesheet/login-signup.css'
import { useEffect, useState } from 'react';

const Login = () => {
    let slidBtn = document.querySelector('#slider-btn')
    let flipCard = document.querySelector('.flip-card')
    // const loginSignUp = "login"
    let [loginSignUp, setLoginSignup] = useState('login')
    let [loginSignUp2, setLoginSignup2] = useState('sign up')

    let [id, setId] = useState("")
    let [id2, setId2] = useState("")


    const handleClick = (e) => {
        e.preventDefault()

        // slidBtn.styles.display = "flex"
        if (loginSignUp == "login") {
            setLoginSignup('sign up')
            setId("sliderani1")
            
        }
        else {
            setLoginSignup('login')
            setId("sliderani2")
            
        }
    }

    const flipCardMst = (e) => {
        e.preventDefault()
        // setId2('flipCard')
        if (loginSignUp2 == "sign up") {
            setLoginSignup2('login')
            setId("sliderani1")
            setId2('flipCard')
        }
        else {
            setLoginSignup2('sign up')
            setId2('flipCard2')
        }
        
    }
    useEffect(() => {

    })


    // let sliderBtn = document.querySelector('.slider') 
    return (
        <>
            <form action="" >
                <div className="login-signup">
                    <div className='slider' id={id}>
                        <h2 className='slider-name'>{loginSignUp}</h2>
                        <h2 >into bloger app</h2>
                        <button onClick={handleClick} className='slider-btn'>{loginSignUp}</button>
                    </div>
                    <div className="login">
                        <div className='login-1'>
                            <label htmlFor="">username</label>
                            <input type="text" placeholder="username" />
                            <br />
                            <label>Password</label>
                            <input type="text" placeholder="password" />
                            <a href="">forgot password</a>
                            <button>login</button>
                        </div>
                    </div>
                    <div className="signup">
                        <div className='signup-1'>
                            <label htmlFor="">username</label>
                            <input type="text" placeholder="username" />
                            {/* <label htmlFor="">fullname</label>
                            <input type="text" placeholder='full name' /> */}
                            <br />
                            <label htmlFor="">email</label>
                            <input type="email" placeholder='email' />
                            <br />
                            <label>Password</label>
                            <input type="passwoord" placeholder="password" />
                            <button>create</button>
                        </div>
                    </div>
                </div>
                <div className="maincontainer">
                
                <div className="thecard" id={id2}>
                
                    <div className="mobile-login-1">
                    <div className='switcher' >
                        <h2 className='slider-name'>login</h2>
                        <button onClick={flipCardMst} className='slider-btn'>login</button>
                    </div>
                        <div className='login-1-1'>
                            <label htmlFor="">username</label>
                            <input type="text" placeholder="enter username" />
                            <br />
                            <label>Password</label>
                            <input type="text" placeholder="enter password" />
                            <a href="">forgot password</a>
                            <button>login</button>
                        </div>
                    </div>
                    <div className="mobile-signup-1">
                    <div className='switcher'>
                        <h2 className='slider-name'>signup</h2>
                        <button onClick={flipCardMst} className='slider-btn'>signup</button>
                    </div>
                    <div className='signup-1-1'>
                                <label htmlFor="">username</label>
                                <input type="text" placeholder="enter username" />
                                {/* <label htmlFor="">fullname</label>
                            <input type="text" placeholder='full name' /> */}
                                <br />
                                <label htmlFor="">email</label>
                                <input type="email" placeholder='enter email' />
                                <br />
                                <label>Password</label>
                                <input type="passwoord" placeholder="enter password" />
                                <button>create</button>
                            </div>
                    </div>
                </div>
            </div>
            </form>
        </>
    )
}

export default Login