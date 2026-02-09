import img from "../assets/l4.webp";
import img2 from "../assets/s1.webp";
import { motion } from "framer-motion";
function Section4(){
    return(
        <section className="bg-black lg:h-160 h-270  relative px-[20px]">


            
            <div>
                 <motion.p className="text-[#F34F3A] flex justify-center"
                  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
   transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                 >Why Choose Us</motion.p>

    <motion.h1 className="text-white lg:text-[45px] text-[40px] font-[800] lg:w-160 leading-tight mt-5 flex justify-center mx-auto text-center"
     initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
   transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
     Build Strength, Endurance, and Confidence with Us
    </motion.h1>
            </div>

<div className="flex flex-col lg:flex-row justify-center  items-center lg:gap-18 gap-10 mt-15">

<div className="">
    <motion.div className="relative"
     initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
   transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
        <div className="absolute bottom-0  border-t-transparent border-t-none border-b-white lg:w-140 w-full  h-40 bg-gradient-to-t from-[#F34F3A]   to-transparent opacity-90 blur-8xl "></div>
        
        <img src={img} alt="" className="lg:w-140  lg:h-90" />
        </motion.div>
</div>

<div>

<div className="flex gap-10">
<motion.div
 initial={{ x: -50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
   transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
><h1 className="text-white bg-[#F34F3A] flex justify-center items-center w-16 h-16 text-[40px] rounded-lg">1</h1>
</motion.div>
<motion.div
initial={{ x: 50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
   transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
>
<h1 className="text-white font-bold text-[17px]">Certified Personal Trainers</h1> 
 <p className="text-[#dadadbff]  text-[17px] lg:w-130 mt-3">Train with professionals who guide your every move ensuring proper form, safety, and faster results for your fitness goals.</p>
 </motion.div>
</div>




<div className="flex gap-10 mt-7">
<motion.div
 initial={{ x: -50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
   transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
>
    <h1 className="text-white bg-[#F34F3A] flex justify-center items-center w-16 h-16 text-[40px] rounded-lg">2</h1>
    </motion.div>
<motion.div
initial={{ x: 50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
   transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
>
<h1 className="text-white font-bold text-[17px]">Modern Equipment</h1> 
 <p className="text-[#dadadbff]  text-[17px] lg:w-130 mt-3">Experience cutting-edge machines and functional training tools that make every workout effective, fun, and challenging.</p>
 </motion.div>
</div>



<div className="flex gap-10 mt-7">
<motion.div
initial={{ x: -50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
   transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
><h1 className="text-white bg-[#F34F3A] flex justify-center items-center w-16 h-16 text-[40px] rounded-lg">3</h1>
</motion.div>
<motion.div
initial={{ x: 50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
   transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
>
<h1 className="text-white font-bold text-[17px]">Motivating Environment</h1> 
 <p className="text-[#dadadbff]  text-[17px] lg:w-130 mt-3">Join a supportive community that inspires you to stay consistent, push your limits, and celebrate every milestone along the way.</p>
 </motion.div>
</div>


</div>


</div>

        </section>
    )
}
export default Section4