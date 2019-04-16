import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import sortBy from 'lodash/sortBy';
import sumBy from 'lodash/sumBy';
import logo from "../o-logo.png";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

import jwt_decode from "jwt-decode";

import ReactChartkick, { PieChart } from 'react-chartkick'
import Chart from 'chart.js'
ReactChartkick.addAdapter(Chart)

var temp = [];
var sum = 0;
var tempFood = 0;
var tempBills = 0;
var tempEntertainment = 0;
var tempOther = 0;

const Expense = props => (
    <tr>
        <td>{props.item.description}</td>
        <td>{props.item.amount}</td>
		<td>{props.item.category}</td>
        <td>{props.item.month}</td>
        <td>{props.item.day}</td>
        <td>{props.item.year}</td>
		<td>{props.item.groupCode}</td>
        <td>
            <Link to={"/edit/"+props.item._id}>Edit</Link>
        </td>
    </tr>
)

class TodosList extends Component {

    constructor(props) {
        super(props);
		
		this.onChangeCategory = this.onChangeCategory.bind(this);
		this.onChangeSort = this.onChangeSort.bind(this);
		
        this.state = {
			expensesArray: [],
			food: 0,
			bills: 0,
			entertainment: 0,
			other: 0,
			total: 0
		};
    }
	
	onLogoutClick = e => {
		e.preventDefault();
		this.props.logoutUser();
	};
	
	componentDidMount() {		
		const idOfUser = jwt_decode(localStorage.getItem("jwtToken")).id;
        axios.post('/expenses/category/Food', {
			id: idOfUser
		})
            .then(response => {
				temp = response.data;
				temp = sortBy(temp, ['description', 'amount']);
				sum = sumBy(temp, 'amount');
				tempFood = sum;
                this.setState({ 
					expensesArray: temp,
					food: tempFood,
					total: sum
				});
            })
            .catch(function (error){
                console.log(error);
            })
		
		axios.post('/expenses/category/Bills', {
			id: idOfUser
		})
            .then(response => {
				temp = response.data;
				tempBills = sumBy(temp, 'amount');
                this.setState({ 
					bills: tempBills
				});
            })
            .catch(function (error){
                console.log(error);
            })
		
		axios.post('/expenses/category/Entertainment', {
			id: idOfUser
		})
            .then(response => {
				temp = response.data;
				tempEntertainment = sumBy(temp, 'amount');
                this.setState({ 
					entertainment: tempEntertainment
				});
            })
            .catch(function (error){
                console.log(error);
            })
		
		axios.post('/expenses/category/Other', {
			id: idOfUser
		})
            .then(response => {
				temp = response.data;
				tempOther = sumBy(temp, 'amount');
                this.setState({ 
					other: tempOther
				});
            })
            .catch(function (error){
                console.log(error);
            })
    }
	
	onChangeCategory(category) {
		const idOfUser = jwt_decode(localStorage.getItem("jwtToken")).id;
        axios.post('expenses/category/'+category, {
			id: idOfUser
		})
            .then(response => {
				temp = response.data;
				temp = sortBy(temp, ['description', 'amount']);
				sum = sumBy(temp, 'amount');
                this.setState({ 
					expensesArray: temp,
					total: sum
				});
            })
            .catch(function (error){
                console.log(error);
            })
    }
	
	onChangeSort(sortItem) {
		temp = this.state.expensesArray;
		temp = sortBy(temp, sortItem);
		sum = sumBy(temp, 'amount');
		this.setState({ 
				expensesArray: temp,
				total: sum
			});
    }

    listOfExpenses() {
        return this.state.expensesArray.map(function(currentExpense, i){
            return <Expense item={currentExpense} key={i} />;
        })
    }

    render() {
        return (
            <div className= "App">
              <nav className="navbar navbar-expand-sm navbar-light navbar-custom sticky-top">
					<img src={logo} width="400" height="80" alt=""/>
					<div className="collpase navbar-collapse">
					  <ul className="navbar-nav mr-auto">
						<li className="navbar-item">
						  <Link to="/dashboard" className="nav-link">All Expenses</Link>
						</li>
						<li className="navbar-item">
						  <Link to="/create" className="nav-link">Create Expense</Link>
						</li>
						<li className="navbar-item">
						  <Link to="/categories" className="nav-link">Categories</Link>
						</li>
						<li className="navbar-item">
						  <Link to="/monthly" className="nav-link">Monthly</Link>
						</li>
						<li className="navbar-item">
						  <Link to="/group" className="nav-link">Group</Link>
						</li>
					  </ul>
					</div>
					<button
					style={{
					width: "150px",
					borderRadius: "3px",
					letterSpacing: "1.5px",
					marginTop: "1rem"
					}}
					onClick={this.onLogoutClick}
					className="btn btn-large waves-effect waves-light hoverable blue accent-3"
					>
					Logout
				</button>
				</nav>
				<h3><center>Category List</center></h3>
		
			  <PieChart data={[
					["Food", this.state.food], 
					["Bills", this.state.bills], 
					["Entertainment", this.state.entertainment], 
					["Other", this.state.other]]
				} backgroundColor:{["#f7adce", "#7fd3f7","#c49bdf","#ffde17"]}/>
	
			  <center><h5>Total: ${this.state.total} </h5></center>
				<div className="container">
				  <nav className="navbar navbar-expand-sm navbar-light bg-light">
					<div className="collpase navbar-collapse">
					  <ul className="navbar-nav mr-auto">
						  <button type="submit" className="btn btn-priority" onClick={() => {this.onChangeCategory('Food')}}>Food</button>
						  <button type="submit" className="btn btn-priority" onClick={() => {this.onChangeCategory('Bills')}}>Bills</button>
						  <button type="submit" className="btn btn-priority" onClick={() => {this.onChangeCategory('Entertainment')}}>Entertainment</button>
						  <button type="submit" className="btn btn-priority" onClick={() => {this.onChangeCategory('Other')}}>Other/Misc.</button>
					  </ul>
					</div>
				  </nav>
				</div>
                <table className="table table-striped table-bordered" 
				  style={{ marginTop: 30 }} >
				  
                    <thead className="thead-dark">
                        <tr>
                            <th data-field="description" 
								onClick={() => {this.onChangeSort('description')}
								}>Description</th>
                            <th data-field="amount" 
								onClick={() => {this.onChangeSort('amount')}
								}>Amount</th>
							<th data-field="category" 
								onClick={() => {this.onChangeSort('category')}
								}>Category</th>
                            <th data-field="month" 
								onClick={() => {this.onChangeSort('month')}
								}>Month</th>
                            <th data-field="day" 
								onClick={() => {this.onChangeSort('day')}
								}>Day</th>
                            <th data-field="year" 
								onClick={() => {this.onChangeSort('year')}
								}>Year</th>
							<th data-field="groupCode" 
								onClick={() => {this.onChangeSort('groupCode')}
								}>Group</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.listOfExpenses() }
                    </tbody>
                </table>
            </div>
        )
    }
}

TodosList.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(TodosList);