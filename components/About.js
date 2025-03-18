'use client';
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const About = () => {
  const [data, setData] = useState(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/home");
        const result = await response.json();
        setData(result[0]); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
      );
    }
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 p-6 ">
      {/* Text Section - Fades Down */}
      <div ref={textRef} className="md:w-1/2 text-left md:mt-[150px]"> 
        <p className="mt-2 myP" dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>

      {/* Image Section - Fades Up */}
      <div ref={imageRef} className="md:w-1/2  md:mt-[100px]">
        <img
          src={data.img[0]} 
          alt="Description"
          width={500}
          height={300}
          className="mt-[100px] w-full h-auto"
        />
      </div>
    </div>
  );
};

export default About;
