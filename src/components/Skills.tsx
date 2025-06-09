import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Zap, Settings, Battery, Cpu, LineChart, Wrench } from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Power Systems',
      skills: ['Electrical System Design (Solar, Wind, Hybrid)', 'Battery Storage & Backup Systems', 'Energy Efficiency Consulting']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Automation',
      skills: ['Smart Home Automation & IoT Integration', 'SCADA, PLC Programming', 'Industrial Automation']
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Software Tools',
      skills: ['AutoCAD Electrical', 'MATLAB/Simulink', 'Digsilent', 'ETAP', 'PSS/E']
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Engineering',
      skills: ['Circuit Design & Troubleshooting', 'Project Management', 'Technical Client Consultation']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'animate-fade-in-up animate-visible' : ''
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Core <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${
                  inView ? `animate-fade-in-up animate-delay-${(index + 1) * 100}` : ''
                }`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-slate-600 flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;