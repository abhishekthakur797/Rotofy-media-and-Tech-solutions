import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Rotofy
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Content Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Rotofy Media and Tech Solution is a forward-thinking company dedicated to transforming businesses through innovative technology and creative media solutions. We combine technical expertise with creative vision to deliver exceptional results that drive growth and success.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded with a mission to bridge the gap between technology and creativity, we have grown into a trusted partner for businesses looking to establish a strong digital presence and optimize their operations through smart technology solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Values Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower businesses with innovative technology and creative solutions that drive growth, efficiency, and success in the digital age.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading provider of integrated technology and media solutions, transforming how businesses operate and connect with their audiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Innovation, integrity, excellence, and collaboration guide everything we do. We believe in building lasting relationships through trust and exceptional service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;