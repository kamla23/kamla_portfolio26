import React from 'react';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      institute: "NavGurukul",
      degree: "Software Engineering (MERN Stack)",
      duration: "2023 - Present",
      description: "Focusing on Full-Stack Development, Data Structures, and building real-world applications in an intensive residential program.",
      grade: "Active Learner"
    },
   {
      institute: "Vijay Bhushan Singh Deo Girls College, Jashpur Nagar (Surguja University)",
      degree: "B.Sc (Mathematics)",
      duration: "2023 - Present",
      description: "Studying core mathematical concepts including Algebra, Calculus, Geometry, Statistics, and Applied Mathematics.",
      grade: "Pursuing"
    },
    {
      institute: "Government Higher Secondary School, Charaidand",
      degree: "12th Grade (Higher Secondary)",
      duration: "2019 - 2021",
      description: "Completed Higher Secondary with a strong focus on Mathematics and Science subjects.",
      grade: "Completed"
    },
    {
      institute: "Government High School, Patratoli",
      degree: "10th Grade (High School)",
      duration: "2017 -2019",
      description: "Completed Secondary Education with good academic performance and a strong interest in Mathematics.",
      grade: "Completed"
    }
  
  
  ];

  return (
    <section id="education" className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        

        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Education</h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-purple-500 to-transparent"></div>
        </div>

        <div className="relative border-l-2 border-blue-500/30 ml-4 md:ml-10">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-12 ml-8 relative">
              
        
              <div className="absolute -left-[41px] top-0 bg-blue-600 p-2 rounded-full border-4 border-[#0f172a] shadow-lg shadow-blue-500/20">
                <FaGraduationCap size={16} />
              </div>


              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {edu.institute}
                    </h3>
                    <p className="text-blue-500 font-medium">{edu.degree}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 md:mt-0">
                    <FaCalendarAlt className="text-blue-500" />
                    <span>{edu.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed max-w-3xl">
                  {edu.description}
                </p>
                
                {index === 0 && (
                  <span className="inline-block mt-4 px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                    Currently Enrolled
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;