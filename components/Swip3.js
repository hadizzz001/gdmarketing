"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  "https://res.cloudinary.com/dgkipuarc/image/upload/v1741433714/uj5jidohmbufia4xwgcl.jpg",
  "https://res.cloudinary.com/dgkipuarc/image/upload/v1741433712/qmclefihajqxakrbijrt.jpg",
  "https://res.cloudinary.com/dgkipuarc/image/upload/v1741433712/sunkl2okytkm3daoujth.jpg",
  "https://res.cloudinary.com/dgkipuarc/image/upload/v1741433710/fgrv1yrxjbebqnn6bz8d.jpg",
];

const ServicesSwiper = () => {
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
