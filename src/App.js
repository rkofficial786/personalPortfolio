import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import Topbar from "./components/topbar/Topbar";
import { setIsDarkMode } from "./redux/darkSlice";
import { BsBrightnessHighFill } from "react-icons/bs";
import Experience from "./components/Experience";

function App() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.darkmode);

  const applyDarkMode = () => {
    const newDarkModeValue = !isDarkMode; // Toggle the value
    dispatch(setIsDarkMode(newDarkModeValue)); // Update the state
    localStorage.setItem("darkmode", newDarkModeValue); // Store the updated value in localStorage
  };

  return (
    <div
      className={`relative w-full ${
        isDarkMode
          ? "bg-gradient-to-tl  from-bluyish-300 via-bluyish-200 to-bluyish-300 text-white"
          : "bg-gradient-to-tl  from-[#2980b9] via-[#ffffff] to-[#6dd5fa] text-black"
      }`}
    >
      <button
        onClick={applyDarkMode}
        className="fixed top-[3%] lg:top-[10%] left-[10%] text-2xl z-[1000]"
      >
        {isDarkMode ? <BsBrightnessHighFill /> : <MdDarkMode />}
      </button>
      <Topbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience/>
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
