
import React from "react";

export function Centre({Location}) {
    return (
        <>
            <img src="./images/prayagraj.png" style={{width:'100%',height:'auto'}} alt='prayagraj'/>
            <div className='prayag_content'>
                <img src="./images/tcm.png" className='tcm_logo' alt='tcm'/>
                <div className='prayag_head'>
                    Offline Centre at {Location}
                </div>
                <div className='prayag_but'>
                    <button className='call_btn'>Call at centre{'>'}</button>
                    <button className='view_btn'>View centre{'>'}</button>
                </div>
            </div>
        </>
    );
}