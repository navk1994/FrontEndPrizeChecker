import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Page1 from './Page1';
import Page2 from './Page2';
import Page3a from './Page3a';
import Page3b from './Page3b';
import axios from 'axios';

class App extends Component {

  state = 
  {
    accountNumber: "Jones"
  }

  createAccount = () => 
  {
    var account = 
    {
      firstName: document.getElementById('txtFName').value,
      lastName: document.getElementById('txtLName').value
    };

    axios.post("http://localhost:8083/accounts/addAccount", account)
    .then((response) => {
       console.log(response.data.accountNumber);
       this.setState({
        accountNumber: response.data.accountNumber
      });
     
     
});
  }


   links()
  {
   return (
 <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/created">Account Created</Link>
          </li>
          <li>
            <Link to="/checkwinning">Winning Account</Link>
          </li>
    <li>
            <Link to="/checklosing">Losing Account</Link>
          </li>

        </ul>

        <hr />

        <Route exact path="/" component={Page1} />
        <Route path="/created" component={Page2} />
        <Route path="/checkwinning" component={Page3a} />
        <Route path="/checklosing" component={Page3b} />
      </div>
    </Router>


   );
  }

  

  render() {
    return (
      <div className="App">
       
   <h1>Account Creation</h1>
<br/>
   First Name:
   <input type="text" id="txtFName"></input>  

   <br/>
   Last Name: 
   <input type="text" id="txtLName"></input>  

   <br/>
      <p>{this.state.accountNumber}</p>
   <button onClick={this.createAccount} >Submit</button>
      </div>
    );
  }
}

export default App;
