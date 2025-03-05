"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
 


 


const services = [
  {
    title: "Driver Selection & Lease Agreement",
    description: "Qualified drivers enter a lease-to-own contract, allowing them to lease the vehicle with the option to purchase later.",
  },
  {
    title: "Monthly Payments with Equity Growth",
    description: "A portion of the driver’s monthly lease payment contributes toward their future car purchase, creating a built-in investment.",
  },
  {
    title: "Investor Security",
    description: "Investors benefit from consistent lease income and vehicle value retention while maintaining ownership control.",
  },
  {
    title: "Exit Strategy",
    description: "Drivers exercise their purchase option within a defined period, ensuring a profitable return for investors.",
  },
];


const ServicesSwiper = () => {



    
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4 mt-10 myHead">How It Works</h2>
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
