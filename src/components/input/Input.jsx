import React from 'react';
import "./Input.css"
const Input = ({title, text}) => {
    return (
            <div>
            <h4>{title}</h4>
            <input type="text" placeholder={text} />
            </div>
    );
};

export default Input;