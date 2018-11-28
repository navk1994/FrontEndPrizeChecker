import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ReactDOM from 'react-dom';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3a from './Page3a';
import Page3b from './Page3b';
import axios from 'axios';

class App extends Component {
  constructor(props)
  {
    super(props);

    this.state = 
    {
      accountNumber: "Jones"
    }
  }


 

  createAccount = (event) => 
  {
    event.preventDefault();
    var account = 
    {
      firstName: document.getElementById('txtFName').value,
      lastName: document.getElementById('txtLName').value
    };

   
    console.log(account);
    axios.post('http://localhost:8081/accounts/addAccount',{account})
    .then((response) => {
      console.log(response.data);
       console.log(response.data.accountNumber);
       this.setState({
        accountNumber: response.data.accountNumber

      });
      ReactDOM.render(<Page2 account={this.state.accountNumber} />, document.getElementById('page2'));
     
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
      <div className="App" id="page2">
       
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
