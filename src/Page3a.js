import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from 'axios';
import Page3b from './Page3b';
import ReactDOM from 'react-dom';

class Page3a extends Component {

  state = 
  {
    
  }

  

  

  render() {
    return (
        <div>

          <p>{this.props.message} pounds.</p>

      </div>
    );
  }
}

export default Page3a;
