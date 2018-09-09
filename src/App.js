import React, { Component } from 'react';
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
      groupname: PhoneData[0].groupName,
      phonetype: PhoneData[0].deviceSummary[0]
    }
  }
  render() {
    return (
      <div className="Page">
        <p>{this.state.groupname}</p>
        <p>{this.state.phonetype.displayDescription}</p>
      </div>
    )
  }
}

export default App;
