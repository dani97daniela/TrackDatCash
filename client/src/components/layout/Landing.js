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
				<div id="myCarousel" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators">
					  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					  <li data-target="#myCarousel" data-slide-to="1"></li>
					</ol>
						<div class="carousel-inner" role="listbox">
						  <div class="item active">
							<img src="https://placehold.it/1200x400?text=IMAGE" alt="Image"/>
						  </div>

						  <div class="item">
							<img src="https://placehold.it/1200x400?text=Another Image Maybe" alt="Image"/>   
						  </div>
						</div>
					<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
					  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					  <span class="sr-only">Previous</span>
					</a>
					<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
					  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					  <span class="sr-only">Next</span>
					</a>
				</div>
  
				<div class="container text-center">    
				  <h3>What We Do</h3><br>
				  <div class="row">
					<div class="col-sm-4">
					  <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image"/>
					  <p>Current Project</p>
					</div>
					<div class="col-sm-4"> 
					  <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image"/>
					  <p>Project 2</p>    
					</div>
					<div class="col-sm-4">
					  <div class="well">
					   <p>Some text..</p>
					  </div>
					  <div class="well">
					   <p>Some text..</p>
					  </div>
					</div>
				  </div>
				</div><br/>
			</div>
		<footer class="container-fluid text-center">
			<p>Footer Text</p>
		</footer>
    );
  }
}

export default Landing;
