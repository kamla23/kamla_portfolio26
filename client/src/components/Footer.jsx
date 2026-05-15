import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaArrowUp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0b1120] border-t border-white/5 pt-16 pb-8 text-white relative">
      
      {/* Scroll to Top Button with Pulse Effect */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 p-3 rounded-full shadow-lg shadow-blue-500/40 hover:bg-blue-700 transition-all group animate-bounce"
        title="Scroll to Top"
      >
        <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          
          {/* 1. Brand & Bio */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter">
              KAMLA<span className="text-blue-500">Fuleshri</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              MERN Stack Developer passionate about building seamless user experiences and robust backend systems. Let's build the future together.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
               {/* Social Icons with subtle tooltips */}
               <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
               <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors"><FaLinkedin size={20} /></a>
               <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors"><FaInstagram size={20} /></a>
            </div>
          </div>

          {/* 2. Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Explore</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* 3. Contact Info Fast Access */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="text-blue-500" />
                <span>kamlabai23@navgurukul.org</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FaPhoneAlt className="text-blue-500" />
                <span>+91 XXXXX XXXXX</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[11px] uppercase tracking-widest font-medium">
          <p>© {new Date().getFullYear()} Kamla Fuleshri. Built with Persistence.</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-default">React.js</span>
            <span className="hover:text-white transition-colors cursor-default">Tailwind CSS</span>
            <span className="hover:text-white transition-colors cursor-default">Node.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;