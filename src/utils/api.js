import axios from "axios";
const apiKey = "&appid=d0b7be971023771643958546fb4a9079";
const alternAPI = "&appid=804efd95195790cfac921c2a61aed882";
const celsius =  "&units=metric";
var weatherHistory = [];

inputData = "";
//Very First Function
//this happens first
$("#formCity").on("submit", function (e) {
    e.preventDefault();
    var cityInput= $("#cityInput.form-control").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput  +celsius + apiKey;
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      success: function(data){
        inputData = data;
          icon = data.weather[0].icon;
          var dT = data.dt;
          console.log(icon);
          var URL = "http://openweathermap.org/img/w/"+ icon + ".png";
          console.log(URL);
          var currentDay = moment(dT ,'X').utcOffset(data.timezone/60).format("DD/MM/YY");
          var temp = data.main.temp;
          var humidity = data.main.humidity;
          var windspeed = data.wind.speed;
          console.log(windspeed);
          console.log(currentDay);
    
    //Make the changes reflect on the webpage
    $(".currentCity").html(`${data.name} ${currentDay}`);
          $("#weatherIcon").attr("src",URL);
          $("#weatherIcon").attr("alt", "weather icon");
          $(".temp").html("Temp: " + temp + "&deg");
          $(".humidity").html("Humidity: " + humidity + "%");
          $(".windspeed").html("Wind Speed: " + windspeed + "km");
   //Pushing the search to the weatherHistory array       
          weatherHistory.push(data.name);
    //Calling the other functions UVIndex, Seven Day Forecast appendweatherHistory
    getUVIndex();
    getSevenDayForecast();
    appendweatherHistory();
    //Resetting the input to blank
    $("#cityInput.form-control").val("");
      }
    });
  });

export default{
    //Locates the weather for a particular city
    searchWeather: function(query){
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}`);
    },
}