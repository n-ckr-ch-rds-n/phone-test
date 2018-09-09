import React from 'react';

const PhoneInfo = props => {
  return (
    <div className="PhoneInfo">
      <p>{props.groupname}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default PhoneInfo;
