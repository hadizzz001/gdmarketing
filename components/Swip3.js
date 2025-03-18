"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useSearchParams } from 'next/navigation';

const ServicesSwiper = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('id');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (search) {
      fetch(`/api/products/${search}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0 && data[0].img) {
            setImages(data[0].img);
          }
        })
        .catch((err) => console.error("Error fetching images:", err));
    }
  }, [search]);

  // Do not render if there are 0 or 1 images
  if (images.length === 0 || images.length === 1) return null;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4 mt-10 myHead">More details</h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-lg shadow-md bg-white"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto rounded-lg object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSwiper;
