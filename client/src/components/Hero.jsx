// import React from 'react';
import { useNavigate } from "react-router-dom";
import myProfilePic from "../assets/p.jpeg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0f172a] relative overflow-hidden pt-20"
    >

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="text-center md:text-left">
          <h4 className="text-blue-500 font-mono text-lg mb-4">
            Hello, my name is
          </h4>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
            Kamla{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Fuleshri
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-6">
            And I am a Web Development Student
          </h2>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
            I'm a passionate{" "}
            <span className="text-white">MERN Stack Developer</span> currently
            learning and building modern web applications at NavGurukul. I love
            turning complex problems into simple, beautiful designs.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">

            <a
              href="/kamlaResume.pdf" 
              download="kamlaResume.pdf" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2"
            >
              Download Resume
            </a>

            <button
              onClick={() => navigate("/signup")}
              className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all"
            >
              Join Community
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative group">
         
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <img
              src={myProfilePic}
              alt="Kamla Fuleshri"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
