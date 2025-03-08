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
        <h1 className="text-5xl md:text-7xl font-bold">Hospitals & Military</h1> 
      </div>
    </div>
  );
};

export default Banner;
