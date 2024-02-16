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
    <div className="card2">
      <div className="content2">
        <div className="back2">
          <div className="back-content2">
            <h1 className="text-center">
              <h2 className="text-xl">{company}</h2>
              <p2>{projectName}</p2>
            </h1>
          </div>
        </div>
        <div className="front2">
          <div className="img2">
            <div className="circle2"></div>
            <div className="circle2" id="right2"></div>
            <div className="circle2" id="bottom2"></div>
          </div>

          <div className="front-content2">
            <small className="badge2">{badge}</small>
            <div className="description2">
              <p2 className="text-[#0ee4f3] text-2xl">{company}</p2>
              <p2 className="title2">
                <strong>{description}</strong>
              </p2>
            </div>
            <div className="description2">
              <div className="title2">
                <p2 className="title2">
                  <strong>{title}</strong>
                </p2>
              </div>
              <p2 className="card-footer2">
                {duration} &nbsp; | &nbsp; {servings}
              </p2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
