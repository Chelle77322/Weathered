import React from 'react';
const apiKey = "&appid=d0b7be971023771643958546fb4a9079";
const alternAPI = "&appid=804efd95195790cfac921c2a61aed882";
const celsius =  "&units=metric";
var weatherHistory = [];

function Search(props){
    return (
        <div>
        <form>
            <div >
                <label >City:</label>
                <input 
                id= "search"
               value = {props.search}
                name = "search"
                type = "text"
                placeholder = "Search for a city"
                onChange = {props.handleinputchange}
                />

                <button onClick = {props.handleformsubmit} >Search</button>
               
            </div>
            </form>
        </div>
    )
}
export default Search;