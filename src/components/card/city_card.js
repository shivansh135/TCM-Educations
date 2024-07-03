import React from "react";
import { Link } from "react-router-dom";
export  function Cityy({img,name,id}) {
    return (
        <div>
                    <Link to={`/offline-centre/${id}`} className="centre_one">
                        <img src={`/images/${img}`} className="centre_prayagraj" alt="prayagraj"/>
                        <div className="centre_name">{name}</div>
                    </Link>

        </div>
    )
}