// Experience.js

import React from "react";
import ExperienceCard from "./CardE";
import HighLightText from "./HighLightText";
import { experienceData } from "./expdata";
import { useSelector } from "react-redux";
import ExperienceCard2 from "./CardLight";

const Experience = () => {
  const { isDarkMode } = useSelector((state) => state.darkmode);

  return (
    <div className="mt-20">
      <h2 className="text-center text-[30px] mb-10">
        <HighLightText text={"My Experience"} />
      </h2>
      <div className="flex justify-center items-center  gap-10 flex-wrap">
        {experienceData.map((experience, index) => (
          <div>
            {isDarkMode ? (
              <ExperienceCard key={index} {...experience} />
            ) : (
              <ExperienceCard2  key={index} {...experience}/>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
