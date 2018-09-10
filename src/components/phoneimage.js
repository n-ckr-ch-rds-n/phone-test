import React from 'react';
import '../styles/phoneimage.css';

const PhoneImage = props => {
	return (
		<div className="PhoneImage">
			<img src={props.colour} alt=""></img>
		</div>
	);
};

export default PhoneImage;
