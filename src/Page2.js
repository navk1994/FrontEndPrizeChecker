import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ReactDOM from 'react-dom';
import Page3a from './Page3a';
import Page3b from './Page3b';
import axios from 'axios';
class Page2 extends Component {
    
    checkPrize = () =>
    {
        
        axios.get('http://localhost:8081/accounts/processOffer/' + this.props.account)
    .then((response) => {
        console.log(response.data);
        if (response.data.winner){
            ReactDOM.render(<Page3a message={response.data.prize}/>, document.getElementById("page3"))
        } else {
            ReactDOM.render(<Page3b message={response.data.prize}/>, document.getElementById("page3"))
        } 
       
      
     
  });
    }
  

  render() {
    return (
        <div className="App" id="page3">
        <h1>Account Succesfully Created</h1>

        <h2>Account No: {this.props.account}</h2>
        
        <p>Click Here to enter prize draw</p>
        <button onClick={this.checkPrize} >Enter Draw</button>
      </div>
    );
  }
}

export default Page2;
