import React from 'react';

const Selector = props => {
  return (
    <div className="Selector">
      <p>Colour: {props.colour}</p>
        <button value='gold' onClick={props.changeColour}>Gold</button>
        <button value='silver' onClick={props.changeColour}>Silver</button>
        <button value='grey' onClick={props.changeColour}>Grey</button>
      <p>Capacity: {props.capacity}</p>
        <button value='64' onClick={props.changeCapacity}>64</button>
        <button value='256' onClick={props.changeCapacity}>256</button>
    </div>
  )
}

export default Selector;
