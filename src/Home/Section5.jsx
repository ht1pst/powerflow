import { useState } from "react";

import img1 from "../assets/l1.webp";
import img2 from "../assets/l2.webp";
import img3 from "../assets/l3.webp";
import img4 from "../assets/l4.webp";
import img5 from "../assets/l5.webp";
import img6 from "../assets/l6.webp";

import icon from "../assets/logo-icon.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
function Section5() {
 const cards = [
    {
      baseImg: img1,
      description:
        "Strength & Conditioning",
    },

     {
      baseImg: img2,
      description:
        "Personal Training",
    },

    {
      baseImg: img3,
      description:
        "HIIT & Group Training",
    },


     {
      baseImg: img4,
      description:
        "Yoga & Pilates",
    },


      {
      baseImg: img5,
      description:
        "Circuit Training",
    },

      {
      baseImg: img6,
      description:
        "Athletic Performance",
    },
  ];


  return (
    <section className="bg-black py-20 overflow-hidden ">
      {/* Header + buttons */}
      <div className="flex flex-col lg:justify-between lg:items-center items-end mb-12 lg:px-30 px-[20px]">
       <div>
            <div>
                <p className="text-[#F34F3A]">Our Services</p>
                <h1 className="text-white lg:text-[45px] text-[42px] font-[800] lg:w-160 leading-tight mt-5 ">Classes Designed For You</h1>
                <p className="text-[#dadadbff] mt-4 lg:w-150  text-[17px] leading-[30px]">From personal training and group classes to nutrition guidance and strength coaching, we provide everything you need to achieve lasting fitness results.</p>
            </div>
            <div></div>
        </div>


      </div>

      {/* Carousel */}
    <Swiper
  spaceBetween={20}
  slidesPerView={1}
  pagination={{ clickable: true }}
  modules={[Pagination, Autoplay, EffectFade]}
  effect="fade"                // makes slides fade in/out
  autoplay={{ 
    delay: 3000,               // 3 seconds per slide
    disableOnInteraction: false
  }}
  fadeEffect={{ crossFade: true }}  // smooth fade transition
  className="mySwiper pb-20"
>
  {cards.map((card, i) => (
    <SwiperSlide key={i}>
      <div
       style={{ backgroundImage: `url(${card.baseImg})` }}
              className="lg:h-110 lg:w-180 h-60 w-[100%] shrink-0 bg-cover bg-center relative group"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
      >
      <div className="absolute inset-0 bg-black/50"></div>
          <img src={icon} className="lg:w-35 w-25 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

        {/* Description */}
        <h1 className=" absolute bottom-10 z-10  left-1/2 -translate-x-1/2 text-[17px] font-bold text-white">
          {card.description}
        </h1>

<div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#F34F3A] to-transparent opacity-90 blur-8xl"></div>

      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </section>
  );
}

export default Section5;
