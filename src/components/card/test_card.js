import React from "react";

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