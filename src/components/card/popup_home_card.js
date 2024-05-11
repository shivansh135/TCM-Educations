import React from "react";
export function Popup_home_card({course,detail}) {
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
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )

}