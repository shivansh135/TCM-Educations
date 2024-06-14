import React from "react";

export function Step_even({step,title,image,detail}) {
    return(
        <div>
            <div className='Step_one even'>
            <img src={`./images/${image}`} className='Step_img' alt='CAT' />

                <div className='Step_content'>
                    <div className='Step_content_heading'>
                        <div className='Step_content_heading_block'>
                            {step}
                        </div>
                        <div className='Step_content_heading_title'>
                            {title}
                        </div>

                    </div>
                    <div className='Step_content_detail'>
                        {detail }                    
                    </div>
                </div>
            </div>
        </div>
    );
}