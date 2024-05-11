import React from "react";
import './offline_centre.css';

export function Offline_centre() {
    return (
        <div>
            <div className="off_centre">
                <div className="centre_heading">
                    Experience the best in our offline centres
                </div>

                <div className="centres">
                    <div className="centre_one">
                        <img src="./images/prayagraj_centre.png" className="centre_prayagraj" alt="prayagraj"/>
                        <div className="centre_name">Prayagraj</div>
                        <button className="visit">Visit_Centre {'>'}</button>
                    </div>
                    <div className="centre_two">
                        <img src="./images/varanasi_centre.png" className="centre_varanasi" alt="varanasi"/>
                        <div className="centre_name">Varanasi</div>
                        <button className="visit">Visit_Centre {'>'}</button>
                    </div>
                </div>
            </div>

        
        
        
        </div>
    )
}