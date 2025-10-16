import React from 'react';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Careers from './components/Careers';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
      <div className="min-h-screen bg-white relative">
        <Header onMenuToggle={setIsMobileMenuOpen} />
        <main className={`transition-all duration-300 ${isMobileMenuOpen ? 'blur-sm' : ''}`}>
          <Hero />
          <Services />
          <WhyChooseUs />
          <About />
          <Careers />
          <Testimonials />
          <Contact />
        </main>
        <Footer className={`transition-all duration-300 ${isMobileMenuOpen ? 'blur-sm' : ''}`} />
        
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/917090636636"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </div>
  );
}

export default App;