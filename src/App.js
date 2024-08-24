import './App.css';
import Profile from "./components/profile"
import Sidebar from './components/Sidebar';
import Login from './components/login-signup';
import MainPage from './components/main_page';
import Makepost from './components/makePost';
import NavBar from './components/navBar';
import Account from './components/account';
// import ErrorPage from './components/ErrorPage'
import ToggleButton from './components/toggleButton';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    {/* <Profile/> */}
    {/* <Login/> */}
    {/* {<MainPage/>} */}
    {/* {<Sidebar/>} */}
    {/* {<ToggleButton/>} */}
    {/* {<Makepost/>} */}
    {<Account/>}
    </>
  );
}

export default App;
