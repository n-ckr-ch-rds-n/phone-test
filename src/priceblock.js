import React from 'react';
import './priceblock.css';

const PriceBlock = props => {
  return (
    <div className="PriceBlock">
      <div className="upfront">
        <p>from <span className="price">£{props.upfront}</span> upfront cost</p>
      </div>
      <div className="monthly">
        <p>When you pay <span className="price">£{props.monthly}</span> a month</p>
      </div>
    </div>
  )
}

export default PriceBlock;
