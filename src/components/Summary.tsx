import React from 'react';
import { useInView } from 'react-intersection-observer';

const Summary = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="summary" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            inView ? 'animate-fade-in-up animate-visible' : ''
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional <span className="gradient-text">Summary</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-xl">
            <p className="text-xl leading-relaxed text-slate-700">
              Versatile and execution-focused <span className="font-semibold text-blue-600">Electrical and Electronics
                 Engineer </span> with a proven record of delivering<span className="font-semibold text-blue-600"> 36+ multidisciplinary engineering
                  projects</span> across energy systems, automation, and intelligent infrastructure. 
                  Founder of a self-run engineering firm with hands-on experience in designing
                   and deploying end-to-end solutions including smart home automation, hybrid solar-wind systems,
                    battery backups, and IoT-based monitoring. Combines deep technical knowledge with practical 
                    field deployment, systems integration, and performance optimisation. 
                    Proficient in industry tools such as AutoCAD Electrical, MATLAB/Simulink, SCADA, PLCs, ETAP, and Digsilent. Known for transforming complex client needs into scalable, standards-compliant solutions with measurable impact. Recognised for engineering precision, resilience under pressure,
                 and a commitment to innovation and lifelong learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;