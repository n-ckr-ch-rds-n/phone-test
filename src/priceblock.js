import React from 'react';

const PriceBlock = props => {
  return (
    <div className="PriceBlock">
      <p>from £{props.upfront} upfront cost</p>
      <p>When you pay £{props.monthly} a month</p>
    </div>
  )
}

export default PriceBlock;
