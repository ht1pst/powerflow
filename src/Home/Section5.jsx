import { useState } from "react";

import img1 from "../assets/l1.webp";
import img2 from "../assets/l2.webp";
import img3 from "../assets/l3.webp";
import img4 from "../assets/l4.webp";
import img5 from "../assets/l5.webp";
import img6 from "../assets/l6.webp";

import icon from "../assets/logo-icon.webp";

function Section5() {
  const [index, setIndex] = useState(1);

 const GAP = 40;

// detect mobile
const isMobile = window.innerWidth < 1024;

// widths
const CARD_WIDTH = isMobile ? window.innerWidth : 720;
const VIEWPORT = isMobile ? window.innerWidth : CARD_WIDTH * 1;

const slideX =
  VIEWPORT / 2 - CARD_WIDTH / 2 - index * (CARD_WIDTH + GAP);

  const TOTAL_CARDS = 6;

const MAX_INDEX = isMobile
  ? TOTAL_CARDS - 1
  : TOTAL_CARDS - 1;

  return (
    <section className="bg-black py-20 overflow-hidden ">
      {/* Header + buttons */}
      <div className="flex flex-col lg:justify-between lg:items-center items-end mb-12 lg:px-30 px-[20px]">
       <div>
            <div>
                <p className="text-[#F34F3A]">Our Services</p>
                <h1 className="text-white lg:text-[45px] text-[42px] font-bold lg:w-160 leading-tight mt-5 ">Classes Designed For You</h1>
                <p className="text-[#dadadbff] mt-4 lg:w-150  text-[17px] leading-[30px]">From personal training and group classes to nutrition guidance and strength coaching, we provide everything you need to achieve lasting fitness results.</p>
            </div>
            <div></div>
        </div>

        <div className="flex gap-4">
          <button
  onClick={() => setIndex((i) => Math.max(i - 1, 0))}
  className="w-10 h-10 text-2xl text-white bg-[#F34F3A]"
>
  ‹
</button>

<button
  onClick={() => setIndex((i) => Math.min(i + 1, MAX_INDEX))}
  className="w-10 h-10 text-2xl text-white bg-[#F34F3A]"
>
  ›
</button>
        </div>
      </div>

      {/* Carousel */}
      <div className="flex justify-center">
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
    </section>
  );
}

export default Section5;
