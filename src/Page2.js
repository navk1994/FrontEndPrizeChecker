import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Page2 extends Component {
    
    checkPrize = () =>
    {
        
    }
  

  render() {
    return (
        <div className="App" id="page2">
        <h1>Account Succesfully Created</h1>

        <h2>Account No: {this.props.account}</h2>
        
        <p>Click Here to enter prize draw</p>
        <button >Enter Draw</button>
      </div>
    );
  }
}

export default Page2;
