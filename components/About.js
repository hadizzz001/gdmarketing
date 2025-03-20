'use client';
import React, { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState(null);

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

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 p-6 ">
      {/* Text Section - Fades In */}
      <div
        style={{
          animation: "fadeIn 0.8s ease-out"
        }}
        className="md:w-1/2 text-left md:mt-[150px]"
      > 
        <p className="mt-2 myP" dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>

      {/* Image Section - Fades In */}
      <div
        style={{
          animation: "fadeIn 0.8s ease-out 0.2s forwards"
        }}
        className="md:w-1/2 md:mt-[100px]"
      >
        <img
          src={data.img[0]} 
          alt="Description"
          width={500}
          height={300}
          className="mt-[100px] w-full h-auto"
        />
      </div>

      {/* Inline CSS Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default About;
