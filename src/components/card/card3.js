import React from "react";
import Icon_two from './notifications_active.svg';
import { Link } from "react-router-dom";

export function Card_three(props) {
    return (
                    <div>
                        <div className='card3'>
                            

                            <img src="./images/circle.png" className='oval' alt='book2'/>

                            <div className='card3-title'>
                                TCM’S Online Holistic Batch - {props.course_name} 2024
                            </div>

                            <div className='card3-title2'>
                                Live Online {props.course_name} 2024 Weekday Batch
                            </div>

                            <div className='card3-detail'>
                                <ul>
                                    <li className='white'>120+ Interactive Classes</li>
                                    <li className='white'>120+ Interactive Classes</li>
                                    <li className='white'>120+ Interactive Classes</li>
                                    <li className='white'>120+ Interactive Classes</li>
                                    <li className='white'>120+ Interactive Classes</li>
                                </ul>

                                <div className='card3-manymore'>
                                        and many more
                                </div>
                            </div>

                            <div className='card3-price'>
                                {props.course_price} (incl GST)
                            </div>

                            <div className='card3-other'>
                                <button className='card3-buy'>
                                <Link to="/checkout">
                                    Buy Now {'>'}
                                </Link>
                                </button>
                                <div className='card3-more'>
                                <Link to="/cat">
                                    View More
                                </Link>
                                </div>
                            </div>    
                            <div className='card3-extra'>
                                <img src={Icon_two} className='bell' alt='bell'/>
                                {props.detail}<br/> {props.course_timing}
                            </div>

                        </div>
                    </div>
    );
}