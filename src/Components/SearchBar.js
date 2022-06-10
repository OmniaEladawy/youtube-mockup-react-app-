import React , {useState} from "react";
import './SearchBar.css';

const SearchBar = (props) => {
    const[term,setTerm]=useState("");

    const eventHandle = (e) =>{
        setTerm(e.target.value);
     }
 
     const submitHandle = (e) =>{
        e.preventDefault();
        props.searchTerm(term);
     }

    return(
        <div className="search-bar ui segment">
            <form onSubmit={submitHandle} className="ui form">
                <label> Video Search </label>
                <input className="field" type="text" value={term} placeholder="Search" onChange={(e)=>{eventHandle(e)}} />
            </form>
        </div>
    );
}

export default SearchBar;