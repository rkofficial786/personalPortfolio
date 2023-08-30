import React from "react";
import p1 from "../Assets/projects/Screenshot_272.png";
import p2 from "../Assets/projects/Screenshot_273.png";
import p3 from "../Assets/projects/Screenshot_274.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HighLightText from "./HighLightText";

const Projects = () => {
  const { isDarkMode } = useSelector((state) => state.darkmode);
  const Projects = [
    {
      id: 1,
      title: "Ed-tech Mern Stack Platform : Codemy",
      img: p1,
      description:
        "An comprehensive educational Web-app for students and instructors ",
      technologies: "React| Node | Express | MongoDb | Redux",
      link: "https://codemy.onrender.com/",
      github: "https://github.com/rkofficial786?tab=repositories",
    },
    {
      id: 2,
      title: "An online cake delivery app : CakeDash",
      img: p2,
      description:
        "This Online Cake Order App aims to streamline the cake ordering process, offering a user-friendly interface for customers and efficient order management for administrators.",
      technologies: "React| Node | Express | MongoDb",
      link: "https://cakedash.cyclic.app/",
      github: "https://github.com/rkofficial786/CakeDash",
    },
    {
      id: 3,
      title: "A Weather app",
      img: p3,
      description:
        "The weather which can show accurate weather report of your current city and other cities ",
      technologies: "HTML | CSS | JavaScript",
      link: "https://rkofficial786.github.io/WeatherApp/",
      github: "https://github.com/rkofficial786/WeatherApp",
    },
  ];

  return (
    <div id="portfolio" className="mt-[100px] mx-auto w-11/12 md:w-8/12">
      <h1 className="text-center text-3xl my-[20px]">
        <HighLightText text={"Projects"} />
      </h1>
      <div className="flex relative items-center justify-center gap-6  flex-wrap ">
        {/* bg-light when dark mode enabled */}
        {isDarkMode === true && (
          <div className="gradient1  absolute w-[372px] h-[260px] hidden lg:block left-[20%] right-[20%]"></div>
        )}

        {isDarkMode && (
          <div className=" gradient2  lg:hidden absolute  w-[300px] h-[200px] top-[20%] bottom-[20%]  "></div>
        )}

        {/* bg light when dark mdoe is disabled  */}

        {isDarkMode === false && (
          <div className="gradient4  absolute w-[372px] h-[260px] hidden lg:block left-[20%] right-[20%]"></div>
        )}

        {!isDarkMode && (
          <div className=" gradient5  lg:hidden absolute  w-[300px] h-[200px] top-[20%] bottom-[20%]  "></div>
        )}

        {Projects.map((project, index) => (
          <div
            className={` ${
              isDarkMode
                ? " bg-richblack-900 bg-opacity-25 backdrop-blur-2xl"
                : " shadow-lg shadow-bluyish-500"
            }    sm:w-[380px] rounded-lg flex items-center gap-4 p-4 h-[400px] justify-start flex-col `}
          >
            <div className="overflow-hidden ">
              <img
                alt=""
                className="w-[300px] hover:scale-110 mx-auto overflow-hidden object-cover rounded-lg transition-all ease-in-out duration-200"
                src={project.img}
              />
            </div>
            <p className="text-xl">{project.title}</p>
            <p className="text-richblack-300 text-center">
              {project.description}
            </p>
            <p
              className={`${
                isDarkMode ? " text-yellow-50" : " text-violet-300"
              }`}
            >
              {project.technologies}
            </p>
            <div className="flex gap-4 items-center">
              <Link to={project.github}  target="_blank">
                <button
                  className={`text-center text-[15px] py-2 px-4 font-bold rounded-md shadow-md ${
                    isDarkMode ? "bg-yellow-25 text-black" : "bg-[#6C00FF] text-white"
                  }   border-yellow-500 hover:shadow-lg hover:border-opacity-50 hover:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-200 active:ring-2 active:ring-pink-300`}
                >
                  Github
                </button>
              </Link>
              <Link to={project.link} target="_blank">
                <button
                  className={`text-center text-[15px] py-2 px-4 font-bold rounded-md ${
                    isDarkMode
                      ? "bg-richblack-800 text-white border-richblack-700 shadow-md  hover:shadow-lg hover:border-opacity-50 hover:scale-95"
                      : " border-bluyish-500 hover:bg-blue-50 border-[1px]  hover:shadow-lg hover:border-opacity-50 hover:scale-95"
                  }     transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-200 active:ring-2 active:ring-pink-300  `}
                >
                  Live Demo
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
