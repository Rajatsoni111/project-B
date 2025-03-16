import "./stylesheet/navBar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState, useEffect, useMemo } from "react";
import debounce from 'lodash/debounce';

const NavBar = () =>{
    const [dark, setdark] = useState(false);
    const [query, setQuery] = useState('');
    function searchHandler(){
        // const query = e.target.value;
        fetch(`http://localhost:3001/searchblogs?q=${query}`, {
            headers: {
                'Content-Type': 'application/json',
                token: localStorage.getItem("token")
            },
            
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    const debouncedSearch = debounce(searchHandler, 500);
    // const debouncedSearch = useMemo(() => {
    //     return debounce(searchHandler, 500);
    //   }, []);
    
    //   useEffect(() => {
    //     return () => {
    //         debouncedSearch.cancel();
    //     };
    //   });

    useEffect(() => {
        if (query) {
          debouncedSearch(query);
        }
      }, [debouncedSearch]);

    return(
        <>
        <nav className="navbar" data-theme={dark ? "dark" : "light"}>
            <div className="logodiv">
                <h1>Blog.</h1>
            </div>
            <div className="search_bar">
                <input type="text" placeholder="search blogger" value={query} onChange={(e) => {setQuery(e.target.value); debouncedSearch()}}/>
                <SearchOutlinedIcon/>
                                </div>
        </nav>
        </>
    )
}
export default NavBar