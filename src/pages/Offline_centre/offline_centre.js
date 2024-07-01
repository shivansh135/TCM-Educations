import React from "react";
import './offline_centre.css';
import { Cityy } from "../../components/card/city_card";
import { HeadingSubheading } from "../../components/headings/headings";

export function Offline_centre({zero=true}) {
    return (
        <div>
            <div className="off_centre">
                <HeadingSubheading zero={zero} heading={'TCM’s Learning Centres'} sub="Explore TCM's state-of-the-art offline centres, where cutting-edge facilities, expert faculty, and a vibrant learning environment come together to help you achieve CAT success"/>

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