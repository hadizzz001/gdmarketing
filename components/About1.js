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
        className="md:w-full text-center"
        style={{ textAlign: "left" }}
      >
        <h1 className="myHead">About us</h1> 
        <p className="mt-2 myP">
        At GDM, we specialize in connecting visionary entrepreneurs with the right venture capital partners. Acting as a strategic bridge between high-potential startups and investors seeking lucrative opportunities, we leverage our extensive network of venture capital firms, private equity investors, and angel backers to ensure promising projects receive the funding they need to scale and succeed.
        </p>
      </motion.div>

 
    </div>
  );
};

export default About;
