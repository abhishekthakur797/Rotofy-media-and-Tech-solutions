import React from 'react';
import { 
  Code, 
  TrendingUp, 
  Settings, 
  Video, 
  Cloud, 
  Headphones 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web & App Development',
      description: 'Custom digital solutions tailored to your business needs with modern technologies and best practices.',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'SEO, branding, and growth strategies to increase your online presence and drive meaningful results.',
    },
    {
      icon: Settings,
      title: 'Tech Consulting',
      description: 'Smart IT and digital transformation solutions to optimize your operations and boost efficiency.',
    },
    {
      icon: Video,
      title: 'Media Solutions',
      description: 'Creative content, graphics, and video production to elevate your brand and engage your audience.',
    },
    {
      icon: Cloud,
      title: 'Cloud & Hosting',
      description: 'Secure and scalable cloud solutions with reliable hosting infrastructure for your applications.',
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: '24/7 technical assistance and ongoing maintenance to ensure your systems run smoothly.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive technology and media solutions to help businesses thrive in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <IconComponent size={28} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;