import React from "react";
import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.src} alt="teacher" />
      <div className="card--content">
        <div>
          <div className="card--title">{props.title}</div>
          <div className="card--faculty">{props.faculty}</div>
        </div>
        <div className="card--viewmore">
          <Link to={`/teacher/${props.id}`}>{props.viewmore}</Link>
        </div>
      </div>
    </div>
  );
}
