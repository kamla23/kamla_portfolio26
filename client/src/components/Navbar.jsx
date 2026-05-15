// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//       scrolled ? 'bg-[#0f172a]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
//     }`}>
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

//         <div className="text-2xl font-bold text-white tracking-tighter">
//           Port<span className="text-blue-500">folio</span>
//         </div>

//         <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
//           <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
//           <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
//           <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
//           <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
//           <a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a>
//           <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>

//           <Link
//             to="/login"
//             className="ml-4 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
//           >
//             Login
//           </Link>
//         </div>

//         <div className="md:hidden text-white cursor-pointer">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-[100] bg-[#0f172a]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-white uppercase tracking-wider">
            Port<span className="text-blue-500">folio</span>
          </div>

          {/* Desktop Menu (Badi screen par dikhega) */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <Link
              to="/login"
              className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
            >
              Login
            </Link>
          </div>


          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

     
      <div
        className={`md:hidden absolute w-full bg-[#0f172a] border-b border-white/10 transition-all duration-300 ease-in-out ${
          isOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 text-center">
          <a
            href="#home"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white py-2 border-b border-white/5"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white py-2 border-b border-white/5"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white py-2 border-b border-white/5"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white py-2 border-b border-white/5"
          >
            Projects
          </a>
          <a
            href="#education"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white py-2 border-b border-white/5"
          >
            Education
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white py-2 border-b border-white/5"
          >
            Contact
          </a>
          <Link
            to="/login"
            onClick={toggleMenu}
            className="py-3 bg-blue-600 text-white rounded-xl"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
