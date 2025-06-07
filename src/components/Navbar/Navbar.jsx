// import React from "react";
// import { Link } from "react-router-dom";
// import lo from "../../assets/bg.png";

// const Navbar = () => {
//   return (
//     <>
//       <nav
//         data-aos="fade-down"
//         className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
//       >
//         <div className="container">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-4 text-white font-bold text-2xl">
//               <img src={lo} alt="" className="w-20" />
//               {/* <span>Virti</span> */}
//             </div>
//             <div className="text-white hidden sm:block">
//               <ul className="flex items-center gap-6 text-xl py-4 ">
//                 <li>
//                   <a href="#education">Education</a>
//                 </li>
//                 <li>
//                   <a href="#about">About</a>
//                 </li>
//                 <li>
//                   <a href="#skills">Skills</a>
//                 </li>
//                 <li>
//                   <a href="#experience">Experience</a>
//                 </li>
//                 <li>
//                   <a href="#projects">Projects</a>
//                 </li>
//                 <li>
//                   <a href="#connect">Connect</a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <button className="text-white border-2 border-white px-3 py-1 rounded-md">
//                 <a href="/Virti.pdf" download>
//                   Resume
//                 </a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import lo from "../../assets/bg.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-3"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-4 text-white font-bold text-xl sm:text-2xl">
              <img src={lo} alt="Logo" className="w-14 sm:w-20" />
            </div>

            {/* Desktop & Tablet Menu */}
            <div className="hidden sm:flex items-center gap-2 md:gap-4 lg:gap-6 text-white text-sm md:text-base lg:text-lg">
              <ul className="flex items-center gap-2 md:gap-4 lg:gap-6">
                <li>
                  <a href="#education">Education</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#connect">Connect</a>
                </li>
              </ul>
            </div>

            {/* Resume button - always visible */}
            <div className="ml-2">
              <button className="text-white border-2 border-white px-2 py-1 text-xs sm:text-sm md:text-base rounded-md">
                <a href="/Virti.pdf" download>
                  Resume
                </a>
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="sm:hidden text-white text-3xl cursor-pointer ml-4" onClick={toggleMenu}>
              {isOpen ? <FiX /> : <FiMenu />}
            </div>
          </div>

          {/* Mobile Menu */}
        {isOpen && (
  <div className="absolute top-[64px] left-0 w-full bg-black/50 backdrop-blur-md text-white px-6 py-4 space-y-4 z-50">
    <ul className="flex flex-col gap-4 text-base">
      <li>
        <a href="#education" onClick={toggleMenu}>Education</a>
      </li>
      <li>
        <a href="#about" onClick={toggleMenu}>About</a>
      </li>
      <li>
        <a href="#skills" onClick={toggleMenu}>Skills</a>
      </li>
      <li>
        <a href="#experience" onClick={toggleMenu}>Experience</a>
      </li>
      <li>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
      </li>
      <li>
        <a href="#connect" onClick={toggleMenu}>Connect</a>
      </li>
    </ul>
  </div>
)}

        </div>
      </nav>
    </>
  );
};

export default Navbar;
