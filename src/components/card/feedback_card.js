import React from "react";
import { Link } from "react-router-dom";
export function Feedback_card({ rank, name, city, feedback }) {
  return (
    <>
      <div className="card_two" style={{padding:'10px'}}>
        <div className="top-layer" style={{display: "flex",flexDirection:'column',alignItems:'start',width:'100%'}}>
          <div style={{ display: "flex",flexDirection:'column', gap: "14px",width:'100%' }}>
            <div className="feedback_video">
              <img
                src="/images/play_arrow_two.png"
                className="play_but"
                alt="play"
              />
            </div>
            <div className="stud-head" style={{flexDirection:'row'}}>
              <div className="stud-name">{name}, </div>
              <div className="stud-cor">{' '+city}</div>
            </div>
          </div>

          <div className="stud-ile">{rank}</div>
        </div>
        <div className="bottom-layer">
          {/* <div className="stud-detail">{feedback}</div> */}
          <div className="stud-more">
            <Link>Learn More</Link>
          </div>
        </div>
      </div>
    </>
  );
}
