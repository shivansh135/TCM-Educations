import React from "react";
import { Link } from "react-router-dom";
export function Card_two(props) {
    return (
        <div className="card_two">
            <div className="top-layer">
                <img className="stud-img" src={props.src} alt="student"/>
                <div className="stud-head">
                    <div className="stud-name">{props.name}</div>
                    <div className="stud-cor">{props.cor}</div>
                </div>
                <div className="stud-ile">{props.ile}</div>
            </div>
            <div className="bottom-layer">
                <div className="stud-detail">{props.review}</div>
                <div className="stud-more"><Link to ={`/testimonial/${props.id}`}>Learn More</Link></div>
            </div>
        </div>
    )

}