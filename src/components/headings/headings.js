import React from 'react';
export function HeadingSubheading({heading,sub,zero=false}){
    return(
        <div className="heading-subheading" >
            <div className='quote' style={zero?{marginTop:'0px'}:{}}>
                {heading}
            </div>

            <div className='home_two_content'>
                {sub}
            </div>
        </div>
        
    )
}