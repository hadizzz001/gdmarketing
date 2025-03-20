'use client';
import React, { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/home");
        const result = await response.json();
        setData(result[0]); 
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 p-6">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : !data ? (
        <p className="text-center">No data available.</p>
      ) : (
        <>
          {/* Text Section */}
          <div
            style={{ animation: "fadeIn 0.8s ease-out" }}
            className="md:w-1/2 text-left md:mt-[150px]"
          > 
            {data.description && (
              <p className="mt-2 myP" dangerouslySetInnerHTML={{ __html: data.description }} />
            )}
          </div>

          {/* Image Section */}
          <div
            style={{ animation: "fadeIn 0.8s ease-out 0.2s forwards" }}
            className="md:w-1/2 md:mt-[100px]"
          >
            {data.img?.length > 0 && (
              <img
                src={data.img[0]} 
                alt="Description"
                width={500}
                height={300}
                className="mt-[100px] w-full h-auto"
              />
            )}
          </div>
        </>
      )}

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
