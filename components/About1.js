"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useSearchParams } from 'next/navigation';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  const searchParams = useSearchParams();
  const searchId = searchParams.get('id');

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchId) return; // Avoid fetching if no ID is provided

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${searchId}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        
        const data = await response.json();
        setProduct(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [searchId]);
 
  

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
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {product && (
          <>
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p

dangerouslySetInnerHTML={{ __html: product.description }}
className="mt-2 myP"
/>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default About;
