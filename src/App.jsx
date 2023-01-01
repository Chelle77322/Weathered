import React from "react";
import Home from "./components/Home/Home.jsx";
import Navigation from "./components/Navigation/navigation.jsx";
import Weather from "./components/Weather/Weather.jsx"
//import Footer from "./components/footer.jsx"

//import  "./styles/style.scss"
function App () {
    return (
        <div className ="App">
         
           
            <Navigation />
            <Home />
            <Weather />
           

        </div>
    );
}
export default App;