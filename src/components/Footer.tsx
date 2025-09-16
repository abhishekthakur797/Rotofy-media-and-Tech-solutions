import React from 'react';
import { Linkedin, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigationItems = [
    { name: 'Home', href: 'hero' },
    { name: 'Services', href: 'services' },
    { name: 'Careers', href: 'careers' },
    { name: 'About Us', href: 'about' },
    { name: 'Contact', href: 'contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="/Light Theme copy copy.png" 
              alt="Rotofy Logo" 
              className="h-8 w-auto mb-6"
            />
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transforming businesses through innovative technology and creative media solutions. 
              We combine expertise with passion to deliver exceptional results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <p>info@rotofy.in</p>
              <p>+91 7090636636</p>
              <p>
                168 Rotofy Media and Tech Solutions<br />
                Khumbaralli Near chikkabanavara<br />
                Bangalore, Karnataka 560090<br />
                India
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>in India | Rotofy Media and Tech Solution | All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;