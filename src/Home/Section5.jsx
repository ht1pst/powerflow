import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import img1 from "../assets/l1.webp";
import img2 from "../assets/l2.webp";
import img3 from "../assets/l3.webp";
import img4 from "../assets/l4.webp";
import img5 from "../assets/l5.webp";
import img6 from "../assets/l6.webp";
import { motion } from "framer-motion";
import icon from "../assets/logo-icon.webp";

function Section5() {

   const cards = [
    {
       baseImg: img1,
      description:
        "Strength & Conditoning",

    },
    {
      baseImg: img2,
      description:
        "Strength & Conditoning",
     
    },
    {
     baseImg: img3,
      description:
        "Strength & Conditoning",
     
    },


     {
     baseImg: img4,
      description:
         "Strength & Conditoning",
    },
     {
       baseImg: img5,
      description:
        "Strength & Conditoning",
     
    },
     {
      baseImg: img6,
      description:
         "Strength & Conditoning",
     
    },    
  ];





  const [index, setIndex] = useState(1);

 const GAP = 40;

// detect mobile
const isMobile = window.innerWidth < 1024;

// widths
const CARD_WIDTH = isMobile ? window.innerWidth : 720;

const TOTAL_CARDS = 6;


 const VIEWPORT = window.innerWidth;

const slideX =
  VIEWPORT / 2 -
  CARD_WIDTH / 2 -
  index * (CARD_WIDTH + GAP);


  return (
    <section className="bg-black py-20 overflow-hidden ">
      {/* Header + buttons */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center items-end mb-12 lg:px-30 px-[20px]">
       <div>
            <div>
                <motion.p className="text-[#F34F3A]"
                 initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
   transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >Our Services</motion.p>
                <motion.h1 className="text-white lg:text-[45px] text-[42px] font-bold lg:w-160 leading-tight mt-5 "
                 initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
   transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >Classes Designed For You</motion.h1>
                <motion.p className="text-[#dadadbff] mt-4 lg:w-150  text-[17px] leading-[30px]"
                 initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
   transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >From personal training and group classes to nutrition guidance and strength coaching, we provide everything you need to achieve lasting fitness results.</motion.p>
            </div>
            <div></div>
        </div>
 
        <div className="lg:flex gap-4 hidden lg:block">
        <button
  onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
  className="w-10 h-10 text-2xl text-white bg-[#F34F3A]"
>
  ‹
</button>

<button
  onClick={() =>
    setIndex((prev) =>
      Math.min(prev + 1, TOTAL_CARDS - 1)
    )
  }
  className="w-10 h-10 text-2xl text-white bg-[#F34F3A]"
>
  ›
</button>
        </div>
      </div>

      {/* Carousel */}
      <div className="lg:flex justify-center hidden lg:block ">
        <div  className="overflow-hidden w-screen">
          <div
            className="flex gap-10 transition-transform duration-500"
            style={{ transform: `translateX(${slideX}px)` }}
          >
            {/* CARD 1 */}
          <div style={{ backgroundImage: `url(${img1})` }}
              className="lg:h-110 lg:w-180 h-60 w-90 shrink-0 bg-cover bg-center relative group">

          <div className="absolute inset-0 bg-black/50"></div>

           <img src={icon} className="w-35 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
           
<div className=" absolute bottom-5 z-10  left-1/2 -translate-x-1/2 text-[17px] font-bold text-white"><h1 className="mt-20">Strength & Conditioning</h1></div>

<div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#F34F3A] to-transparent opacity-90 blur-8xl"></div>

<div className="
                   absolute inset-0 bg-[#F34F3A]
                   opacity-0 group-hover:opacity-100 
                   transition-opacity duration-300 
                 "></div>


<div className="
    absolute top-1/3
    opacity-0  -translate-y-1/2
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300
    text-white 
  ">

<a
    href="#"
    className="
      text-[17px] text-[#2b2f32] font-semibold text-white 
      flex items-center text-center
      transition-all duration-300 z-30
    "
  >
   Improve flexibility, reduce stress, and enhance body control with calming yoga and Pilates sessions led by certified instructors
  </a>


<div className="flex justify-center mt-5">
  <a
    href="#"
    className="
      text-[18px] text-white #7d8082ff mt-1 font-semibold bg-transparent border border-[#7d8082ff]  h-10 w-35
      flex items-center justify-center
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 delay-200
    "
  >
    View Details
  </a>
  </div>


</div>

                 
          </div>

         

            {/* CARD 2 */}
            <div style={{ backgroundImage: `url(${img2})` }}
               className="lg:h-110 lg:w-180 h-60 w-90 shrink-0 bg-cover bg-center relative group">

          <div className="absolute inset-0 bg-black/50"></div>

           <img src={icon} className="w-35 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
           
<div className=" absolute bottom-5 z-10  left-1/2 -translate-x-1/2 text-[17px] font-bold text-white"><h1 className="mt-20">Strength & Conditioning</h1></div>

<div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#F34F3A] to-transparent opacity-90 blur-8xl"></div>

<div className="
                   absolute inset-0 bg-[#F34F3A]
                   opacity-0 group-hover:opacity-100 
                   transition-opacity duration-300 
                 "></div>


<div className="
    absolute top-1/3
    opacity-0  -translate-y-1/2
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300
    text-white 
  ">

<a
    href="#"
    className="
      text-[17px] text-[#2b2f32] font-semibold text-white 
      flex items-center text-center
      transition-all duration-300 z-30
    "
  >
   Improve flexibility, reduce stress, and enhance body control with calming yoga and Pilates sessions led by certified instructors
  </a>


<div className="flex justify-center mt-5">
  <a
    href="#"
    className="
      text-[18px] text-white #7d8082ff mt-1 font-semibold bg-transparent border border-[#7d8082ff]  h-10 w-35
      flex items-center justify-center
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 delay-200
    "
  >
    View Details
  </a>
  </div>


</div>

                 
          </div>
            {/* CARD 3 */}
            <div style={{ backgroundImage: `url(${img3})` }}
               className="lg:h-110 lg:w-180 h-60 w-90 shrink-0 bg-cover bg-center relative group">

          <div className="absolute inset-0 bg-black/50"></div>

           <img src={icon} className="w-35 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
           
<div className=" absolute bottom-5 z-10  left-1/2 -translate-x-1/2 text-[17px] font-bold text-white"><h1 className="mt-20">Strength & Conditioning</h1></div>

<div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#F34F3A] to-transparent opacity-90 blur-8xl"></div>

<div className="
                   absolute inset-0 bg-[#F34F3A]
                   opacity-0 group-hover:opacity-100 
                   transition-opacity duration-300 
                 "></div>


<div className="
    absolute top-1/3
    opacity-0  -translate-y-1/2
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300
    text-white 
  ">

<a
    href="#"
    className="
      text-[17px] text-[#2b2f32] font-semibold text-white 
      flex items-center text-center
      transition-all duration-300 z-30
    "
  >
   Improve flexibility, reduce stress, and enhance body control with calming yoga and Pilates sessions led by certified instructors
  </a>


<div className="flex justify-center mt-5">
  <a
    href="#"
    className="
      text-[18px] text-white #7d8082ff mt-1 font-semibold bg-transparent border border-[#7d8082ff]  h-10 w-35
      flex items-center justify-center
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 delay-200
    "
  >
    View Details
  </a>
  </div>


</div>

                 
          </div>


            {/* CARD 4 */}
            <div style={{ backgroundImage: `url(${img4})` }}
               className="lg:h-110 lg:w-180 h-60 w-90 shrink-0 bg-cover bg-center relative group">

          <div className="absolute inset-0 bg-black/50"></div>

           <img src={icon} className="w-35 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
           
<div className=" absolute bottom-5 z-10  left-1/2 -translate-x-1/2 text-[17px] font-bold text-white"><h1 className="mt-20">Strength & Conditioning</h1></div>

<div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#F34F3A] to-transparent opacity-90 blur-8xl"></div>

<div className="
                   absolute inset-0 bg-[#F34F3A]
                   opacity-0 group-hover:opacity-100 
                   transition-opacity duration-300 
                 "></div>


<div className="
    absolute top-1/3
    opacity-0  -translate-y-1/2
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300
    text-white 
  ">

<a
    href="#"
    className="
      text-[17px] text-[#2b2f32] font-semibold text-white 
      flex items-center text-center
      transition-all duration-300 z-30
    "
  >
   Improve flexibility, reduce stress, and enhance body control with calming yoga and Pilates sessions led by certified instructors
  </a>


<div className="flex justify-center mt-5">
  <a
    href="#"
    className="
      text-[18px] text-white #7d8082ff mt-1 font-semibold bg-transparent border border-[#7d8082ff]  h-10 w-35
      flex items-center justify-center
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 delay-200
    "
  >
    View Details
  </a>
  </div>


</div>

                 
          </div>

            {/* CARD 5 */}
            <div style={{ backgroundImage: `url(${img5})` }}
               className="lg:h-110 lg:w-180 h-60 w-90 shrink-0 bg-cover bg-center relative group">

          <div className="absolute inset-0 bg-black/50"></div>

           <img src={icon} className="w-35 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
           
<div className=" absolute bottom-5 z-10  left-1/2 -translate-x-1/2 text-[17px] font-bold text-white"><h1 className="mt-20">Strength & Conditioning</h1></div>

<div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#F34F3A] to-transparent opacity-90 blur-8xl"></div>

<div className="
                   absolute inset-0 bg-[#F34F3A]
                   opacity-0 group-hover:opacity-100 
                   transition-opacity duration-300 
                 "></div>


<div className="
    absolute top-1/3
    opacity-0  -translate-y-1/2
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300
    text-white 
  ">

<a
    href="#"
    className="
      text-[17px] text-[#2b2f32] font-semibold text-white 
      flex items-center text-center
      transition-all duration-300 z-30
    "
  >
   Improve flexibility, reduce stress, and enhance body control with calming yoga and Pilates sessions led by certified instructors
  </a>


<div className="flex justify-center mt-5">
  <a
    href="#"
    className="
      text-[18px] text-white #7d8082ff mt-1 font-semibold bg-transparent border border-[#7d8082ff]  h-10 w-35
      flex items-center justify-center
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 delay-200
    "
  >
    View Details
  </a>
  </div>


</div>

                 
          </div>

            {/* CARD 6 */}
            <div style={{ backgroundImage: `url(${img6})` }}
               className="lg:h-110 lg:w-180 h-60 w-90 shrink-0 bg-cover bg-center relative group">

          <div className="absolute inset-0 bg-black/50"></div>

           <img src={icon} className="w-35 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
           
<div className=" absolute bottom-5 z-10  left-1/2 -translate-x-1/2 text-[17px] font-bold text-white"><h1 className="mt-20">Strength & Conditioning</h1></div>

<div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#F34F3A] to-transparent opacity-90 blur-8xl"></div>

<div className="
                   absolute inset-0 bg-[#F34F3A]
                   opacity-0 group-hover:opacity-100 
                   transition-opacity duration-300 
                 "></div>


<div className="
    absolute top-1/3
    opacity-0  -translate-y-1/2
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300
    text-white 
  ">

<a
    href="#"
    className="
      text-[17px] text-[#2b2f32] font-semibold text-white 
      flex items-center text-center
      transition-all duration-300 z-30
    "
  >
   Improve flexibility, reduce stress, and enhance body control with calming yoga and Pilates sessions led by certified instructors
  </a>


<div className="flex justify-center mt-5">
  <a
    href="#"
    className="
      text-[18px] text-white #7d8082ff mt-1 font-semibold bg-transparent border border-[#7d8082ff]  h-10 w-35
      flex items-center justify-center
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 delay-200
    "
  >
    View Details
  </a>
  </div>


</div>

                 
          </div>
          </div>
        </div>
      </div>

<Swiper
  spaceBetween={20}
  slidesPerView={1}
  pagination={{ clickable: true }}
  modules={[Pagination, Autoplay, EffectFade]}
  effect="fade"               
  autoplay={{ 
    delay: 3000,               
    disableOnInteraction: false
  }}
  fadeEffect={{ crossFade: true }}  
  className="mySwiper pb-20"
>
  {cards.map((card, i) => (
    <SwiperSlide key={i}>
      <div
       style={{ backgroundImage: `url(${card.baseImg})` }}
              className="lg:h-110 lg:w-180 h-60 w-[100%] shrink-0 bg-cover bg-center relative group lg:hidden block"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
      >
      <div className="absolute inset-0 bg-black/50"></div>
          <img src={icon} className="lg:w-35 w-25 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

        {/* Description */}
        <h1 className=" absolute bottom-10 z-10  left-1/2 -translate-x-1/2 text-[16px] font-bold text-white">
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
