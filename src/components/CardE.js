// ExperienceCard.js

import React from "react";

const ExperienceCard = ({
  title,
  badge,
  duration,
  servings,
  company,
  projectName,
  description,
}) => {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <h1 className="text-center">
              <h2 className="text-xl">{company}</h2>
              <p>{projectName}</p>
            </h1>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>

          <div className="front-content">
            <small className="badge">{badge}</small>
            <div className="description">
              <p className="text-[#0ee4f3] text-2xl">{company}</p>
              <p className="title">
                <strong>{description}</strong>
              </p>
            </div>
            <div className="description">
              <div className="title">
                <p className="title tt">
                  <strong>{title}</strong>
                </p>
              </div>
              <p className="card-footer">
                {duration} &nbsp; | &nbsp; {servings}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
