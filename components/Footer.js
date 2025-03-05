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
      // Check if the section is in the viewport (with a 10% threshold)
      if (rect.top <= window.innerHeight * 0.9) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }
  };

  useEffect(() => {
    // Initially check on mount
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
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
          backgroundColor: 'transparent', // Transparent background
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
        </div>
        <p>© {new Date().getFullYear()} GD Marketing Group</p>

      </motion.section>
    </div>
  );
};

export default Section;
