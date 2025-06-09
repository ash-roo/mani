import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Rental Sales Officer',
      company: 'Enterprise Rent-A-Car (Redspot)',
      location: 'Brisbane Airport',
      period: 'Feb 2023 – Present',
      highlights: [
        'Managed daily customer service operations in high-demand airport environment',
        'Engaged with diverse customers handling bookings, issues, and returns',
        'Utilized strong communication skills for exceptional customer service',
        'Handled dynamic rental operations efficiently in fast-paced setting',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Founder and Lead Engineer',
      company: 'Infinite Energy | Mibhu Pvt Ltd',
      location: 'Tamil Nadu, India',
      period: '2018 – 2021',
      highlights: [
        'Completed over 36 successful projects across residential, commercial, and industrial sectors',
        'Specialized in smart home automation, IoT monitoring, and renewable energy systems',
        'Provided electrical layout design, energy audits, and efficiency consulting',
        'Built strong client base through technical consultation and quality delivery',
        'Business closed due to COVID-19 and personal family circumstances',
      ],
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      title: 'Business Development Associate',
      company: "BYJU'S",
      location: 'India',
      period: '2021 – 2022',
      highlights: [
        'Delivered educational consultation to clients and managed customer relationships',
        'Developed expertise in client communication and relationship management',
        'Honed interpersonal, sales, and negotiation skills through direct client interaction',
        'Successfully managed educational product consultations and customer onboarding',
      ],
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'animate-fade-in-up animate-visible' : ''
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              {/* <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div> */}

              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative mb-12 pl-12 md:pl-0 ${
                    index % 2 === 0
                      ? 'md:mr-0 md:text-right md:pr-0'
                      : 'md:ml-0 md:text-left md:pl-0'
                  } ${inView ? `animate-fade-in-up animate-delay-${(index + 1) * 200}` : ''}`}
                >
                  {/* Timeline Dot */}
                  {/* <div
                    className={`absolute w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg left-2 md:left-1/2 md:transform md:-translate-x-1/2 top-8`}
                  ></div> */}

                  <div className={`bg-white text-left p-6 rounded-xl shadow-lg border border-${exp.color}`}>
                    <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                    <p className="text-sm text-gray-600 font-medium">{exp.company}</p>
                    <div className="flex items-center text-gray-500 text-xs mt-1 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mt-3">
                      {exp.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optional extra paragraph */}
          <p className="mt-10 text-center text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Beyond the projects showcased above, I have delivered multiple other engineering and
            academic projects involving simulation, prototyping, and control system design. A
            comprehensive list is available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
