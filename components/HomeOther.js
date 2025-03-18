"use client";
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Section = () => {
  const [isInView, setIsInView] = useState(false);
  const [desc, setDesc] = useState(''); // State for the description
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

  // Fetch data on component mount
  useEffect(() => {
    fetch('api/home')
      .then(response => response.json())
      .then(data => {
        if (data[0] && data[0].last) {
          setDesc(data[0].last); // Set the description from the fetched data
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="section-container" style={{ minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {/* Our Vision Section */}
      <motion.section
        className="our-vision"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        ref={sectionRef}
        style={{ textAlign: 'center', maxWidth: '800px', padding: '20px' }}
      > 
        <p
          className="desc"
          dangerouslySetInnerHTML={{ __html: desc }} // Render fetched description
        />
      </motion.section>

      <hr />
    </div>
  );
};

export default Section;
