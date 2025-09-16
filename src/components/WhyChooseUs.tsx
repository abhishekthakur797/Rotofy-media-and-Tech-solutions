import React from 'react';
import { Users, Lightbulb, Heart, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our skilled professionals bring years of industry expertise to every project.',
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'We leverage cutting-edge technologies to deliver forward-thinking solutions.',
    },
    {
      icon: Heart,
      title: 'Client-First Approach',
      description: 'Your success is our priority. We build lasting partnerships through trust.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Results',
      description: 'Our solutions grow with your business, ensuring long-term success.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine expertise, innovation, and dedication to deliver exceptional results that exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;