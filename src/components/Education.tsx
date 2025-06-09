import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Trophy } from 'lucide-react';

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'animate-fade-in-up animate-visible' : ''
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              <span className="gradient-text">Education</span>
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
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Bachelor of Engineering – Electrical and Electronics Engineering
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">
                    Dr. Mahalingam College of Engineering and Technology, Pollachi, India
                  </p>
                  <p className="text-slate-600 font-medium mb-6">2014 – 2018</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-blue-100">
                      <Award className="w-5 h-5 text-blue-500" />
                      <span className="text-slate-700">100% Merit-based Scholarship</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-blue-100">
                      <Trophy className="w-5 h-5 text-blue-500" />
                      <span className="text-slate-700">Washington Accord Accredited</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">Completed engineering projects in collaboration with faculty</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">Certified Industrial Automation course by Bosch Rexroth</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Higher Secondary */}
            <div className={`bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 ${
              inView ? 'animate-fade-in-up animate-delay-400' : ''
            }`}>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Higher Secondary School Education
                  </h3>
                  <p className="text-lg text-emerald-600 font-semibold mb-4">
                    State Board, Tamil Nadu, India
                  </p>
                  <p className="text-slate-600 font-medium mb-6">2012 – 2014</p>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-4 border border-emerald-100">
                    <h4 className="font-semibold text-slate-900 mb-3">Academic Excellence:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">91.3%</div>
                        <div className="text-sm text-slate-600">Overall Score</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">99%</div>
                        <div className="text-sm text-slate-600">Physics</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">95%</div>
                        <div className="text-sm text-slate-600">Mathematics</div>
                      </div>
                    </div>
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

export default Education;