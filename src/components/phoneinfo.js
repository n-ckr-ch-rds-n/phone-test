import React from 'react';

const PhoneInfo = props => {
	return (
		<div className="PhoneInfo">
			<h1>{props.groupname}</h1>
			<p>{props.description}</p>
		</div>
	);
};

export default PhoneInfo;
