import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneData from './phonedata'

console.log(PhoneData);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page/>
      </div>
    );
  }
}

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phonedata: PhoneData
    }
  }
  render() {
    return (
      <div className="Page">
        <p>{this.state.phonedata[0].groupName}</p>
      </div>
    )
  }
}

export default App;
