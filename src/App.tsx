import React from 'react';
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
  return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Services />
          <WhyChooseUs />
          <About />
          <Careers />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}

export default App;