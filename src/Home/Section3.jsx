import img from "../assets/3_1.webp";
function Section3(){
    return(
<section
  style={{ backgroundImage: `url(${img})` }}
  className="relative min-h-screen bg-cover bg-center bg-no-repeat lg:h-260 h-600  lg:px-0"
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/70 z-0"></div>

  {/* Content on top */}
  <div className="relative z-10  pt-20 px-[20px] lg:px-0">
    <p className="text-[#F34F3A] flex justify-center">Pricing Plans</p>

    <h1 className="text-white lg:text-[45px] text-[40px] font-bold lg:w-160 w-[100%] leading-tight mt-5 flex justify-center mx-auto text-center">
      Choose the Perfect Plan That Truly Fits You
    </h1>

    <p className="text-[#dadadbff] mt-4 lg:w-150 w-[100%] justify-center mx-auto text-center text-[19px]">
      Flexible membership options for every lifestyle, from single sessions to full packages with world-class facilities.
    </p>
  </div>

<div className="text-white relative flex flex-col lg:flex-row justify-center gap-7 mt-10">
 {/* div1 */}
<div className="bg-black/2 backdrop-blur-sm lg:w-100 w-[90%]  mx-auto  lg:h-135 h-155 relative">
 <div className="absolute bottom-0  border-t-transparent border-t-none border-b-white w-full h-40 bg-gradient-to-t from-[#F34F3A]   to-transparent opacity-90 blur-8xl "></div>

<div className="px-[25px]">
    <h1 className="text-[40px] font-bold">3 Months Plan</h1>
    <p className="text-[#dadadbff]">Perfect for Starters</p>
    <h1 className="text-[#F34F3A] text-[50px] font-bold mt-6">$120 <span className="text-[17px] font-normal">/3 months</span></h1>
    <h1 className="mt-6">Benefits:</h1>

    <h1 className="flex text-[#dadadbff] mt-4 text-[17px] gap-2"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F34F3A"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>Unlimited gym access & equipment use.</h1>

    <h1 className="flex text-[#dadadbff] text-[17px]  gap-2 mt-2"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F34F3A"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>Access to all group fitness classes.</h1>

    <h1 className="flex text-[#dadadbff] text-[17px]  gap-2 mt-2"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F34F3A"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>Free locker & shower usage.</h1>

    <h1 className="flex text-[#dadadbff] text-[17px]  gap-2 mt-2"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F34F3A"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>Monthly body composition tracking.</h1>

    <h1 className="flex text-[#dadadbff] text-[17px]  gap-2 mt-2"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F34F3A"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>10% discount on personal training.</h1>

<div className="flex justify-center mt-10 relative">
     <button className="text-[15px] font-bold text-white bg-[#F34F3A] w-35 h-10">CHOOSE PLAN</button>
</div>
</div>

</div>

 {/* div2 */}
<div className="bg-black/2 backdrop-blur-sm lg:w-100 w-[90%]  mx-auto  lg:h-135 h-155 relative">
 <div className="absolute bottom-0  border-t-transparent border-t-none border-b-white w-full h-40 bg-gradient-to-t from-[#F34F3A]   to-transparent opacity-90 blur-8xl "></div>

<div className="px-[25px]">
    <h1 className="text-[40px] font-bold">6 Months Plan</h1>
    <p className="text-[#dadadbff]">Commit to Your Fitness</p>
    <h1 className="text-[#F34F3A] text-[50px] font-bold mt-6">$210 <span className="text-[17px] font-normal">/6 months</span></h1>
    <h1 className="mt-6">Benefits:</h1>

    <h1 className="flex text-[#dadadbff] mt-4 text-[17px] gap-2"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F34F3A"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>Unlimited gym access & equipment use.</h1>

    <h1 className="flex text-[#dadadbff] text-[17px]  gap-2 mt-2"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F34F3A"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>Access to all group fitness classes.</h1>

    <h1 className="flex text-[#dadadbff] text-[17px]  gap-2 mt-2"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F34F3A"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>Free locker & shower usage.</h1>

    <h1 className="flex text-[#dadadbff] text-[17px]  gap-2 mt-2"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F34F3A"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>Monthly body composition tracking.</h1>

    <h1 className="flex text-[#dadadbff] text-[17px]  gap-2 mt-2"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F34F3A"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>15% off  on personal training sessions.</h1>

<div className="flex justify-center mt-10 relative">
     <button className="text-[15px] font-bold text-white bg-[#F34F3A] w-35 h-10">CHOOSE PLAN</button>
</div>
</div>

</div>


{/* div3 */}
<div className="bg-black/2 backdrop-blur-sm lg:w-100 w-[90%]  mx-auto  lg:h-135 h-155 relative">
 <div className="absolute bottom-0  border-t-transparent border-t-none border-b-white w-full h-40 bg-gradient-to-t from-[#F34F3A]   to-transparent opacity-90 blur-8xl "></div>

<div className="px-[25px]">
    <h1 className="text-[40px] font-bold">12 Months Plan</h1>
    <p className="text-[#dadadbff]">Best Value Package</p>
    <h1 className="text-[#F34F3A] text-[50px] font-bold mt-6">$360 <span className="text-[17px] font-normal">/year</span></h1>
    <h1 className="mt-6">Benefits:</h1>

    <h1 className="flex text-[#dadadbff] mt-4 text-[17px] gap-2"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F34F3A"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>Unlimited gym access & equipment use.</h1>

    <h1 className="flex text-[#dadadbff] text-[17px]  gap-2 mt-2"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F34F3A"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>Access to all group fitness classes.</h1>

    <h1 className="flex text-[#dadadbff] text-[17px]  gap-2 mt-2"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F34F3A"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>Free locker & shower usage.</h1>

    <h1 className="flex text-[#dadadbff] text-[17px]  gap-2 mt-2"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F34F3A"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>Monthly body composition tracking.</h1>

    <h1 className="flex text-[#dadadbff] text-[17px]  gap-2 mt-2"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F34F3A"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></span>25% off  on personal training sessions.</h1>

<div className="flex justify-center mt-10 relative">
     <button className="text-[15px] font-bold text-white bg-[#F34F3A] w-35 h-10">CHOOSE PLAN</button>
</div>
</div>

</div>




</div>

</section>

    )
}
export default Section3