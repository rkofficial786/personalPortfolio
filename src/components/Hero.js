import React from "react";
import user from "../Assets/user.jpg";
import circle from "../Assets/userAsset/circle.png";
import cube from "../Assets/userAsset/cube.png";
import dots from "../Assets/userAsset/dots.png";
import plus from "../Assets/userAsset/plus.png";
import zigzag from "../Assets/userAsset/zigzags.png";
import styled, { keyframes } from "styled-components";
import { TypeAnimation } from "react-type-animation";
import { useSelector } from "react-redux";
import bg1 from "../Assets/bg/bkzxjg9fxeaiuej76vdd_9e7b388222.png";
import bg2 from "../Assets/bg/ggcp5ffn7v6vdnrrd53d_e563995c50.svg";
import bg3 from "../Assets/bg/tn1nenc6ld2pp0pxg9zm_edd5b5b405.svg";

const scaleBWAnimation = keyframes`
  0% {
    transform: scale(1);
    filter: grayscale(0%);
  }
  50% {
    transform: scale(1.2);
    filter: grayscale(100%);
  }
  100% {
    transform: scale(1);
    filter: grayscale(0%);
  }
`;

const cubeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
`;

const circleAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const zigzagAnimation = keyframes`
  0% {
    transform: translate(-10px, 10px);
  }
  50% {
    transform: translate(0);
  }
  100% {
    transform: translate(-10px, 10px);
  }
`;

const plusAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const dotsAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const AnimatedImage = styled.img`
  animation: ${scaleBWAnimation} 9s infinite;
`;

const AnimatedCube = styled.img`
  animation: ${cubeAnimation} 5s infinite;
`;

const AnimatedCircle = styled.img`
  animation: ${circleAnimation} 5s infinite;
`;

const AnimatedZigzag = styled.img`
  animation: ${zigzagAnimation} 5s infinite;
`;

const AnimatedPlus = styled.img`
  animation: ${plusAnimation} 4s infinite;
`;

const AnimatedDots = styled.img`
  animation: ${dotsAnimation} 3s infinite linear;
`;

const Hero = () => {
  const { isDarkMode } = useSelector((state) => state.darkmode);

  return (
    <div>
      <div
        id="home"
        className="flex justify-between gap-[100px] lg:w-8/12  mx-auto w-11/12 items-center   flex-col md:flex-row py-[100px] "
      >
        <div className="flex flex-col justify-center sm:w-[260px] md:w-[600px]   gap-[30px]">
          <h1 className="text-4xl flex flex-col">
            <h1> Hi, </h1>
            <span
              style={{ lineHeight: 1.5 }}
              className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold"
            >
              Rupraj Singh
            </span>{" "}
            <span className="w-fit bg-gradient-to-r from-[#4A90E2] to-[#F09819] text-[#09fbff] text-base px-2 py-1 rounded-md font-bold">
              Software Engineer at AtticBits Solutions Pvt. Ltd.
            </span>
          </h1>
          <h1 className="text-5xl flex flex-col">
            <h1> I am a </h1>
            <span
              className={`text-[45px] ${
                isDarkMode ? "text-[#09fbff]" : "text-violet-400"
              }    font-bold `}
            >
              {" "}
              <TypeAnimation
                sequence={[
                  "Mern Stack Developer",
                  "NextJs Developer",
                  "React Native Developer",
                  9000,
                  "",
                ]}
                repeat={Infinity}
                style={{
                  whiteSpace: "pre-line",
                  display: "inline-block",
                }}
                //  omitDeletionAnimation={true}
              />
            </span>{" "}
          </h1>
          <p className="md:w-[400px] sm:w-[280px]">
            As a dedicated MERN stack developer, I am passionate about crafting
            innovative and efficient web applications that harness the power of
            modern technologies. With a strong foundation in both frontend and
            backend development, I have honed my skills to deliver seamless user
            experiences and robust functionality.
          </p>
          <a href="#contact">
            {" "}
            <button class="hover-button text-xl">Hire Me</button>
          </a>
        </div>

        <div className=" md:w-auto w-[240px]">
          <div className="relative">
            <AnimatedImage
              src={user}
              className="p-5  sm:w-[300px] border-2"
              alt=""
            />

            <div className="absolute -top-10 -left-10">
              <AnimatedZigzag src={zigzag} alt="" />
            </div>
            <div className="absolute -bottom-10 -left-10">
              <AnimatedCircle src={circle} alt="" />
            </div>
            <div className="absolute -top-10 -right-10">
              <AnimatedCube src={cube} alt="" />
            </div>
            <div className="absolute -top-10 right-[50%]">
              <AnimatedPlus src={plus} alt="" />
            </div>
            <div className="absolute -bottom-10 -right-10">
              <AnimatedDots src={dots} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
