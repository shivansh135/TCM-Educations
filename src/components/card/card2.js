import React from "react";
import { Link } from "react-router-dom";
export function Card_two(props) {
    return (
        <Link state={props.state} to ={`/testimonial/${props.name}`} className="card_two">
            <div className="top-layer">
                <div style={{display:'flex',gap:'14px'}}> 
                <img className="stud-img" src={props.src} alt="student"/>
                <div className="stud-head">
                    <div className="stud-name">{props.name}</div>
                    {/* <div className="stud-cor">{props.cor}</div> */}
                </div>
                </div>
                
                <div className="stud-ile">{props.ile}</div>
            </div>
            <div className="bottom-layer">
                <div className="stud-detail">{props.review}</div>
                <div className="stud-more">Learn More</div>
            </div>
        </Link>
    )

}