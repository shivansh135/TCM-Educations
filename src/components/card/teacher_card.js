import React from "react";

export function Teacher_card({feature,detail}) {
    return (
        <div>
            <div className="teacher_card">
                <div className="teacher_card_details">
                    <div className="teacher_card_head">{feature}</div>
                    <div className="teacher_card_text">{detail}</div>
                </div>
            </div>
        </div>
    )
}