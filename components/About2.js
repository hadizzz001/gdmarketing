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
        <h1 className="myHead">Introduction</h1> 
        <p className="mt-2 myP">
        Our Lease-to-Own program offers a unique investment opportunity that bridges the gap between car leasing and ownership. Designed for both investors and potential car owners, this model provides a structured pathway to vehicle ownership while ensuring strong returns for investors.
        </p>
      </motion.div>

 
    </div>
  );
};

export default About;
