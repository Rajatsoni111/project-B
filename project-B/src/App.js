import './App.css';
import Profile from "./components/profile"
// import Sidebar from './components/Sidebar';
import Login from './components/login-signup';
import MainPage from './components/main_page';
import Makepost from './components/makePost';
// import NavBar from './components/navBar';
import Account from './components/account';
import ErrorPage from './components/ErrorPage'
// import ToggleButton from './components/toggleButton';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/create' Component={Makepost} />
        <Route path='/account' Component={Account} />
        <Route path='/feed' Component={MainPage} />
        <Route path='/setup-profile' Component={Profile} />
        <Route path='/*' Component={ErrorPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
