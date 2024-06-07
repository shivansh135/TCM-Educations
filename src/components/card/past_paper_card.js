import React from "react";
import { Link } from "react-router-dom";

export function Past_papers_card(props) {
    return (
        <div>
            <div className='past_papers-card'>
                <div className='past_papers-card-image'>
                            
                </div>
                <div className='past_papers-card-content'>
                    <div className="past_papers-card-title">
                        {props.title}
                    </div>
                    <button className='past_papers-card-button'>
                        <Link to={`/more-page/${props.id}`}>
                        View Paper
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
};