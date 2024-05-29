
import React from "react";

export function Centre({Location ,img}) {
    return (
        <>
            <img src={`/images/${img}`}style={{width:'100%',height:'auto', position:'relative',  bottom:'40px'}} alt='prayagraj'/>
            <div className='prayag_content'>
                <img src="/images/tcm.png" className='tcm_logo' alt='tcm'/>
                <div className='prayag_head'>
                    Offline Centre at {Location}
                </div>
                <div className='prayag_but'>
                    <button className='call_btn'>Call at centre &nbsp;{'>'}</button>
                    <button className='view_btn'>View centre &nbsp;{'>'}</button>
                </div>
            </div>
        </>
    );
}