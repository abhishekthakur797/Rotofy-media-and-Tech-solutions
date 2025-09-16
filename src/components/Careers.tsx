import React from 'react';
import { Briefcase, Users, Rocket } from 'lucide-react';

const Careers = () => {
  const benefits = [
    'Competitive salary and benefits',
    'Flexible working hours',
    'Remote work opportunities',
    'Professional development programs',
    'Collaborative team environment',
    'Cutting-edge technology stack'
  ];

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be part of a dynamic team of innovators, creators, and problem-solvers who are passionate about making a difference in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Career Growth
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Advance your career with mentorship programs, skill development opportunities, and leadership training.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Team Culture
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Work in a supportive, inclusive environment where creativity and innovation are encouraged and celebrated.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Work on cutting-edge projects using the latest technologies and contribute to solutions that make an impact.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Work With Us?
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Join Us?
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We're always looking for talented individuals who share our passion for innovation and excellence. Send us your resume and let's start a conversation about your future with Rotofy.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                View Openings
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;