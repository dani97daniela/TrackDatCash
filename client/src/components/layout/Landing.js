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
			
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
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
					<div className = "Real_pics">
					  <h2>Carousel Example</h2>  
						<div id="myCarousel" class="carousel slide" data-ride="carousel">
   
							<ol class="carousel-indicators">
								<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
								<li data-target="#myCarousel" data-slide-to="1"></li>
								<li data-target="#myCarousel" data-slide-to="2"></li>
							</ol>

    
							<div class="carousel-inner">
								<div class="item active">
									<img src={description} alt="Pic 1" style="width:100%;">
								</div>

								<div class="item">
									<img src={logo} alt="Pic 2" style="width:100%;">
								</div>
			
								<div class="item">
									<img src={logo2} alt="Pic 3" style="width:100%;">
								</div>
							</div>


						<a class="left carousel-control" href="#myCarousel" data-slide="prev">
						  <span class="glyphicon glyphicon-chevron-left"></span>
						  <span class="sr-only">Previous</span>
						</a>
						<a class="right carousel-control" href="#myCarousel" data-slide="next">
							  <span class="glyphicon glyphicon-chevron-right"></span>
							  <span class="sr-only">Next</span>
						</a>
						</div>
					</div>
					
           
           
            <br />
            
            
         
	 </div>
    );
  }
}

export default Landing;
