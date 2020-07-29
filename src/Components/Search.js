import React, {useState} from 'react'
import "../Styles/App.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search(props) {
const [inputClass , setInputClass] = useState("searchInputHidden");

const handleChange = (value) =>{
 props.updateLocation(value);
 console.log(value);
 
}
    return (
        <div className="SearchSection">
            <input type='text' className={inputClass} onChange={event => handleChange(event.target.value)}/>
            <button className="searchButton"><FontAwesomeIcon icon={faSearch} onClick={() => setInputClass("searchInputVisible")} /></button>    
        </div>
    )
}
