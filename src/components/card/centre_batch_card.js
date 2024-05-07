import React from "react";

export function Batch_card({course, date, detail}) {
    return (
        <div>
                    <div className='batch-card'>
                        <div className='batch-card-content'>
                            <div className='batch-card-firstpor'>
                                <div className='batch-card-firstpor-content'>
                                    <div className='batch-card-firstpor-title'>
                                        {course}
                                    </div>
                                    <div className='batch-card-firstpor-title-date'>
                                        {date}
                                    </div>
                                    <div className='batch-card-firstpor-detail'>
                                        {detail}                                    
                                    </div>
                                </div>
                                <div className='city-contain'>
                                    <div className='batch-card-city1'>
                                        Varanasi
                                    </div>
                                    <div className='batch-card-city1'>
                                        Mumbai
                                    </div>
                                    <div className='batch-card-city1'>
                                        Delhi
                                    </div>
                                </div>
                            </div>
                            <div className='second-por'>
                                <button className='batch-enroll-but'>
                                    Enroll Now
                                </button>
                                <div className='batch-card-viewmore'>
                                    View details
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    )
}