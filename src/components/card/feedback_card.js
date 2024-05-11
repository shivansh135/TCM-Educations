import React from "react";
export function Feedback_card({rank,name,city,feedback}) {
    return(
        <>
                <div className='feedback_card'>
                    <div className='feedback_content'>
                        <div className='feedback_video'>
                            <img src='./images/play_arrow_two.png' className='play_but' alt='play'/>
                        </div>
                        <div className='feedback_detail'>
                            <div className='feedback_name_details'>
                                <button className='ranking'>{rank}</button>
                                <div className='feedback_name'>
                                    <div>{name},</div><div className='feedback_city'>{city}</div>
                                </div>
                            </div>
                            <div className='feedback_text'>
                                {feedback}
                            </div>
                        </div>
                        <button className='know_more'>Know More {'>'}</button>
                    </div>
                </div>
        </>
    );
}