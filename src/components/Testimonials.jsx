import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import HighLightText from "./HighLightText";
import { useSelector } from "react-redux";

const Testimonials = () => {
  const experiences = [
    {
      id: 1,
      company: "AtticBits Solutions Pvt. Ltd.",
      role: "Software Engineer",
      duration: "Sept 2023 - Present",
      achievements: [
        "Developed and maintained various projects using modern web technologies.",
        "Implemented WebSocket functionality for a resume processing system in a Next.js project.",
        "Created an end-to-end booking website with features like hotel bookings, tours, ticketing, and an admin panel using React.",
        "Developed an asset management app using React Native for efficient inventory tracking.",
        "Built an admin panel using React to manage API services and update various content details.",
      ],
      link: "https://www.linkedin.com/company/atticbits/posts/?feedView=all",
    },
    {
      id: 2,
      company: "PwSkills",
      role: "Full Stack Developer Intern",
      duration: "June - July 2023",
      achievements: [
        "Developed a full-fledged online cake order app using MERN stack, incorporating responsive design principles for optimal user experience across devices.",
        "Implemented advanced features including real-time product browsing, intelligent search algorithms, multi-parameter filtering, and a robust cart management system.",
        "Engineered a secure checkout process with  payment gateway integrations, ensuring safe transactions for customers.",
        "Created a comprehensive admin panel for efficient product management, real-time order tracking, and detailed analytics reporting.",
      ],
      link: "https://pwskills.com/",
      icon: AiFillLinkedin,
    },
    {
      id: 3,
      company: "Freelance Projects",
      role: "Full Stack Developer",
      duration: "2022 - Present",
      achievements: [
        "Developed custom web applications for diverse clients using React, Node.js, and NextJs, focusing on scalable and maintainable code architecture.",
        "Created responsive and user-friendly interfaces for e-commerce platforms, implementing advanced UI/UX design principles to enhance customer engagement and conversion rates.",
        "Engineered and integrated secure payment gateways and third-party APIs, ensuring seamless functionality and data synchronization across various services.",
        "Implemented robust testing strategies including unit tests and end-to-end testing to ensure high-quality, bug-free",
      ],
      link: "https://github.com/rkofficial786",
      icon: AiFillGithub,
    },
  ];

  const { isDarkMode } = useSelector((state) => state.darkmode);

  const getIconColor = (company) => {
    if (company === "AtticBits Solutions Pvt. Ltd." || company === "PwSkills") {
      return isDarkMode
        ? "text-blue-300 hover:text-blue-200"
        : "text-blue-600 hover:text-blue-500";
    } else {
      return isDarkMode
        ? "text-gray-300 hover:text-gray-200"
        : "text-gray-700 hover:text-gray-600";
    }
  };

  return (
    <section id="experiences" className="mt-[100px] mx-auto w-11/12 lg:w-6/12">
      <h2 className="text-center text-[30px]">
        <HighLightText text={"Professional Experience"} />
      </h2>

      <div className="mt-[60px]">
        {experiences?.length ? (
          <div
            className={`${
              isDarkMode
                ? "bg-richblack-600 shadow-inner shadow-blue-200"
                : "shadow-lg shadow-violet-5"
            } rounded-xl bg-opacity-40 relative p-4 w-full`}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              // freeMode={true}
              // autoplay={{
              //   delay: 5000,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination, Autoplay, Navigation]}
              className="flex items-center justify-center mx-auto"
            >
              {experiences?.map((exp, index) => {
                return (
                  <SwiperSlide key={index} className="mySwiper">
                    <div
                      className={`
                    flex flex-col items-start justify-center gap-8 p-10 rounded-2xl
                    ${
                      isDarkMode
                        ? "bg-gradient-to-br  text-blue-50 backdrop-blur-sm"
                        : "bg-gradient-to-br from-white to-gray-100 text-richblack-900"
                    }
                    transition-all duration-300 hover:scale-[1.02] 
                  `}
                    >
                      <div className="relative w-full">
                        <h3 className="text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                          {exp.company}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg">
                          <p className="font-semibold italic">{exp.role}</p>
                          <p className="hidden sm:block text-blue-500">•</p>
                          <p
                            className={`${
                              isDarkMode ? "text-gray-400" : "text-gray-600"
                            } font-light`}
                          >
                            {exp.duration}
                          </p>
                        </div>
                        <Link
                          to={exp.link}
                          className="absolute top-0 right-0 transition-transform duration-300 hover:scale-110"
                        >
                          {exp.company === "AtticBits Solutions Pvt. Ltd." ||
                          exp.company === "PwSkills" ? (
                            <AiFillLinkedin
                              className={`text-5xl ${getIconColor(
                                exp.company
                              )}`}
                            />
                          ) : (
                            <AiFillGithub
                              className={`text-5xl ${getIconColor(
                                exp.company
                              )}`}
                            />
                          )}
                        </Link>
                      </div>
                      <ul
                        className={`space-y-4 ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start group">
                            <span className="inline-block w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full group-hover:scale-150 transition-all duration-300"></span>
                            <p className="flex-1 leading-relaxed group-hover:translate-x-1 transition-all duration-300">
                              {achievement}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : (
          <p className="text-center">No Experience Found</p>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
