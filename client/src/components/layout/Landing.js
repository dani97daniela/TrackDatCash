import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';

import logo2 from "../../o-logo.png";
import logo from "../../money_sign.png";
import picture from "../../fin_plan.jpg";
import description from "../../pic.PNG";
class Landing extends Component {
  render() {
    return (
      	
		<div className= "App">
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"></link>
				<div className="container">
					
					<nav className = "navbar navbar-expand-sm navbar-light navbar-custom sticky-top">
					<center><h1><img src = {logo2} width = "400" height = "80"  alt = ""/></h1></center>
					<div className="collpase navbar-collapse">
					  <ul className="navbar-nav ml-auto">
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
						<center><h1><img src = {picture} width = "1100" height = "300" class = "rounded" alt = ""/></h1></center>
					</div>
					<div className = "Description">
					<center><h1><img src = {description} width = "1100" height = "350" class = "rounded" alt = ""/></h1></center>
						
						
					</div>
           
           
            <br />
            
            
         
	 </div>
    );
  }
}

export default Landing;
