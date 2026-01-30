import bg from "../assets/9.webp";
function Section6(){
    return(
        <section style={{ backgroundImage: `url(${bg})` }}
          className="lg:min-h-screen h-200 bg-cover bg-center bg-no-repeat relative px-[20px]">
             <div className="absolute inset-0 bg-black/70 z-0"></div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center lg:px-30 pt-35">
                <div>
                <p className="text-[#F34F3A]">BMI Calculator</p>
                <h1 className="text-white lg:text-[45px] text-[40px] font-[800] lg:w-100 leading-tight mt-5 ">Calculate Your Body Mass Index</h1>
                </div>




                <div className=" bg-black/20 backdrop-blur-lg   shadow-lg lg:px-[40px] px-[20px] h-110 lg:w-170 w-[100%] py-[50px] mt-5">
                    <h1 className="text-white text-[18px]">Height (cm)</h1>
                    <input type="text" placeholder="ex:170"  className="bg-trasparent border border-gray-400 h-11 lg:w-150 w-[100%] rounded-lg text-white px-3 mt-3"/>

                     <h1 className="text-white text-[18px] mt-5">Weight (kg)</h1>
                    <input type="text" placeholder="ex:60"  className="bg-trasparent border border-gray-400 h-11 lg:w-150  w-[100%] rounded-lg text-white px-3 mt-3"/>

                    <div className="mt-5 cursor-pointer">
                        <button className="h-10 lg:w-150  w-[100%] rounded-lg bg-[#F34F3A] text-white cursor-pointer">Calculate</button>
                    </div>

                    <h1 className="text-white text-[18px] mt-5">BMI scale</h1>

                    <div className="border border-[#27282B] border-4 lg:w-150  w-[100%] rounded-sm mt-2"></div>

<div className="flex lg:gap-[110px] gap-4 mt-3">
    <p className="text-white text-sm">Underweight</p>
    <p className="text-white text-sm">Normal</p>
    <p className="text-white text-sm">Overweight</p>
    <p className="text-white text-sm">Obese</p>
</div>

                </div>

            </div>
        </section>
    )
}
export default Section6;