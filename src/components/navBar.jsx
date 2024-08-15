import "./stylesheet/navBar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const NavBar = () =>{
    return(
        <>
        <nav className="navbar">
            <div className="logodiv">
                <h1>Blog.</h1>
            </div>
            <div className="search_bar">
                <input type="text" placeholder="search blogger" />
                <SearchOutlinedIcon/>
                                </div>
        </nav>
        </>
    )
}
export default NavBar