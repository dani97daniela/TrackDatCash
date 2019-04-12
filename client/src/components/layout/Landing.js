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
					<center><h1><img src = {logo2} width = "400" height = "80"  alt = ""/></h1></center>
					<div className="collpase navbar-collapse">
					  <ul className="navbar-nav mr-auto">
						<li className="navbar-item">
						  <right><Link to="register" className="nav-link">Register</Link></right>
						</li>
						<li className="navbar-item">
						 <right> <Link to="login" className="nav-link">Login</Link></right>
						</li>
						</ul>
					</div>
					</nav>
				</div>
					<div className = "Picture">
						<h1><img src = {picture} width = "1100" height = "300" class = "rounded" alt = ""/></h1>
					</div>
					</div className = "Description">
						<center><h5>Your personal or group-based Financial Planner!</h5></center>
						<center><h6>Here in Track Dat Ca$h,our goal is to give the user the ability to track their spending on a personal level, and even in a group level!</h6></center>
						<center><h6> Take charge of your planning today! </h6></center>
						<center><h6>Be your OWN financial advisor!</h6></center>
						<center><h1><img src = {logo} width = "80" height = "80" class = "rounded-circle" alt = ""/></h1></center>
					</div>
           
           
            <br />
            
            
         
	 </div>
    );
  }
}

export default Landing;
