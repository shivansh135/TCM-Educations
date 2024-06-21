
import React from 'react';
import { Link } from 'react-router-dom';
export function Button({ onClick }) {
    return (
        <div>
            <button className='btnn' onClick={onClick}>Start your Journey  <img src="./images/Icon.svg" className='belll' alt='bell'/> </button>
        </div>

    );
}

export function Button2({text,link}) {
    return (
            <Link to={link} style={{width:'70%'}} className='btnn'>{text} </Link>

    );
}