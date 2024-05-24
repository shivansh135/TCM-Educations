import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
export function Navbar() {
    return (
        <div>
            <div className='navbar'>
                <div className='navbar_content'>
                    <div className='navbar_logo'>
                        <Link to='/'>
                         <img src='./images/Icon_tcm.png' alt='logo' style={{width:'100%', height:'auto'}} />
                        </Link>
                    </div>
                    <div className='navbar_head'>
                        <div className='navbar_council'><Link to='/form-page'>Career counselling</Link></div>
                        <div className='navbar_pp'><Link to='/past-papers'>Past Papers</Link></div>
                        <div className='navbar_offCetre'><Link to='/offline-centre'>Offline Centres</Link></div>
                        <div className='navbar_mock'><Link to='/past-papers'>Mock Series</Link></div>
                        <button className='navbar_signup'><Link to='/signup'>Login/Signup</Link></button>
                    </div>
                </div>

            </div>

        </div>
        
    )
}