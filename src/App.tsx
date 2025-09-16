import React from 'react';
import { useState } from 'react';
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
      </div>
  );
}

export default App;