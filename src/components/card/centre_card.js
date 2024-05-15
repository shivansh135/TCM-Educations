import React from "react";

export function Centre_card({image, title, description}) {
    return (
        <div>
            <div className='center_card_one'>
                <div className='center_card_content'>
                    <div className='center_card_image'>
                        <img src={`./images/${image}`} style={{width:"100%", height:"auto"}} alt='img1'/>
                    </div>
                    <div className='center_card_head'>
                        <div className='center_card_title'>
                            {title}
                        </div>
                        <div className='center_card_detail'>
                            {description}                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}