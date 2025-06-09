import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Trophy, Rocket } from 'lucide-react';


const Founder = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="founder" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'animate-fade-in-up animate-visible' : ''
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Founder’s <span className="gradient-text">Venture</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Bachelor's Degree */}
            <div className={`bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 ${
              inView ? 'animate-fade-in-up animate-delay-200' : ''
            }`}>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Startup Experience - Infinite Energy
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">
                    Founder & Lead Engineer
                  </p>
                  <p className="text-slate-600 font-medium mb-8">Tamil Nadu, India | April 2018 – 2021</p>
                  <p className="text-slate-600 font-medium mb-6">After completing my Bachelor's in Electrical and Electronics Engineering, I founded Infinite Energy—an engineering startup offering tailored solutions in renewable energy, smart automation, and sustainable design. What began as a smart automation project in my father's construction sites evolved into a growing business, powered by technical innovation and real-world problem solving. Over three years, I independently delivered 36+ engineering projects across residential, agricultural, educational, and small commercial domains.
                  </p>

                  <p className="text-lg text-blue-600 font-semibold mb-4">
                  Vision
                  </p>
                  <p className="text-slate-600 font-medium mb-6">To empower every home, school, and small business with affordable, intelligent, and sustainable energy systems, bridging the gap between engineering innovation and community needs.
                  </p>

                  <p className="text-lg text-blue-600 font-semibold mb-4">
                  Mission
                  </p>
                  <p className="text-slate-600 font-medium mb-6">To deliver customized renewable energy and automation solutions rooted in practicality, efficiency, and impact—enabling smarter living, optimized power use, and resilient infrastructure through engineering excellence.
                  </p>

                  <div className="mt-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Core Services Offered:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">Smart Home Automation – App- and Bluetooth-based appliance control systems with offline capability—ideal for rural and low-connectivity environments.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">IoT-Based Monitoring Systems – ESP32 & Blynk-based dashboards for live water/solar/battery monitoring, including motor automation and real-time alerts.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">Renewable Energy System Design – Grid-tied, off-grid, and hybrid solar-wind setups designed for maximum yield based on location, shading, and load profiles.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">Battery Backup Systems – Sizing and deployment of inverter-battery combos with automatic switchover for uninterrupted power to essential loads.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">Energy Efficiency Consulting & AMC – Residential and SME energy audits, LED and automation retrofits, ROI analysis, and annual maintenance planning.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">Electrical Design for Construction – IS 732-compliant AutoCAD layouts with load sheets, SLDs, and provisions for EV charging, smart systems, and solar inverters.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">Site Survey & Feasibility Studies – On-ground assessments with tilt/shade analysis, solar forecasting, and technical recommendations for informed decision-making.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">36+ completed projects from consultation to commissioning
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">Manual electricity generator (flywheel + DC) built for student engagement and STEM learning</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">Projects originated from civil engineering networks, clients referred by college peers and repeat business</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700"> Incorporated as a Private Limited entity in 2020</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">Ceased operations in 2021 following COVID-19 and the loss of my father (the family’s primary financial support)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Supporting Materials:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">Full list of technical project case studies in the Featured Projects section
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">Detailed project documentation and technical proposals available upon request</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">Core services summary included in the Service Overview appendix</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;