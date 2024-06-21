import React from "react";
import { Link } from "react-router-dom";

export  function Test( {heading,detail} ) {
    return (
                    <div className='test-card'>
                        <div className='test-card-content'>
                            <div className="test-card-title">
                            {heading}
                            </div>
                            <div className="test-card-detail">
                            {detail}
                            </div>
                            <div className="test-card-button">
                                <button className="start_test">Login</button>
                            </div>
                        </div>
                    </div>
    )
}

export  function Test2( {heading,detail,button,link} ) {
    return (
                    <div className='test-card'>
                        <div className='test-card-content'>
                            <div className="test-card-title">
                            {heading}
                            </div>
                            <div className="test-card-detail">
                            {detail}
                            </div>
                            <div className="test-card-button">
                                <Link to={link} className="start_test">{button}</Link>
                            </div>
                        </div>
                    </div>
    )
}

export  function UpcomminCard( {heading,detail,button,link,start} ) {
    return (
                    <div className='test-card'>
                        <div className='test-card-content'>
                            <div className="test-card-title">
                            {heading}
                            </div>
                            <strong style={{fontWeight:'600'}} className="test-card-detail">
                            Starting {start}
                            </strong>
                            <div className="test-card-detail">
                            {detail}
                            </div>
                            <div className="test-card-button">
                                <Link to={link} className="start_test">{button}</Link>
                                <a href="tel:+91 9336339618" className="start_test" style={{width:'fit-content',textDecoration:'underline',backgroundColor:'transparent',color:'#14a4f5'}}>Know More</a>
                            </div>
                        </div>
                    </div>
    )
}
