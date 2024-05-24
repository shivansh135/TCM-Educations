
import React from 'react';
import { Link } from 'react-router-dom';
export function Button() {
    return (
        <div>
            <button className='btnn'><Link to='/plans'>Learn More {'>'}</Link> </button>
        </div>

    );
}