import React from 'react';
export function HeadingSubheading({heading,sub}){
    return(
        <div className="heading-subheading">
            <div className='quote'>
                {heading}
            </div>

            <div className='home_two_content'>
                {sub}
            </div>
        </div>
        
    )
}