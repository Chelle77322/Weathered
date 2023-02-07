import React from "react";
import Home from "../src/js/shared/components/Home/Home.jsx";
import Navigation from "../src/js/shared/components/Navigation/navigation.jsx";
import Weather from "../src/js/shared/components/Weather/Weather.jsx"
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