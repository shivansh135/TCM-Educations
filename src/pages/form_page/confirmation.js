import React from "react";
import './confirmation.css';

export function Confirmation({closeConfirmation}) {
    return (
        <div>
            <div className="confirmation-modal">
                <div className="confirmation">
                    <div className="confirmation_text">
                        <img src="./images/check_circle.png" alt="confirmation" className="confirmation_img"/>
                        <div className="confirmation_head">
                            <div className="call_back">
                                Call back request confirmed
                            </div>
                            <div className="call_back_text">
                                Rorem ipsum dolor sit amet, lorem consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                    <button className="call_back_btn" onClick={closeConfirmation}>
                        Done
                    </button>
                </div>
            </div>

        </div>
    )
}