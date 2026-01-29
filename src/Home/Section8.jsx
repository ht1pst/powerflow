import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import bg from "../assets/22.webp";
import React, { useState, useEffect } from "react";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
function Section8(){

const cards = [
    {
      description:
        "Joining this gym completely changed my lifestyle. It’s the best decision I ever made.",
      name: "Hawthorn Sage",
      
    },
    {
      
      description:
        "Joining this gym gave me structure, motivation, and confidence I never had before.",
      name: "Reynolds Anthony",
      
    },
    {
    
      description:
        "The trainers genuinely care, and it shows in the results I’ve achieved",
      name: "Rosemary Violet",
      
    },


     {
      
      description:
        "This gym pushed me to levels I never thought my body could reach",
      name: "Hawthorn Sage",
      
    },
     {
      
      description:
        "Every workout leaves me energized and proud of the progress I’m making",
      name: "Reynolds Anthony",

    },
     {
      
      description:
        "I feel stronger, healthier, and more disciplined since I started coming here.",
      name: "Rosemary Violet",
    },


  ];


 const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === cards.length - 1 ? 0 : prev + 1
    );
  };

  const [itemsPerView, setItemsPerView] = useState(3);

useEffect(() => {
  const updateItems = () => {
    if (window.innerWidth < 640) {
      setItemsPerView(1);     // mobile: 1 slide per view
    } else if (window.innerWidth < 1024) {
      setItemsPerView(2);     // tablet: 2 slides per view
    } else {
      setItemsPerView(3);     // desktop: 3 slides per view
    }
  };

  updateItems();
  window.addEventListener("resize", updateItems);
  return () => window.removeEventListener("resize", updateItems);
}, []);





    return(
       <section className=" h-150 bg-cover bg-center bg-no-repeat relative"
       style={{ backgroundImage: `url(${bg})` }}
       >

          <div className="absolute inset-0 bg-black/60 z-0"></div>
          





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
      <div className="h-110   relative rounded-xl lg:block   flex flex-col justify-center text-center w-[90%] mx-auto mt-20">
        
       <div className="flex gap-1 justify-center">
        <i className="fas fa-star text-[#F34F3A] text-[12px]"></i>
        <i className="fas fa-star text-[#F34F3A] text-[12px]"></i>
        <i className="fas fa-star text-[#F34F3A] text-[12px]"></i>
        <i className="fas fa-star text-[#F34F3A] text-[12px]"></i>
        <i className="fas fa-star text-[#F34F3A] text-[12px]"></i>
       </div>
       

        {/* Description */}
        <p className="lg:text-[35px] lg:w-200 mt-5 lg:text-[18px] text-[35px] lg:px-[15px] lg:font-bold lg:font-thin font-bold text-white  lg:text-center lg:mx-auto">
          {card.description}
        </p>

        {/* Name */}
        <p className="text-md text-white font-semibold flex justify-center mt-10">
          {card.name}
        </p>

        {/* Title */}
        

      </div>
    </SwiperSlide>
  ))}
</Swiper>

<style jsx>{`
  .swiper-pagination-bullet {
    background-color: #F34F3A !important;
    opacity: 1 !important;
    margin-top: 30px;
  }
  .swiper-pagination-bullet-active {
    background-color: #ffffff !important;
    transform: scale(1.3);
     margin-top: 30px;
  }
`}</style>



       </section>
    )
}
export default Section8