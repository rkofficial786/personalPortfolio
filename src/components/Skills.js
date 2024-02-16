import React from "react";

import { AiFillHtml5 } from "react-icons/ai";
import { BiSolidFileCss } from "react-icons/bi";
import { TbBrandReactNative, TbBrandTailwind } from "react-icons/tb";
import { BiLogoJavascript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMui, SiNextdotjs, SiTypescript } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import HighLightText from "./HighLightText";
import { useSelector } from "react-redux";
const Skills = () => {
  const { isDarkMode } = useSelector((state) => state.darkmode);
  return (
    <div id="experience" className="  w-11/12 lg:w-5/12 mx-auto mt-[100px]">
      <div
        className={`hover:shadow-inner shadow-md shadow-blue-300 hover:shadow-blue-300 group relative backdrop-blur-lg ${
          isDarkMode ? "bg-richblue-400" : "bg-richblack-200 bg-opacity-10"
        }  hover:bg-opacity-20 transition-all ease-in-out duration-500 group rounded-2xl bg-opacity-40 py-[30px] `}
      >
        <div className=" hidden lg:block gradient3 top-6 -left-[0%] absolute transition-all ease-in-out duration-500 group-hover: group-hover:translate-x-[100%]"></div>

        <div className=" lg:hidden gradient3 absolute"></div>

        <p className="text-center mb-8 text-3xl">
          <HighLightText text={"Mern Stack Web Development"} />
        </p>

        <div className="flex items-center text-xl group-hover:text-2xl transition-all ease-in-out duration-200 justify-evenly">
          <div className=" flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <AiFillHtml5 className="text-pink-300" />
              <p>HTML</p>
            </div>
            <div className="flex items-center gap-2">
              <BiSolidFileCss className="text-richblue-500" />
              <p>CSS</p>
            </div>
            <div className="flex items-center gap-2">
              <TbBrandTailwind className="text-red-300" />
              <p>Tailwind</p>
            </div>
            <div className="flex items-center gap-2">
              <BiLogoJavascript className="text-yellow-100" />
              <p>Javascript</p>
            </div>
            <div className="flex items-center gap-2">
              <SiTypescript className="text-blue-200" />
              <p>TypeScript</p>
            </div>
            <div className="flex items-center gap-2">
              <SiMui className="text-blue-200" />
              <p>MaterialsUi</p>
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FaNodeJs className="text-caribbeangreen-400" />
              <p>NodeJs</p>
            </div>
            <div className="flex items-center gap-2">
              <SiExpress className="text-pure-greys-700" />
              <p>ExpressJs</p>
            </div>
            <div className="flex items-center gap-2">
              <BiLogoMongodb className="text-caribbeangreen-400" />
              <p>MongoDB</p>
            </div>
            <div className="flex items-center gap-2">
              <FaReact className="text-bluyish-200" />
              <p>ReactJs</p>
            </div>
            <div className="flex items-center gap-2">
              <SiNextdotjs className="text-black" />
              <p>NextJs</p>
            </div>
            <div className="flex items-center gap-2">
              <TbBrandReactNative className="text-bluyish-200" />
              <p>React Native</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
