import React, { Component } from 'react';
import './App.css';
import PhoneData from './phonedata';
import PriceBlock from './priceblock';
import Selector from './selector';
import Gold from './images/Apple_iPhone_8_Gold-full-product-front.png';
import Silver from './images/Apple_iPhone_8_Silver_WS2-full-product-front.png';
import Grey from './images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png';

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
      phonetype: PhoneData[0].deviceSummary[0],
      colour: Gold
    }
    this.changeColour = this.changeColour.bind(this)
    this.changeCapacity = this.changeCapacity.bind(this)
  }

  changeColour(e) {
    e.preventDefault();
    if (e.target.value === 'gold' && this.state.phonetype.memory === '64GB') {
      this.setState({ colour: Gold, phonetype: PhoneData[0].deviceSummary[0] });
    } else if (e.target.value === 'silver' && this.state.phonetype.memory === '64GB') {
      this.setState({ colour: Silver, phonetype: PhoneData[0].deviceSummary[1] });
    } else if (e.target.value === 'grey' && this.state.phonetype.memory === '64GB') {
      this.setState({ colour: Grey, phonetype: PhoneData[0].deviceSummary[2] });
    } else if (e.target.value === 'gold' && this.state.phonetype.memory === '256GB') {
      this.setState({ colour: Gold, phonetype: PhoneData[0].deviceSummary[3] });
    } else if (e.target.value === 'silver' && this.state.phonetype.memory === '256GB') {
      this.setState({ colour: Silver, phonetype: PhoneData[0].deviceSummary[4] });
    } else if (e.target.value === 'grey' && this.state.phonetype.memory === '256GB') {
      this.setState({ colour: Grey, phonetype: PhoneData[0].deviceSummary[5] });
    }
  }

  changeCapacity(e) {
    e.preventDefault();
    if (e.target.value === '64' && this.state.colour === Gold) {
      this.setState({ phonetype: PhoneData[0].deviceSummary[0] });
    } else if (e.target.value === '64' && this.state.colour === Silver) {
      this.setState({ phonetype: PhoneData[0].deviceSummary[1] });
    } else if (e.target.value === '64' && this.state.colour === Grey) {
      this.setState({ phonetype: PhoneData[0].deviceSummary[2] });
    } else if (e.target.value === '256' && this.state.colour === Gold) {
      this.setState({ phonetype: PhoneData[0].deviceSummary[3] });
    } else if (e.target.value === '256' && this.state.colour === Silver) {
      this.setState({ phonetype: PhoneData[0].deviceSummary[4] });
    } else if (e.target.value === '256' && this.state.colour === Grey) {
      this.setState({ phonetype: PhoneData[0].deviceSummary[5] });
    }
  }

  render() {
    return (
      <div className="Page">
        <PhoneImage colour={this.state.colour}/>
        <p>{this.state.groupname}</p>
        <p>{this.state.phonetype.displayDescription}</p>
        <Selector
          colour={this.state.phonetype.colourName}
          capacity={this.state.phonetype.memory}
          changeColour={this.changeColour}
          changeCapacity={this.changeCapacity}
        />
        <PriceBlock
          upfront={this.state.phonetype.priceInfo.hardwarePrice.oneOffPrice.gross}
          monthly={this.state.phonetype.priceInfo.bundlePrice.monthlyPrice.gross}
        />
      </div>
    )
  }
}

export default App;
