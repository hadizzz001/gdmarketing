"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 p-6">
      {/* Text Section - Fades Down */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 text-center"
        style={{ textAlign: "left" }}
      >
        <h1 className="myHead">GD Marketing Group</h1>
        <h5 className="myHead">About us</h5>
        <p className="mt-2 myP">
          Founded in 1992, GD Marketing Group has established itself as a
          trusted leader in business development across the Middle East and
          North America. Headquartered in Beirut, we have navigated evolving
          market landscapes with resilience, continuously delivering
          best-in-class and tailored solutions across diverse industries.
        </p>
      </motion.div>

      {/* Image Section - Fades Up */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Slight delay for a staggered effect
        className="md:w-1/2"
      >
        <img
          src="https://res.cloudinary.com/dgkipuarc/image/upload/v1741171225/dyfarjeedvxcvwww7din.jpg"
          alt="Description"
          width={500}
          height={300}
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default About;
