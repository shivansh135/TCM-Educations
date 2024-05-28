
import React from "react";
import { Link } from "react-router-dom";

export function Comparison_card_two() {
    return (
        <div>
                    <div className='comparison-card-two'>
                        <div className='comparison-card-one-body'>
                            <div className='comparison-card-one-title'>
                                2IIM’S Online CAT Coaching - CAT 2024
                            </div>
                            <div className='comparison-card-one-detail'>
                                <div className='comparison-card-one-points'>
                                    <ul>
                                        <li className='comp-bullet'> 120+ Interactive Classes </li>
                                        <li className='comp-bullet'> 120+ Interactive Classes </li>
                                        <li className='comp-bullet'> 120+ Interactive Classes </li>
                                        <li className='comp-bullet'> 120+ Interactive Classes </li>
                                        <li className='comp-bullet'> 120+ Interactive Classes </li>
                                        <li className='comp-bullet'> 100+ Pre recorded classes on QUANT, VARC & DILR </li>
                                        <li className='comp-bullet'> Revision classes + GDPI Preparation </li>
                                    </ul>
                                </div>
                                <button className='comp-book'><Link to="/checkout">Book Now {'>'}</Link></button>
                            </div>
                        </div>
                    </div>
        </div>
    )
}