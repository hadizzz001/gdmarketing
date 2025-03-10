"use client"; 
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Section = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const controls = useAnimation();

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.9) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isInView, controls]);

  return (
    <div className="section-container" style={{ backgroundColor: '#044877', color: '#fff', minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      
      {/* Contact Us Section */}
      <motion.section
        className="contact-us"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1, ease: 'easeInOut' }}
        ref={sectionRef}
        style={{
          backgroundColor: 'transparent',
          color: '#fff',
          textAlign: 'center',
          maxWidth: '800px',
          padding: '20px',
          marginTop: '20px'
        }}
      >
        <h2>Contact Us</h2>
        <div className="contact-info">
          <motion.div
            className="phone-number"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
            style={{ marginBottom: '10px' }}
          >
            <p>📞 North America: +647 874 0577</p>
          </motion.div>
          <motion.div
            className="phone-number"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.7, duration: 1.2, ease: 'easeOut' }}
          >
            <p>📞 Middle East: +961 81 001300</p>
          </motion.div>
          <motion.div
            className="email"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.9, duration: 1.2, ease: 'easeOut' }}
            style={{ marginTop: '10px' }}
          >
            <p>📧 Email: <a href="mailto:gabdallah@gdmarketing.net" style={{ color: '#fff', textDecoration: 'underline' }}>gabdallah@gdmarketing.net</a></p>
          </motion.div>
          <motion.div
            className="website"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 1.1, duration: 1.2, ease: 'easeOut' }}
            style={{ marginTop: '10px' }}
          >
            <p>🌐 Website: <a href="https://www.gdmarketing.net" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>www.gdmarketing.net</a></p>
          </motion.div>
        </div>
        <p>© {new Date().getFullYear()} GD Marketing Group</p>
      </motion.section>
    </div>
  );
};

export default Section;
