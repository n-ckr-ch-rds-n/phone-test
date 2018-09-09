import React from 'react';
import './phoneimage.css';

const PhoneImage = props => {
  return (
    <div className="PhoneImage">
      <img src={props.colour} alt=""></img>
    </div>
  )
}

export default PhoneImage;
