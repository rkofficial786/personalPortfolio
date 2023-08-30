import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import HighLightText from "./HighLightText";
import { useSelector } from "react-redux";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: "",
      name: "Nəsibəli YUSIBOV",
      role: "Cyber Security Engineer ",
      test: "As a developer and a problem solver, I think Rasif is a great collaborative partner to have. I met Rasif in some basic javascript & react projects and since then he has drastically progressed in him understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.",
    },
    {
      id: 2,
      link: "",
      name: "Raul Omarov",
      role: "Technical Support Engineer ",
      test: "It was a pleasure collaborating with Rasif on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens him knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      link: "",
      name: "Ağası Xəlilov",
      role: "Full Stack Developer",
      test: "I worked with Rasif in the same team and him communication skills are very strong. Him programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he's a good team worker, but also because he has very good skills and I know he has much more potential to be shown.",
    },
    {
      id: 4,
      link: "",
      name: "Javid Aliyev",
      role: "Full-Stack Web Developer",
      test: "I mentored Rasif some months ago, and I can say that he is one of those people that you love to work with. He was always interested in what I was trying to teach him, paying attention and always asking questions if something was not clear. When it comes to professional skills, he is really committed to work, always doing him best and going beyond the requirements of the project he's building.",
    },
    {
      id: 5,
      link: "",
      name: "Elshad Bashirov",
      role: "Software Developer",
      test: "Throughout all our collaborations, Rasif has always conducted herself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. He's not only someone I highly recommend but is also someone I greatly respect.",
    },
  ];

  const {isDarkMode} =useSelector((state)=>state.darkmode)
  return (
    <section id="testmonials" className="mt-[100px] mx-auto w-11/12 lg:w-6/12" >
      
      <h2 className="text-center text-[30px]"><HighLightText text={"Testimonials"}/></h2>

      <div className=" mt-[60px] ">
        {testimonials?.length ? (
          <div className={`${isDarkMode?"bg-richblack-600 shadow-inner shadow-blue-200 ":" shadow-lg shadow-violet-5"} rounded-xl bg-opacity-40 relative p-4 w-full`}>
            <div className="absolute text-sm">Dummy</div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              freeMode={true}
              // loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              modules={[FreeMode, Pagination, Autoplay, Navigation]}
              breakpoints={{
                // 1900: { slidesPerView: 3 },
                // 900: { slidesPerView: 2 },
                // 1400: { slidesPerView: 3 },
              }}
              className=" flex items-center justify-center mx-auto"
            >
              {testimonials?.map((testi, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="mySwiper flex items-center justify-center"
                  >
                    <div className="flex flex-col  items-center justify-center gap-5">
                      <Link to={testi.link}>
                        <AiFillLinkedin className="text-[50px] text-blue-300 hover:text-white"/>
                      </Link>
                      <div className="flex items-center font-semibold justify-center gap-2">
                        <p className="font-semibold">{testi.name}</p>
                        <p>|</p>
                        <p  className="font-semibold">{testi.role}</p>
                      </div>
                      <p className={`text-center ${isDarkMode?"text-richblack-50":" text-richblack-600"} `}>{testi.test}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : (
          <p className="text-center">No Reviews Found</p>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
