import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// --- IMAGE SETUP ---
// Option A: Use this public URL to test (Guaranteed to work)
const slide_image = "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80";

// Option B: Use your local image (Uncomment these 2 lines below and comment out Option A)
// import localImage from "./assets/herobanner.png";
// const slide_image = localImage;

const slides = [
  { name: "India", src: slide_image },
  { name: "Japan", src: slide_image },
  { name: "Norway", src: slide_image },
  { name: "Paris", src: slide_image },
  { name: "London", src: slide_image },
];

export const Carousel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#6a11cb] to-[#2575fc] overflow-hidden">
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 35,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false, // Set to true if you want the side cards to look darker
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        // FIX: Added specific height (h-[500px]) so it doesn't collapse
        className="w-full max-w-4xl h-[500px] pt-[50px] pb-[50px]" 
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            // FIX: Set explicit pixel width (w-[280px]) to match "Phone" shape
            className="w-[280px] h-[380px] rounded-3xl relative select-none"
            style={{
              // Reflection Effect
              WebkitBoxReflect: "below 1px linear-gradient(transparent, transparent, #0006)"
            }}
          >
            {/* Image Container */}
            <div className="w-full h-full rounded-3xl overflow-hidden relative bg-black">
              <img 
                src={slide.src} 
                alt={slide.name} 
                className="w-full h-full object-cover block"
              />
              
              {/* Overlay Content (Only visible on Active Slide) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 transition-opacity duration-300 opacity-0 [.swiper-slide-active_&]:opacity-100">
                <h2 className="text-3xl font-bold text-white uppercase tracking-wider mb-4 drop-shadow-md">
                  {slide.name}
                </h2>
                <button className="px-8 py-2 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 uppercase text-sm tracking-widest">
                  Explore
                </button>
                <div className="absolute bottom-10 text-white/70 text-sm animate-pulse">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;