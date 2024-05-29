import React from "react";
import './offline_centre.css';
import { Cityy } from "../../components/card/city_card";

export function Offline_centre() {
    return (
        <div>
            <div className="off_centre">
                <div className="centre_heading">
                    Experience the best in our offline centres
                </div>

                <div className="centres">
                    <Cityy
                        img="prayagraj_centre.png"
                        name="Prayagraj"
                        id="prayagraj"
                    />
                    <Cityy
                        id='varanasi'
                        img="varanasi_centre.png"
                        name="Varanasi"
                    />
                </div>
            </div>

        
        
        
        </div>
    )
}