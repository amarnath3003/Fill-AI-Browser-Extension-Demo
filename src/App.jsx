import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import About from './components/About';
import Support from './components/Support';
import Contact from './components/Contact';
import { PrivacyPolicy, TermsOfService } from './components/Legal';
import Modal from './components/Modal';
import Footer from './components/Footer';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="bg-black min-h-screen text-white font-body selection:bg-lime selection:text-black scroll-smooth">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <About />
      <Support />
      <Footer onOpenModal={setActiveModal} />

      {/* Pop-up Modals */}
      <Modal 
        isOpen={activeModal === 'contact'} 
        onClose={() => setActiveModal(null)} 
        title="Contact Us"
      >
        <Contact />
      </Modal>

      <Modal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal(null)} 
        title="Privacy Policy"
      >
        <PrivacyPolicy />
      </Modal>

      <Modal 
        isOpen={activeModal === 'terms'} 
        onClose={() => setActiveModal(null)} 
        title="Terms of Service"
      >
        <TermsOfService />
      </Modal>
    </div>
  );
}

export default App;
