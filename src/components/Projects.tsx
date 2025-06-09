import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Kinetic Energy Harvesting for STEM Learning Environments',
      description: 'Designed and built a manually powered electricity generation system using a flywheel and DC generator assembly.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: [
        'Developed rectifier-based energy conversion with onboard battery storage to power classroom devices',
        'Enabled real-time voltage visualization and load response demonstrations',
        'Served as an interactive teaching module for kinetic-to-electrical conversion and microgrid simulation',
        'Delivered hands-on STEM engagement in renewable energy education',
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'IoT-Integrated Water Resource Management System',
      description: 'Designed and deployed an ESP32-based tank level monitoring system with real-time data visualization and automation.',
      image: '',
      highlights: [
        'Utilized ultrasonic sensing and IoT dashboard (Blynk) for remote level detection and threshold alerting',
        'Implemented relay-based motor control with logic-driven ON/OFF operations for optimized irrigation cycles',
        'Improved operational efficiency by 40% and reduced water wastage',
        'Demonstrated practical integration of sensor networks, control logic, and user-facing interfaces',
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Offline Smart Automation System for Rural Electrification',
      description: 'Developed a low-cost, Bluetooth-enabled automation system for offline appliance control in underserved areas.',
      image: 'https://images.pexels.com/photos/3862138/pexels-photo-3862138.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: [
        'Engineered a microcontroller-based relay interface using Arduino and HC-05 modules for safe AC switching',
        'Built a custom Android application via MIT App Inventor to control lighting, fans, and sockets',
        'Enabled 100% offline functionality with visual feedback via LED indicators',
        'Designed for energy-conscious environments with limited connectivity',
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Standalone Battery Energy Storage for Residential Load Continuity',
      description: 'Designed and installed a 1.2 kWh battery backup system to support critical household loads.',
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: [
        'Performed load analysis and configured lead-acid batteries with a pure sine wave inverter',
        'Integrated automated switchover and runtime optimization logic',
        'Delivered safety-compliant system documentation with lifecycle planning and maintenance guidelines',
        'Deployed for practical resilience in low-grid reliability scenarios',
      ],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Targeted Energy Audit and Retrofit Recommendations',
      description: 'Delivered energy performance assessments and ROI-driven efficiency upgrades for residential and SME clients.',
      image: 'https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: [
        'Identified high-load sources and behavioral inefficiencies through on-site audits',
        'Recommended technical interventions: LED retrofitting, appliance scheduling, automation, and power factor correction',
        'Provided tailored Energy Audit Reports with investment timelines and savings forecasts',
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Electrical Infrastructure Design for Energy-Efficient Residential Architecture',
      description: 'Delivered full-scale electrical design for a new residential building, optimized for performance, safety, and future-ready integrations.',
      image: 'https://images.pexels.com/photos/256090/pexels-photo-256090.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: [
        'Conducted demand estimation and designed distribution circuits, appliance load segregation, and protection systems',
        'Drafted AutoCAD-based electrical layout with optimized junction box, DB, and earthing placements per IS 732 standards',
        'Integrated provisions for rooftop solar inverter, EV charging interface, and smart automation modules',
        'Delivered comprehensive documentation including load sheets, single-line diagrams, and circuit schedules',
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Adaptive Energy System Integration – Grid, Solar, and Backup Hybridization',
      description: 'Engineered a bespoke energy solution combining grid input, solar PV, and battery backup with intelligent load management.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: [
        'Performed usage profiling and designed protection topology using MCBs, RCCBs, and surge devices',
        'Sized battery bank for 6-hour runtime at optimal depth-of-discharge with future scalability considerations',
        'Integrated automatic transfer switch and prioritized load control based on criticality',
        'Delivered full technical documentation and system roadmap for client expansion',
      ],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Solar Project Pre-Implementation Study for Residential and Agri Applications',
      description: 'Conducted technical site evaluations and feasibility analysis to guide solar energy system design.',
      image: 'https://images.pexels.com/photos/9229394/pexels-photo-9229394.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: [
        'Assessed load demand, rooftop orientation, shading patterns, and grid interconnectivity',
        'Generated system design reports with energy generation forecasts, inverter specifications, and panel layout proposals',
        'Improved design precision by 15% via tilt-angle optimization and performance factor adjustments',
        'Delivered stakeholder reports with risk assessment, ROI forecast, and visual schematics',
      ],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Distributed Hybrid Power System for Educational Institution – Off-Grid Design',
      description: 'Designed and implemented a 5kW hybrid energy system integrating solar PV and wind microturbines to support a rural school’s operations.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: [
        'Conducted load assessment and seasonal energy pattern simulation to determine optimal system sizing',
        'Integrated hybrid inverter with intelligent charge controller and battery bank for round-the-clock power reliability',
        'Achieved >85% uptime improvement compared to legacy diesel system',
        'Enabled real-time monitoring and maintenance alerting for minimal operational overhead',
      ],
      color: 'from-pink-500 to-pink-600'
    },
  ];
  

  
    return (
      <section
        ref={ref}
        className="py-12 px-6 bg-gray-50"
        id="projects"
      >
        <div className="container px-6  mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <article
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500
                  ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Accent colored left border */}
                {/* <div
                  className={`h-full w-2 rounded-l-xl bg-gradient-to-br ${project.color} absolute left-0 top-0 bottom-0`}
                ></div> */}
  
                <div className="relative ">
                  <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover  rounded-sm"
                  />
                  <div className="absolute inset-0 bg-${project.color} absolute left-0 top-0 bottom-0 opacity-80 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                  <h3 className="text-xl  font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700  mb-4">{project.description}</p>
                  <ul className="list-disc  list-inside text-gray-600 text-sm space-y-1 mb-6 max-h-36 ">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                  </div>
  
                  {/* Placeholder for links - Uncomment and customize */}
                  {/* <div className="flex space-x-5 text-gray-700">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 hover:text-blue-600 transition"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 hover:text-blue-600 transition"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Projects;