import React from "react";
import HighLightText from "./HighLightText";
import { useSelector } from "react-redux";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Contact = () => {
  const { isDarkMode } = useSelector((state) => state.darkmode);
  return (
    <div id="contact" className="">
      <section class="text-customWhite body-font relative pb-[200px]">
        <form
          className="text-customWhite body-font relative "
          action="https://formspree.io/f/xvondvze"
          method="POST"
        >
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="text-[30px]">
                <HighLightText text={"Contact"} />
              </h1>
              <p class="lg:w-2/3 text-2xl mx-auto leading-relaxed ">
                Questions ? Thoughts ? or just want to say hello ?
              </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap md:flex-row sm:flex-col -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative flex flex-col">
                    <label
                      for="name"
                      class="leading-7 text-sm text-customWhite"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="username"
                      autoComplete="off"
                      required
                      className={` ${
                        isDarkMode
                          ? "form-style"
                          : "sm:w-[200px] md:w-full bg-transparent rounded border-b border-b-gray-100  focus:border-indigo-500 text-bluyish-400  outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      }`}
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative flex flex-col">
                    <label for="email" class="leading-7 text-sm ">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      required
                      className={` ${
                        isDarkMode
                          ? "form-style"
                          : "sm:w-[200px] md:w-full bg-transparent rounded border-b border-b-gray-100  focus:border-indigo-500 text-bluyish-400 outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      }`}
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative flex flex-col">
                    <label
                      for="message"
                      class="leading-7 text-sm text-customWhite"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={` ${
                        isDarkMode
                          ? "form-style"
                          : "sm:w-[200px] md:w-full bg-transparent rounded border-b border-b-gray-100  focus:border-indigo-500 text-bluyish-400  outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      }`}
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button type="submit" className=" hover-button ">
                    Send
                  </button>
                </div>
                <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a
                    href="mailto:rkofficial1234500@gmail.com"
                    class="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold"
                  >
                    rkofficial1234500@gmail.com
                  </a>
                  <p class="leading-normal my-5">
                    Shaitan gali, khatra mahal, andher nagar, shamshan ke samne
                  </p>
                  {/* <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-4 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-4 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a class="ml-4 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span> */}
                  <span className="justify-center flex items-center gap-3">
                    <Link to={"https://www.instagram.com/rkofficial165/"}>
                      {" "}
                      <AiOutlineInstagram className="text-2xl hover:text-pink-200 hover:scale-125 transition-all ease-in-out duration-200" />
                    </Link>
                    <Link to={"https://www.linkedin.com/in/rupraj-singh/"}>
                      {" "}
                      <AiOutlineLinkedin  className="text-2xl hover:text-bluyish-400 hover:scale-125 transition-all ease-in-out duration-200" />
                    </Link>
                    <Link to={"https://github.com/rkofficial786"}>
                      {" "}
                      <AiOutlineGithub  className="text-2xl hover:text-black hover:scale-125 transition-all ease-in-out duration-200" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
