"use client";

import { useState, useEffect } from "react"; 
import { useSearchParams } from 'next/navigation';

const Banner = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('id');

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!search) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${search}`);
        const data = await response.json();
        setProduct(data[0]);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [search]);

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: product?.img?.[0]
            ? `url('${product.img[0]}')`
            : "url('https://res.cloudinary.com/dgkipuarc/image/upload/v1741121727/zfyiqe55jfwyd04mri2v.webp')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 bg-black/50">
        <h1 className="text-5xl md:text-7xl font-bold">
          {loading ? "Loading..." : product?.title }
        </h1>
      
      </div>
    </div>
  );
};

export default Banner;
