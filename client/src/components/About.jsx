import React from 'react';
import myAboutPic from '../assets/port3.jpeg'; 

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="flex justify-center relative order-2 md:order-1">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            
            <img 
              src={myAboutPic} 
              alt="About Kamla" 
              className="relative w-64 h-64 md:w-80 md:h-[450px] object-cover rounded-xl border-4 border-white/10 shadow-2xl z-10"
            />
            
            <div className="absolute -bottom-4 -right-4 bg-blue-600 p-4 rounded-xl shadow-xl z-20 hidden md:block"> 
               <p className="text-sm font-bold">MERN Stack</p>
               <p className="text-xs text-blue-100">Student & Dev</p>
            </div>
          </div>
        </div>

      
        <div className="order-1 md:order-2">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Hello! I am <span className="text-white font-semibold">Kamla Fuleshri</span>. My coding journey began at NavGurukul, where I first discovered my passion for technology and software development.
            </p>
            <p>
              As a dedicated <span className="text-blue-400 font-medium">Web Development Student</span>, I am always eager to learn new technologies and apply them to solve real-world problems through my projects.
            </p>
            <p>
              My goal isn't just to write code, but to build digital solutions that make people's lives easier and more efficient. Currently, I am deeply focused on mastering <span className="text-white underline decoration-blue-500 underline-offset-4">React and Node.js</span>.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-white font-mono mb-4">My primary areas of focus:</p>
            <div className="grid grid-cols-2 gap-3">
              {["Frontend (React)", "Backend (Node)", "Database (MongoDB)", "UI/UX Design"].map((item) => (
                <div key={item} className="flex items-center gap-2 group">
                  <span className="text-blue-500 group-hover:translate-x-1 transition-transform">▹</span>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;