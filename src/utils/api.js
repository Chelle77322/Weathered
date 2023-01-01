import axios from "axios";
export default{
    //Locates the weather for a particular city
    searchWeather: function(query){
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}`);
    },
}