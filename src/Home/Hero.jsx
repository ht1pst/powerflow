import icon from "../assets/logo.webp";
import bg from "../assets/4.webp";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import man from "../assets/c1.webp";
import { useState } from "react";
import { motion } from "framer-motion";

function Hero(){

    const [menuOpen, setMenuOpen] = useState(false);
     const [mobileMenu, setMobileMenu] = useState(false);

    return(
<section 
 style={{ backgroundImage: `url(${bg})` }}
  className="min-h-screen bg-cover bg-center bg-no-repeat relative"
>
 <motion.div className="absolute lg:bottom-0 bottom-32 left-1/2 -translate-x-1/2 z-10 w-80 lg:w-200  "
 initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
 ><img src={man} alt="" className="hidden lg:block"  />
 <img src={man} alt="" className="lg:hidden block"  />
 </motion.div>

<div className="lg:hidden block absolute bottom-5 text-white px-[20px]">
<div className="flex items-center">
  <img
    src={img1}
    alt=""
    className="w-12 h-12 rounded-full "
  />
  <img
    src={img2}
    alt=""
    className="w-12 h-12 rounded-full  -ml-2"
  />
  <img
    src={img3}
    alt=""
    className="w-12 h-12 rounded-full  -ml-2"
  />
</div>
<p className="mt-3 font-bold text-[18px]">2300+</p>
<p className="font-bold text-[15px]">Active Members</p>
</div>


 <header className="flex items-center justify-between bg-[#181919] lg:bg-transparent px-6 lg:px-[90px] h-16  relative z-30">
  {/* Logo */}
  <a href="#">
    <img src={icon} alt="logo" className="w-50 lg:w-57" />
  </a>

  {/* Desktop Nav */}
  <nav className="hidden lg:flex gap-10">
    {["HOME", "ABOUT", "CLASSES"].map((item) => (
      <a
        key={item}
        href="#"
        className="text-[16px] font-bold text-white flex items-center gap-1"
      >
        {item}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="18"
          fill="#fff"
        >
          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
        </svg>
      </a>
    ))}

    <a href="#" className="text-[16px] font-bold text-white">
      PRICING
    </a>
    <a href="#" className="text-[16px] font-bold text-white">
      CONTACT
    </a>
  </nav>

  {/* Desktop Button */}
  <div className="hidden lg:block">
    <button className="text-[15px] font-bold text-white bg-[#F34F3A] w-28 h-10">
      JOIN NOW
    </button>
  </div>

  {/* Mobile Menu Button */}
  <button
    className="lg:hidden text-white"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? (
      // CLOSE ICON
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      // HAMBURGER
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )}
  </button>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="absolute top-20 h-100  left-0 w-full bg-[#181919] flex flex-col items-center gap-4 py-6 lg:hidden">
     <a href="#"   className="w-full max-w-xs text-white text-lg font-bold flex items-center justify-between"
          onClick={() => setMenuOpen(false)}>Home <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#a4a4a4"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span></a>
     <a href="#"    className="w-full max-w-xs text-white text-lg font-bold flex items-center justify-between"
          onClick={() => setMenuOpen(false)}>About<span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#a4a4a4"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span></a>
     <a href="#"    className="w-full max-w-xs text-white text-lg font-bold flex items-center justify-between"
          onClick={() => setMenuOpen(false)}>Classes<span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#a4a4a4"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span></a>
     <a href="#"   className="w-full max-w-xs text-white text-lg font-bold flex items-center justify-between"
          onClick={() => setMenuOpen(false)}>Pricing<span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#a4a4a4"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span></a>
     <a href="#"   className="w-full max-w-xs text-white text-lg font-bold flex items-center justify-between"
          onClick={() => setMenuOpen(false)}>Contact<span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#a4a4a4"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span></a>

      <button className="text-[15px] font-bold text-white bg-[#F34F3A] w-32 h-10">
        JOIN NOW
      </button>
    </div>
  )}
</header>


<div className="flex lg:justify-between flex-col  text-white mt-30 lg:px-[100px] px-[20px] ">
   
     {/* div1 */}
<div>
  <motion.h1 className="lg:w-50 text-[18px] text-[#b0adad] font-bold  #b0adad"
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  > Professional, reliable, and passionate about your health, let us guide you to a stronger, healthier you.</motion.h1>
</div>

 {/* div2 */}
<div className="hidden lg:block"

>
    
<motion.div className="flex items-center"
initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
>
  <img
    src={img1}
    alt=""
    className="w-12 h-12 rounded-full "
  />
  <img
    src={img2}
    alt=""
    className="w-12 h-12 rounded-full  -ml-2"
  />
  <img
    src={img3}
    alt=""
    className="w-12 h-12 rounded-full  -ml-2"
  />
</motion.div>
<p className="mt-3 font-bold text-[18px]">2300+</p>
<p className="font-bold text-[15px]">Active Members</p>
</div>




</div>

<motion.div className="overflow-hidden w-[100%] lg:mt-10 mt-40"
initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
>

  <div className="flex animate-marquee lg:hidden block whitespace-nowrap text-white lg:text-[150px] text-[120px] font-bold"
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  >
    <div className="flex lg:gap-40 gap-5">
      <h1 className="text-[#dc3545]" >Strength Training</h1>
      <h1>Cardio Workout</h1>
      <h1 className="text-[#dc3545]" >Personal Coaching</h1>
      <h1>Muscle Building</h1>
      <h1 className="text-[#dc3545]" >Nutrition Plans</h1>
      <h1>Body Transformation</h1>
    </div>

    {/* duplicate for smooth loop */}
    <div className="flex lg:gap-40 gap-5 ml-50">
      <h1 className="text-[#dc3545]" >Strength Training</h1>
      <h1>Cardio Workout</h1>
      <h1 className="text-[#dc3545]">Personal Coaching</h1>
      <h1>Muscle Building</h1>
      <h1 className="text-[#dc3545]">Nutrition Plans</h1>
      <h1>Body Transformation</h1>
    </div>

  </div>

 <div className="overflow-hidden hidden lg:block">
  <div className="flex animate-marque whitespace-nowrap text-white lg:text-[150px] text-[120px] font-bold">
    
    {/* TRACK */}
    <div className="flex gap-40 pr-40">
      <h1 className="text-[#dc3545]">Strength Training</h1>
      <h1>Cardio Workout</h1>
      <h1 className="text-[#dc3545]">Personal Coaching</h1>
      <h1>Muscle Building</h1>
      <h1 className="text-[#dc3545]">Nutrition Plans</h1>
      <h1>Body Transformation</h1>
    </div>

    {/* DUPLICATE TRACK */}
    <div className="flex gap-40 pr-40">
      <h1 className="text-[#dc3545]">Strength Training</h1>
      <h1>Cardio Workout</h1>
      <h1 className="text-[#dc3545]">Personal Coaching</h1>
      <h1>Muscle Building</h1>
      <h1 className="text-[#dc3545]">Nutrition Plans</h1>
      <h1>Body Transformation</h1>
    </div>

  </div>
</div>



</motion.div> 



</section>

    )
}
export default Hero