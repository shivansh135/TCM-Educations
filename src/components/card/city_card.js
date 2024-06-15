import React from "react";
import { Link } from "react-router-dom";
export  function Cityy({img,name,id}) {
    return (
        <div>
                    <div className="centre_one">
                        <img src={`/images/${img}`} className="centre_prayagraj" alt="prayagraj"/>
                        <div className="centre_name">{name}</div>
                        <button className="visit"><Link to={`/offline-centre/Prayagraj/${id}`}>Visit Centre </Link><img src="./images/Icon.svg" style={{filter:'brightness(0)'}} className='belll' alt='bell'/></button>
                    </div>

        </div>
    )
}