import React from "react";
import './home.css';

export default function Card(props) {
    return (
        <div className="card">
                <img className="card--image" src={props.src} alt="teacher"/>
        <div className="card--content">
            <div>            
                <div className="card--title">{props.title}</div>
                <div className="card--faculty">{props.faculty}</div>
            </div>
            <div className="card--viewmore">{props.viewmore}</div>
        </div>
        </div>

    )
}