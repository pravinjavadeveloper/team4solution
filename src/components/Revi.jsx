import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Star } from "lucide-react"; 

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Revi.css"; 

// Ensure paths are correct
import lady from "../user/lady.png"
import man from "../user/man.png"
import man1 from "../user/man1.png"
import man2 from "../user/man2.png"
import man3 from "../user/man3.png"

const slides = [
  { name: "Luke Moncrieffe", src:lady ,review: "Absolutely satisfied with their service! If anyone is searching for a trusted mobile app development company in London, I highly recommend them, they built me a fast, clean and user friendly app" },

  { name: "Oliver Ackerman", src: man,review:"Fantastic team and amazing support. Easily the best app development company in the UK. They were reliable, transparent, and always on time" },
  { name: "Hamza Dar", src: man3,review:"Excellent work by the team on my business (Muraad UK).Running an online business made much easier!! Great communication and delivered my requirements on time.Highly recommended"},

  { name: "Yanik C", src: man1,review:"The kind of development service offered by TEAM4SOLUTION was beyond my expectation. I wanted to live my website on a scheduled date but there were many problems I was facing. I contacted TEAM4SOLUTION and they provided me a team of expert and skilled developers. The team took my project and helped me in the timely release of my website" },

  { name: "Rajendra Sharma", src: man2,review:"Working with TEAM4SOLUTION was a great experience. From the documentation phase to final development, the team interacted with me very on a regular basis. They understood my requirements and delivered a top-class eWallet solution. They also gave me suggestions to make my app more flexible and better" },

   { name: "Luke Moncrieffe", src:lady ,review: "Absolutely satisfied with their service! If anyone is searching for a trusted mobile app development company in London, I highly recommend them, they built me a fast, clean and user friendly app" },

  { name: "Oliver Ackerman", src: man,review:"Fantastic team and amazing support. Easily the best app development company in the UK. They were reliable, transparent, and always on time" },
  { name: "Hamza Dar", src: man3,review:"Excellent work by the team on my business (Muraad UK).Running an online business made much easier!! Great communication and delivered my requirements on time.Highly recommended"},

  { name: "Yanik C", src: man1,review:"The kind of development service offered by TEAM4SOLUTION was beyond my expectation. I wanted to live my website on a scheduled date but there were many problems I was facing. I contacted TEAM4SOLUTION and they provided me a team of expert and skilled developers. The team took my project and helped me in the timely release of my website" },

  { name: "Rajendra Sharma", src: man2,review:"Working with TEAM4SOLUTION was a great experience. From the documentation phase to final development, the team interacted with me very on a regular basis. They understood my requirements and delivered a top-class eWallet solution. They also gave me suggestions to make my app more flexible and better" },

];

export const Carousel = () => {
  return (
    <Swiper
      grabCursor
      centeredSlides
      speed={600}
      effect="coverflow"
      loop
      loopAdditionalSlides={3} 
      mousewheel
      pagination={{ clickable: true }}
      
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true, // RESTORED: This adds the dark shadow to side cards
      }}
      
      breakpoints={{
        0: {
          slidesPerView: "auto",
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      
      modules={[EffectCoverflow, Pagination]}
    >
        {slides.map((slide, index) => (
          <SwiperSlide key={`${slide.name}-${index}`} className="review-slide">
            
            <div className="card-content">
                <div className="user-avatar">
                    <img src={slide.src} alt={slide.name} />
                </div>

                <div className="stars-container">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="#FFD700" stroke="none" />
                    ))}
                </div>

                <p className="review-text">
                    "{slide.review}"
                </p>

                <h2 className="user-name">{slide.name}</h2>
            </div>

          </SwiperSlide>
        ))}
      
      <div className="swipers-pagination"></div>
    </Swiper>
  );
};

export default Carousel;



















