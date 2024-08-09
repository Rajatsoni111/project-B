import styles from '../stylesheet/login-signup.css'
import { useEffect, useState } from 'react';

const Login = () => {
    let slidBtn = document.querySelector('#slider-btn')

    // const loginSignUp = "login"
    let [loginSignUp, setLoginSignup] = useState('login')
    let [id, setId] = useState("")

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
            </form>
        </>
    )
}

export default Login