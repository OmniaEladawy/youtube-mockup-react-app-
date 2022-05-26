import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component{
    state = {term : ''};

    eventHandle = (e) =>{
       this.setState({term : e.target.value});
    }

    submitHandle = (e) =>{
        e.preventDefault();
        this.props.searchTerm(this.state.term);
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.submitHandle} className="ui form">
                    <label> Video Search </label>
                    <input className="field" type="text" value={this.state.term} placeholder="Search" onChange={(e)=>{this.eventHandle(e)}} />
                </form>
            </div>
        );
    }
};

export default SearchBar;