import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Innovations Inc.',
      text: 'Rotofy transformed our digital presence completely. Their expertise in web development and digital marketing helped us achieve 300% growth in online engagement.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'StartupXYZ',
      text: 'The team at Rotofy delivered exceptional results. Their cloud solutions and ongoing support have been instrumental in scaling our business operations.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency Pro',
      text: 'Outstanding media solutions and creative content that perfectly captured our brand vision. Highly professional and reliable team to work with.',
      rating: 5,
    },
  ];

  const partners = [
    'TechCorp', 'InnovateNow', 'DigitalFirst', 'CloudSolutions', 'MediaPlus', 'StartupHub'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <Quote size={24} className="text-blue-600 mr-2" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-lg font-semibold text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;