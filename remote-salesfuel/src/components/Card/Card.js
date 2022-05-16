import React from "react";
import { v4 as uuid } from "uuid";
import "./Card.css";

export default function Card({
  imgUrl,
  badge,
  title,
  date,
  lesson,
  minutes,
  categories,
}) {
  return (
    <>
      <div className="card-container">
        <div className="card-badge">
          <div className={`card-badge-status ${badge}`}></div>
          {badge}
        </div>
        <div className="card-image-container">
          <img className="card-image" src={imgUrl} alt="card" />
        </div>
        <div className="card-details-container">
          <div className="card-details-header">
            <h1 className="card-heading">{title}</h1>
            <p className="card-date">Last updated: {date}</p>
          </div>
          <div className="card-info">
            <p className="card-info-item">
              <span>
                <i className="fa-solid fa-book"></i>
              </span>
              Lesson: {lesson}
            </p>
            <p className="card-info-item">
              <span>
                <i className="fa-solid fa-clock"></i>
              </span>
              Minutes: {minutes}
            </p>
          </div>
          <div className="category">
            {categories.split(",").map((category) => (
              <div key={uuid()} className="category-item">
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
