import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Page3b extends Component {


  

  render() {
    return (
        <div>
       <p>{this.props.message}.</p>
      </div>
    );
  }
}

export default Page3b;
