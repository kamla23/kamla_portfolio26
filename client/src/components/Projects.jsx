import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  
  const projectData = [
    {
      title: "E-Commerce Web App",
      description: "A full-stack MERN application with user authentication, product management, and stripe payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      github: "https://github.com/yourusername",
      live: "https://your-live-site.com",
      image: "https://via.placeholder.com/600x400" 
    },
    {
      title: "Social Media Dashboard",
      description: "Interactive dashboard featuring real-time data visualization using Chart.js and API integration.",
      tech: ["React", "Chart.js", "Firebase"],
      github: "https://github.com/yourusername",
      live: "https://your-live-site.com",
      image: "https://via.placeholder.com/600x400"
    },
    {
      title: "Portfolio Website",
      description: "A professional portfolio built to showcase development skills and project experience.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername",
      live: "https://your-live-site.com",
      image: "https://via.placeholder.com/600x400"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
   
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">My Projects</h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
              

              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-[#0f172a] rounded-full hover:text-blue-400">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="p-3 bg-[#0f172a] rounded-full hover:text-blue-400">
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;