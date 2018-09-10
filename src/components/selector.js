import React from 'react';
import '../styles/selector.css';

const Selector = props => {
  return (
    <div className="Selector">
      <div className="Colour">
        <p>Colour: <span className='bold'>{props.colour}</span></p>
          <button className="gold" value='gold' onClick={props.changeColour}></button>
          <button className="silver" value='silver' onClick={props.changeColour}></button>
          <button className="grey" value='grey' onClick={props.changeColour}></button>
      </div>
      <div className="Capacity">
        <p>Capacity: <span className='bold'>{props.capacity}</span></p>
          <button className="capacitybutton" value='64' onClick={props.changeCapacity}>64</button>
          <button className="capacitybutton" value='256' onClick={props.changeCapacity}>256</button>
      </div>
    </div>
  )
}

export default Selector;
