import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';

 
import '../../App.css';

import logo2 from "../../o-logo.png";
import logo from "../../money_sign.png";
import picture from "../../fin_plan.jpg";
import description from "../../pic.PNG";

class Landing extends Component {
  render() {
    return (
      	
		<div className= "App">
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"></link>
				<div className="container">
					
					<nav className = "navbar navbar-expand-sm navbar-light navbar-custom sticky-top">
					<h1><img src = {logo2} width = "400" height = "80"  alt = ""/></h1>
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
				 <br />
				<div className = "footer">
					<center><p> Team 13</p></center>
					<center><p> Orlando Florida</p></center>
				</div>
		</div>
    );
  }
}

export default Landing;
