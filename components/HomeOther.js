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
    <div className="section-container" style={{  minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {/* Our Vision Section */}
      <motion.section
        className="our-vision"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        ref={sectionRef}
        style={{ textAlign: 'center', maxWidth: '800px', padding: '20px' }}
      >
        <h2 className='myHead'>Our Vision</h2>
        <p className='myP'>
          At GD Marketing Group, we believe in delivering comprehensive, 360-degree
          solutions that function both independently and as part of a broader strategic
          approach. By partnering with top industry experts, we ensure that our clients
          receive world-class market insights and commercial expertise. Our vision is to
          integrate global expertise with local knowledge, providing impactful solutions
          where they are needed most.
        </p>
      </motion.section>

      <hr />
 
    </div>
  );
};

export default Section;
