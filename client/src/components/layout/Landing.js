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
					
					<nav className = "navbar navbar-expand-sm navbar-light bg-light">
					<img src = {logo2} width = "400" height = "80"  alt = ""/>
					<div className="collpase navbar-collapse">
					  <ul className="navbar-nav mr-auto">
						<li className="navbar-item">
						  <Link to="register" className="nav-link">Register</Link>
						</li>
						</ul>
					</div>
					</nav>
				</div>
					<div className = "Picture">
						<h1><img src = {picture} width = "1100" height = "300" class = "rounded" alt = ""/></h1>
					</div>
	  <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
           
           
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
	 </div>
    );
  }
}

export default Landing;
