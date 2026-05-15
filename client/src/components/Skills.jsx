import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaGithub, 
  FaDatabase 
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skillData = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "SQL", icon: <FaDatabase className="text-blue-300" /> },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            These are the technologies I've been working with and constantly improving upon.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillData.map((skill, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50 hover:-translate-y-2 shadow-xl"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <h3 className="text-white font-medium tracking-wide">{skill.name}</h3>
              
              <div className="absolute inset-0 bg-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default Skills;