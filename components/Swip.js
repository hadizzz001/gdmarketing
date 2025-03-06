"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
 


 


const services = [
  {
    title: "Venture Capital Matchmaking",
    description: "Connecting entrepreneurs with aligned investors for strategic funding.",
  },
  {
    title: "Investment Readiness Support",
    description: "Assisting businesses in refining proposals and pitch decks to attract investment.",
  },
  {
    title: "Deal Structuring & Negotiation",
    description: "Facilitating agreements between investors and entrepreneurs to secure successful funding.",
  },
  {
    title: "Special Project Financing",
    description: "Helping businesses obtain capital for unique and high-impact initiatives.",
  },
];

const ServicesSwiper = () => {



    
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4 mt-10 myHead">What we do?</h2>
      <Swiper
        modules={[Autoplay]}
         
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        className="rounded-lg shadow-md bg-white "
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="flex flex-col justify-center items-center h-[300px] rounded-lg  text-center ">
            <div className="p-10">
            <h3 className="myP text-xl font-semibold mb-2">{service.title}</h3>
            <p className="myP text-gray-600">{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSwiper;
