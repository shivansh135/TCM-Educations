
import React from "react";

export function Centre({Location ,img,phone,link}) {
    return (
        <>
            <img src={`/images/${img}`} className="local-center-img"  alt='prayagraj'/>
            <div className='prayag_content'>
                <img src="/images/tcm.png" className='tcm_logo' alt='tcm'/>
                <div className='prayag_head'>
                    Offline Centre at {Location}
                </div>
                <div className='prayag_but'>
                    <a href={`tel:${phone}`} className='call_btn'>Call at centre <img src="/images/Icon.svg" style={{filter:'brightness(0)'}} className='belll' alt='bell'/></a>
                    <a target="_blank" href={link} className='view_btn'>View centre <img src="/images/Icon.svg" className='belll' alt='bell'/></a>
                </div>
            </div>
        </>
    );
}