import React from 'react';
//** NEED TO IMPORT .ENV config here */
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