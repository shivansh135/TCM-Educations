import React from "react";
import { Link } from "react-router-dom";

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
                                    <Link to ='/checkout'>
                                        Enroll Now
                                    </Link>
                                </button>
                                <div className='batch-card-viewmore'>
                                    <Link to ={'/pricing/'+course.split(' ')[0]}>
                                        View details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    )
}