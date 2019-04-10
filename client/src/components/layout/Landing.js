import React, { Component } from "react";
import { Link } from "react-router-dom";
import './App.css';

import logo2 from "./o-logo.png";
import logo from "./money_sign.png";
import picture from "./fin_plan.jpg";
class Landing extends Component {
  render() {
    return (
      	
		<div className= "App">
			
				<div className="container">
					
					<nav className = "navbar navbar-expand-sm navbar-light navbar-custom sticky-top">
					<img src = {logo2} width = "400" height = "80"  alt = ""/>
					<div className="collpase navbar-collapse">
					  <ul className="navbar-nav mr-auto">
						<li className="navbar-item">
						  <Link to="register" className="nav-link">Register</Link>
						</li>
						<li className="navbar-item">
						  <Link to="login" className="nav-link">Login</Link>
						</li>
						</ul>
					</div>
					</nav>
				</div>
					<div className = "Picture">
						<h1><img src = {picture} width = "1100" height = "300" class = "rounded" alt = ""/></h1>
					</div>
	  
           
           
            <br />
            
            
         
	 </div>
    );
  }
}

export default Landing;
