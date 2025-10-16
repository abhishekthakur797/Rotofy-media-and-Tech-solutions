import React, { useState } from 'react';
import { Calculator, FileText, Palette, Code, Send, CheckCircle, X } from 'lucide-react';

const FreeTools = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    toolRequested: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const tools = [
    {
      id: 'seo-audit',
      icon: FileText,
      title: 'Free SEO Audit',
      description: 'Get a comprehensive analysis of your website\'s SEO performance and actionable recommendations.',
      features: ['Technical SEO Analysis', 'Keyword Research', 'Competitor Analysis', 'Performance Report']
    },
    {
      id: 'website-speed',
      icon: Calculator,
      title: 'Website Speed Test',
      description: 'Analyze your website\'s loading speed and get optimization suggestions to improve performance.',
      features: ['Page Load Analysis', 'Performance Metrics', 'Optimization Tips', 'Mobile Speed Test']
    },
    {
      id: 'brand-audit',
      icon: Palette,
      title: 'Brand Audit',
      description: 'Evaluate your brand consistency across all digital platforms and get improvement suggestions.',
      features: ['Brand Consistency Check', 'Visual Identity Review', 'Message Alignment', 'Improvement Plan']
    },
    {
      id: 'code-review',
      icon: Code,
      title: 'Code Review',
      description: 'Get your website code reviewed by our experts for security, performance, and best practices.',
      features: ['Security Assessment', 'Performance Review', 'Best Practices Check', 'Optimization Report']
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleToolSelect = (toolId: string) => {
    setSelectedTool(toolId);
    setFormData({
      ...formData,
      toolRequested: tools.find(tool => tool.id === toolId)?.title || '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const subject = encodeURIComponent(`Free Tool Request: ${formData.toolRequested}`);
      const body = encodeURIComponent(
        `New Free Tool Request\n\n` +
        `Tool Requested: ${formData.toolRequested}\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company}\n\n` +
        `This request was submitted from the Rotofy website free tools section.`
      );
      
      const mailtoLink = `mailto:info@rotofy.in?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setFormData({ name: '', email: '', company: '', toolRequested: '' });
      setSelectedTool(null);
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="free-tools" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Free Tools & Audits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get valuable insights about your digital presence with our free professional tools and audits
          </p>
        </div>

        {!selectedTool ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={tool.id}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer flex flex-col h-full"
                  onClick={() => handleToolSelect(tool.id)}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 text-center">
                    {tool.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-center flex-grow">
                    {tool.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl mt-auto">
                    {tool.id === 'brand-audit' ? 'Get Free Brand Audit' : 
                     tool.id === 'seo-audit' ? 'Get Free SEO Audit' : 
                     tool.id === 'website-speed' ? 'Get Free Speed Test' : 
                     tool.id === 'code-review' ? 'Free Code Review' : 
                     `Get Free ${tool.title}`}
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Request Your Free {tools.find(tool => tool.id === selectedTool)?.title}
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll send you a comprehensive report within 24-48 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Website
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your company name or website URL"
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setSelectedTool(null)}
                    className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300"
                  >
                    Back to Tools
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={20} />
                    <span>{isSubmitting ? 'Submitting...' : 'Request Free Audit'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 transform animate-fade-in shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Request Submitted! ✅
              </h3>
              <p className="text-gray-600 mb-6">
                We'll send your free audit report to your email within 24-48 hours.
              </p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Close
              </button>
            </div>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-300"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FreeTools;