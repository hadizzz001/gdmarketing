"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useSearchParams } from "next/navigation";

const ServicesSwiper = () => {
  const [services, setServices] = useState([]);
  const [tservice1, setTservice1] = useState("");
  const searchParams = useSearchParams();
  const searchId = searchParams.get("id");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`/api/products/${searchId}`);
        const data = await response.json();
        setTservice1(data[0].tservice1);
        setServices(data[0].service1);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

 
  


  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4 mt-10 myHead">{tservice1}</h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-lg shadow-md bg-white"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="flex flex-col justify-center items-center h-[300px] rounded-lg text-center">
            <div className="p-10">
              <h3 className="myP text-xl font-semibold mb-2">{service.title}</h3>
              <p className="myP text-gray-600">{service.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSwiper;
