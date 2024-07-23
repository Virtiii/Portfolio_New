import React from "react";
import { Link } from "react-router-dom";
import lo from "../../assets/bg.png"

const Navbar = () => {
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={lo} alt="" className="w-20" />
              {/* <span>Virti</span> */}
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                  <a href="">Education</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Skills</a>
                </li>
                <li>
                  <a href="#">Experience</a>
                </li>
                <li>
                  {/* <Link to="/projects">Projects</Link> */}
                  Projects
                </li>
                <li>
                  <a href="#">Connect</a>
                </li>
              </ul>
            </div>
            <div>
              {/* <button className=" text-white border-2 border-white px-3 py-1 rounded-md">
                Login
              </button> */}
              <button className="text-white border-2 border-white px-3 py-1 rounded-md">
                <a href="/Virti.pdf" download>
                  Resume
                </a>
              </button>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;




