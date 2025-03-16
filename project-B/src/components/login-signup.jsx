import './stylesheet/login-signup.css'
import { useState } from 'react';
import ToggleButton from './toggleButton';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [isDark, setIsDark] = useState(false)

    // useEffect(() => {
    //     document.body.toggle.className = 'theme'
    // }, []) 

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let [loginSignUp, setLoginSignup] = useState('login')
    let [loginSignUp2, setLoginSignup2] = useState('sign up')

    let [id, setId] = useState("")
    let [id2, setId2] = useState("")

    const handleClick = (e) => {
        e.preventDefault()

        // slidBtn.styles.display = "flex"
        if (loginSignUp === "login" || loginSignUp2 === "sign up") {
            setLoginSignup('sign up')
            setLoginSignup2("login")
            setId("sliderani1")

        }
        else {
            setLoginSignup('login')
            setLoginSignup2("sign up")
            setId("sliderani2")

        }
    }

    const flipCardMst = (e) => {
        e.preventDefault()
        // setId2('flipCard')
        if (loginSignUp2 === "sign up") {
            setLoginSignup2('login')
            setId("sliderani1")
            setId2('flipCard')
        }
        else {
            setLoginSignup2('sign up')
            setId2('flipCard2')
        }

    }

    async function login(e) {
        e.preventDefault();
        const promise = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });

        const data = await promise.json();
        if(data.token){
            localStorage.setItem('token', data.token);
            // window.location.href = '/feed';
            navigate('/feed');
        }
    }


    // let sliderBtn = document.querySelector('.slider') 
    return (
        <>
            <div className='desktop-login-signup' data-theme={isDark ? "dark" : "light"}>
                <div className='side-bar'>
                    <ToggleButton isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
                    <h1>create</h1>
                    <h2> a blog for some people</h2>
                </div>
                <form action="" className='form'>
                    <div className="login-signup">
                        <div className='slider' id={id}>
                            <h2 className='slider-name'>{loginSignUp2}</h2>
                            <button onClick={handleClick} className='slider-btn'>{loginSignUp}</button>
                        </div>
                        {/* <div className="login"> */}
                        {/* <form action="/login" method='post'> */}
                        {/* <div className="login-signup"> */}
                        {/* <div className='slider' id={id}>
                                    <h2 className='slider-name'>{loginSignUp}</h2>
                                    <button onClick={handleClick} className='slider-btn'>{loginSignUp}</button>
                                </div> */}
                        {/* login form */}
                        <div className="login">
                            <form>
                                <div className='login-1'>
                                    <label htmlFor="">Username</label>
                                    <input type="text" placeholder="enter username" name='username' onChange={(e) => setUsername(e.target.value)} />
                                    <br />
                                    <label>Password</label>
                                    <input type="password" placeholder="enter password" name='password' onChange={(e) => setPassword(e.target.value)} />
                                    <a href="/">Forgot Password</a>
                                    <button type='submit' onClick={login}>login</button>
                                </div >
                            </form >
                        </div >
                        {/* signup form  */}
                        < div className="signup" >
                            <form action="/create" method="post">
                                <div className='signup-1'>
                                    <label htmlFor="">Username</label>
                                    <input type="text" placeholder="username" name='username' />
                                    {/* <label htmlFor="">fullname</label>
                            <input type="text" placeholder='full name' /> */}
                                    <br />
                                    <label htmlFor="">Email</label>
                                    <input type="email" placeholder='email' name='email' />
                                    <br />
                                    <label>Password</label>
                                    <input type="password" placeholder="password" name='password' />
                                    <button type='submit'>create</button>
                                </div >
                            </form >
                        </div >
                        {/* </div > */}
                        {/* </form> */}
                    </div >
                    {/* </div> */}
                </form>
                <form action="" data-theme={isDark ? "dark" : "light"}>
                    {/* <ToggleButton isChecked={isDark} handleChange={() => setIsDark(!isDark)} /> */}

                    <div className="maincontainer">
                        <div className="thecard" id={id2}>
                            <div className="mobile-login-1">
                                <div className='switcher' >
                                    <h2 className='slider-name'>login</h2>
                                    <button onClick={flipCardMst} className='slider-btn'>signup</button>
                                </div>
                                <div className='login-1-1'>
                                    <form action="/login" method="post">
                                        <label htmlFor="">Username</label>
                                        <input type="text" placeholder="enter username" />
                                        <br />
                                        <label>Password</label>
                                        <input type="password" placeholder="enter password" />
                                        <a href="/">Forgot Password</a>
                                        <button>login</button>
                                    </form>
                                </div>
                            </div>
                            <div className="mobile-signup-1">
                                <div className='switcher'>
                                    <h2 className='slider-name'>signup</h2>
                                    <button onClick={flipCardMst} className='slider-btn'>login</button>
                                </div>
                                <div className='signup-1-1'>
                                    <form action="/create" method="post">
                                        <label htmlFor="">Username</label>
                                        <input type="text" placeholder="enter username" name='username' />
                                        {/* <label htmlFor="">fullname</label>
                            <input type="text" placeholder='full name' /> */}
                                        <br />
                                        <label htmlFor="">email</label>
                                        <input type="email" placeholder='enter email' name='email' />
                                        <br />
                                        <label>Password</label>
                                        <input type="password" placeholder="enter password" name='password' />
                                        <button>create</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login