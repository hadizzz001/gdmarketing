"use client";

import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image for Desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed hidden md:block"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dgkipuarc/image/upload/v1741121727/zfyiqe55jfwyd04mri2v.webp')",
        }}
      />

      {/* Background Image for Mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed md:hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dgkipuarc/image/upload/v1741121728/jqrvk33xfum3pvwigjz4.jpg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 bg-black/50">
        <h1 className="text-5xl md:text-7xl font-bold">Our Services</h1>
        <p className="text-2xl md:text-4xl mt-4">
          <Typewriter
            words={[
              "Venture Capital Brokerage & Investment Matchmaking",
              "Fintech & Leasing",
              "Mobile Hospitals & Military Shelter Solutions",
              "Fast Fashion & Retail (La Moda Group)",
              "Renewable Energy",
              "Events, Hospitality & Special Projects",
              "Mini and Medium Storage Facility",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={30}
            deleteSpeed={20}
            delaySpeed={2500}
          />
        </p>
      </div>
    </div>
  );
};

export default Banner;
