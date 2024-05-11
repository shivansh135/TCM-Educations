import React from "react";


export function Question_paper_card({image,title,detail}) {
    return (
        <div>
                    <div className="question_paper_card">
                        <img src={`./images/${image}`} alt="question_paper" className="question_button"/>
                        <div className="question_paper_text">
                            <div className="question_paper_Title">
                                {title}
                            </div>
                            <div className="question_paper_detail">
                                {detail}
                            </div>
                        </div>
                    </div>            
        </div>
    )
}