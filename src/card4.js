
import React from "react";
import './home.css';
import Icon_three from './notifications_active_two.svg';

export default function Card_four(props) {
    return (
                    <div>
                        <div className='card4'>
                            
                            <img src="./images/circle_two.png" className='oval2' alt='book3'/>

                            <div className='card4-title'>
                                TCM’S Online Holistic Batch - {props.course_name} 2024
                            </div>

                            <div className='card4-contents'>
                                <div className='card4-title2'>
                                    Live Online {props.course_name} 2024 Weekday Batch
                                </div>

                                <div className='card4-detail'>
                                    <ul>
                                        <li className='white'>120+ Interactive Classes</li>
                                        <li className='white'>120+ Interactive Classes</li>
                                        <li className='white'>120+ Interactive Classes</li>
                                        <li className='white'>120+ Interactive Classes</li>

                                    </ul>
                                    <div className='card4-manymore'>
                                        and many more
                                    </div>
                                </div>
                            </div>

                            <div className='card4-price'>
                                {props.course_price} (incl GST)
                            </div>

                            <div className='card4-other'>
                                <button className='card4-buy'>
                                    Buy Now {'>'}
                                </button>
                                <div className='card4-more'>
                                    View More
                                </div>
                            </div>    
                            <div className='card4-extra'>
                                <img src={Icon_three} className='bell' alt='bell'/>
                                {props.detail}<br/> {props.course_timing}
                            </div>

                        </div>
                    </div>
    );
}