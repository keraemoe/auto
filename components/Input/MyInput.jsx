import React from 'react';
import s from './MyInput.module.scss'

// import profile from '../../../assets/header/Profile.png'


const MyInput = ({ style, ...props }) => {
	return (
			<input 
            style={props.style}
            className={s.MyInput} {...props} placeholder={props.placeholder} type={props.type} />
	);
};

export default MyInput;