import React, {Component} from "react";
//import "../../styles/style.scss";
import {Link} from "react-scroll";


export default class Navigation extends Component{
	render(){
		return(
			<nav>
				
			{/*<button type = "button" data-toggle= "collapse" data-target = "#navbarNavMenu" aria-controls="navbarNavMenu"
			aria-expanded="false"
			aria-label="Toggle navigation">
		<i className = "fas fa-bars fa-lg"></i>*/}
			
			<div>
		
				<button>
					<Link to = "home"
					
					activeClass="active"
					spy={true}
					smooth={true}>Home</Link>
				</button>
				<button>
					<Link to = "Weather"
					className = "h2"
					activeClass="active"
					spy={true}
					smooth={true}>Weather</Link>
				</button>
				
			</div>
			{/*</button>*/}
			</nav>
		);
	}
}