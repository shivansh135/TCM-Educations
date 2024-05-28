import React from "react";
import { Link } from "react-router-dom";
export function Popup_home_card({course,detail,id}) {
    return (
        <div>
            <div className="popup_home_card">
                <div className="popup_home_card_details">
                    <div className='popup_home_card_head'>
                        <div className="popup_home_card_heading">
                            {course}
                        </div>
                        <div className="popup_home_card_subheading">
                            {detail}
                        </div>
                    </div>
                    <button className="popup_home_card_button">
                    <Link to={`cat/${id}`}>
                        Learn More
                    </Link>
                    </button>
                </div>
            </div>
        </div>
    )

}