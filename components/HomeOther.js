"use client";

import React, { useState, useEffect } from 'react';

const Section = () => {
  const [desc, setDesc] = useState('');

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
    <div
      className="section-container"
      style={{
        minHeight: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Our Vision Section */}
      <section
        className="our-vision"
        style={{
          opacity: 0,
          animation: 'fadeIn 1.2s ease-out forwards',
          textAlign: 'center',
          maxWidth: '800px',
          padding: '20px',
        }}
      >
        <p
          className="desc"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </section>

      <hr />

      {/* Inline CSS for animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Section;
