import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Revi.css"; // Ensure this matches your CSS filename

const slide_image = "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80";

const slides = [
  { name: "India", src: slide_image },
  { name: "Japan", src: slide_image },
  { name: "Norway", src: slide_image },
  { name: "Paris", src: slide_image },
  { name: "London", src: slide_image },
  { name: "India", src: slide_image },
  { name: "Japan", src: slide_image },
  { name: "Norway", src: slide_image },
  { name: "Paris", src: slide_image },
  { name: "London", src: slide_image },
];

export const Carousel = () => {
  return (
    <Swiper
      grabCursor
      centeredSlides
      // REMOVED: slidesPerView={3} (We moved this to breakpoints below)
      speed={600}
      effect="coverflow"
      loop
      loopAdditionalSlides
      mousewheel
      pagination={{ clickable: true }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      
      // ADD THIS BREAKPOINTS SECTION
      breakpoints={{
        // On Mobile/Tablet (0px and up): Use 'auto' so CSS controls width
        0: {
          slidesPerView: "auto",
        },
        // On Laptop (1024px and up): Force 3 slides (Your original view)
        1024: {
          slidesPerView: 3,
        },
      }}
      
      modules={[EffectCoverflow, Pagination]}
    >
      {/* REMOVED the extra <div className="swipers-wrapper"> - It breaks Swiper! */}
      
        {slides.map((slide, index) => (
          <SwiperSlide
            key={`${slide.name}-${index}`}
            style={{
              backgroundImage: `url(${slide.src})`,
            }}
          >
            <div>
              <h2 className='ab'>{slide.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      
      <div className="swipers-pagination"></div>
    </Swiper>
  );
};

export default Carousel;