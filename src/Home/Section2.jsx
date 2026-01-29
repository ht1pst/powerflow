import img1 from "../assets/s2.webp";
import img2 from "../assets/s3.webp";
function Section2(){
    return(

<section className="bg-black pt-20 lg:h-200 h-460 px-[20px] lg:px-0">
    <div className="flex  flex-col lg:flex-row justify-center gap-20 items-center">
<div>
<h1 className="text-[#F34F3A] font-bold text-[16px]">About Us</h1>
<h1 className="text-white lg:text-[50px] text-[42px] font-bold lg:w-160 w-[100%] leading-tight mt-5">We Help You Build a Stronger, Healthier, and Fitter You</h1>
<p className="text-[#dadadbff] #dadadbff lg:text-[17px] text-[19px] leading-normal lg:w-160 w-[100%] mt-5 ">Founded with a passion for fitness and community, our gym combines state-of-the-art facilities, expert trainers, and personalized programs to help you reach your full potential. Whether you're a beginner or an athlete, our goal is to make every workout enjoyable, safe, and effective.</p>
<button className="text-[15px] font-bold text-white bg-[#F34F3A] lg:w-53 w-60 h-10 mt-5">EXPLORE OUR CLASSES</button>

</div>

<div className="flex   lg:gap-7 gap-5 ">

    <div>
        <img src={img1} alt="" className="w-76 h-32" />
        <div className="bg-[#2d2e2fff] #2d2e2fff flex justify-center flex-col items-center h-32 mt-5">
            <h1 className="lg:text-[50px] text-[35px] text-white font-bold m-0 leading-none">25<span className="text-[#F34F3A]">+</span></h1>
            <p className="text-white text-[15px] lg:w-[100%]  font-bold m-0">Certified Trainers</p>
          
        </div>
    </div>


    <div className="lg:mt-15">
  <div className="bg-[#F34F3A] flex justify-center flex-col items-center h-32">
            <h1 className="lg:text-[50px] text-[35px] text-white font-bold m-0 leading-none">2300+</h1>
            <p className="text-white text-[15px] font-bold m-0">Active Member</p>
            
        </div>
 <img src={img2} alt="" className="w-76 mt-5 h-32" />
    </div>


</div>

    </div>



<div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 mt-10">


<div>
<i className="fas fa-heartbeat text-[#F34F3A] lg:text-4xl text-3xl"></i>
<h1 className="text-white text-[22px] font-bold mt-4 lg:mt-0">Passion</h1>
<p className="text-[#dadadbff]  text-[17px] w-70 mt-4 lg:mt-0">We live and breathe fitness, every rep, every session, every success.</p>
</div>


<div>
   <i className="fas fa-users text-[#F34F3A] lg:text-4xl text-3xl"></i>
   <h1 className="text-white text-[22px] font-bold mt-4 lg:mt-0">Community</h1>
   <p className="text-[#dadadbff]  text-[17px] w-70 mt-4 lg:mt-0">Together we grow stronger, motivation thrives when shared.</p>
</div>


<div>
    <i className="fas fa-dumbbell text-[#F34F3A] lg:text-4xl text-3xl"></i>
    <h1 className="text-white text-[22px] font-bold mt-4 lg:mt-0">Discipline</h1>
    <p className="text-[#dadadbff]  text-[17px] w-70 mt-4 lg:mt-0" >Consistency is key, we push our members to stay committed.</p>
</div>


<div>
    <i className="fas fa-star text-[#F34F3A] lg:text-4xl text-3xl"></i>
    <h1 className="text-white text-[22px] font-bold mt-4 lg:mt-0">Excellence</h1>
    <p className="text-[#dadadbff]  text-[17px] w-70 mt-4 lg:mt-0">We strive for the highest quality in training, service, and results.</p>
</div>




</div>


</section>

    )
}
export default Section2