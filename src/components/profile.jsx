import NavBar from "./navBar"
import "./stylesheet/profile.css"
import { FiUploadCloud } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

import { useEffect, useState } from "react";
// import { Country, State } from "country-state-city";
import countryData from "./../CountryData.json"

const Profile = () => {
  // let countryData = countryData
  let [country, setCountry] = useState()
  let [state, setState] = useState([])
  let [displayState, setDisplayState] = useState(false)

  const changeCountry = (e) => {
    // setCountry(e.target.value)
    const getcountryid = e.target.value
    const getstateid = countryData.find(countryid => countryid.country_id === getcountryid).states
    setState(getstateid)
    setDisplayState(true)
  }
  console.log(country)

// funciton fo tags
let [tags, setTags] = useState([])

const handleTags =(e)=>{
  if (e.key !== "Enter") return 
  const value = e.target.value
  if(!value.trim()) return
  setTags([...tags, value])
  e.target.value= ''
}
function removeTags(i){
  setTags(tags.filter((el,index) => index !== i))
}

  let [image, setImage] = useState("default-user-icon.jpg")
  const upload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <>
      <div className="cir1"></div>
      <div className="cir2"></div>
      <div className="cir3"></div>
      <div className="profile_section">
        <div className="username">
          <div className="username-1">
            <img src={image} alt="" />
            <label htmlFor="file-input">upload photo <FiUploadCloud /></label>
            <input type="file" name="" id="file-input" onChange={upload} />
          </div>
        </div>
        <div className="additional_detail">
          <dir className="details_added">
            <div className="bio">
              <textarea name="" id="" placeholder="add bio"></textarea>
            </div>
            <div className="tagss">
             { tags.map((tag,i)=>(
              <div className="tags-name">
                <span>{tag}</span>
                <RxCross2 onClick={()=> removeTags(i)}>&times</RxCross2>
              </div>
            ))}
              <input type="text" placeholder="add tags" onKeyDown={handleTags}/>
            </div>
            <div className="dorpDownMen">
              <h3>Select Region</h3>
              <select value={country} onChange={changeCountry}>
                <option>select country</option>
                {countryData.map((getcountry, i) => (<option key={i} value={getcountry.country_id}>{getcountry.country_name}</option>))}
              </select>
              
            {displayState ?  <select >
                {state.map((getstate, i) => (<option key={i} value={getstate.state_id}>{getstate.state_name}</option>))}
              </select>:null
            }
            </div>
            <button>update profile</button>

          </dir>
        </div>
      </div>
    </>
  )
}
export default Profile