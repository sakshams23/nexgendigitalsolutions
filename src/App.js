import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import Footer from './Footer';
import Contact from './Contact';
import {Terms} from './Terms';
import {Privacy} from './Privacy';
import TransactionalSMS from './servicesPages/TransactionalSMS';
import WhatsAppAPI from './servicesPages/WhatsAppAPI';
import BulkEmail from './servicesPages/BulkEmail';
import BulkSMS from './servicesPages/BulkSMS';
import VoiceCall from './servicesPages/VoiceCall';
import SMM from './servicesPages/SMM';
import SEO from './servicesPages/SEO';
import RCS from './servicesPages/RCS';
import IVR from './servicesPages/IVR';
import DigitalMarketing from './servicesPages/DigitalMarketing';

import LocomotiveScroll from "locomotive-scroll";
import "./styles/locomotive-scroll.css";

import { useEffect, useState, useRef } from 'react';

function App() {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);
  const [paddingX, setPaddingX] = useState(0);

  // Initialize LocomotiveScroll safely
  useEffect(() => {
    if (!scrollRef.current) return;

    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (locoScroll.current) {
        //locoScroll.current.destroy();
        locoScroll.current = null;
      }
    };
  }, []);

  // Handle responsive padding
  useEffect(() => {
    const handleResize = () => {
      const padding = (window.innerWidth - 1280) / 2;
      setPaddingX(padding > 0 ? padding : 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      
      <div
        ref={scrollRef}
        data-scroll-container
        className="bg-[#FDFAF6] min-h-screen"
        style={{ paddingLeft: paddingX, paddingRight: paddingX }}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/transactionalsms" element={<TransactionalSMS />} />
          <Route path="/rcsservices" element={<RCS />} />
          <Route path="/smmservices" element={<SMM />} />
          <Route path="/bulksms" element={<BulkSMS />} />
          <Route path="/bulkemail" element={<BulkEmail />} />
          <Route path="/apiwhatsapp" element={<WhatsAppAPI />} />
          <Route path="/ivr" element={<IVR />} />
          <Route path="/voicebrodcasting" element={<VoiceCall />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/digitalmarketing" element={<DigitalMarketing />} />
          
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
