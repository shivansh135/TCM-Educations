import React from "react";
import './plans.css';
import { Card_four } from '../../components/card/card4';
import { Card_three } from '../../components/card/card3';

export function Plans() {
    return (
        <div>
            <div className='course-select'>
                <div className='course-select-area'>
                    <div className='course-head'>
                        <div className='course-head-title'>
                            Choose a Course that Fits you
                        </div>
                        <div className='course-head-option'>
                            <div className='option'>CAT</div>
                            <div className='option'>IPMAT</div>
                            <div className='option'>CLAT</div>
                            <div className='option'>CUET</div>
                        </div>
                    </div>
                    <div className='course-body'>

                        <Card_four
                        course_name='CAT'
                        course_price='Rs.50,000'
                        detail='New batch starts 10th April 2024.'
                        course_timing='Class Timing 8:30PM to 10:30PM'
                        />
                        <Card_three
                        course_name='CAT'
                        course_price='Rs.50,000'
                        detail='New batch starts 10th April 2024.'
                        course_timing='Class Timing 8:30PM to 10:30PM'
                        />
                        <Card_four
                        course_name='CAT'
                        course_price='Rs.50,000'
                        detail='New batch starts 10th April 2024.'
                        course_timing='Class Timing 8:30PM to 10:30PM'
                        />
                    </div>

                </div>
            </div>            
        </div>
    )
}