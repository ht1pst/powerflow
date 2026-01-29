import icon from "../assets/logo.webp";
function Footer(){
    return(
        <section className="bg-[#181919] pt-20 lg:h-120 h-310 px-[20px]">
            <div className="flex flex-col justify-center lg:gap-28 gap-5">


                <div>
                    <img src={icon} alt="" className="w-65" />
                    <h1 className="text-[#dadadbff]  text-[17px] lg:w-100 mt-7 leading-normal ">Transform your lifestyle with our expert gym services! From strength training to group classes, we help you achieve your fitness goals with personalized, results-driven programs. Professional, reliable, and passionate about your health—let us guide you to a stronger, healthier you.</h1>

<div className="flex gap-3 mt-7 ">
   <div className="bg-[#353535] h-8 w-8 flex justify-center items-center rounded"><a href="#" className="#353535"><i class="fa-brands fa-facebook-f text-white"></i></a></div>
  <div className="bg-[#353535] h-8 w-8 flex justify-center items-center rounded"><a href="#"><i class="fa-brands fa-x-twitter text-white"></i></a></div>
   <div className="bg-[#353535] h-8 w-8 flex justify-center items-center rounded"><a href="#"><i class="fa-brands fa-instagram text-white"></i></a></div>
    <div className="bg-[#353535] h-8 w-8 flex justify-center items-center rounded"><a href="#"><i class="fa-brands fa-youtube text-white"></i></a></div>
    <div className="bg-[#353535] h-8 w-8 flex justify-center items-center rounded"><a href="#"><i class="fa-brands fa-whatsapp text-white"></i></a></div>

</div>

                </div>


                 <div className="">
                    <p className="text-white font-bold text-[18px]">Company</p>
                    <div className="flex flex-col text-[#dadadbff] gap-2 mt-7">
                    <a href="#">Home</a>
                    <a href="#">About Us</a> 
                    <a href="#">Programs</a>
                    <a href="#">Schedule</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                    </div>
                 </div>


                  <div>
                <p className="text-white font-bold text-[18px]">Our Services</p>
                 <div className="flex flex-col text-[#dadadbff] gap-2 mt-7">
                 <a href="#">Strength & Conditioning</a>
                  <a href="#">Personal Training</a>
                   <a href="#">HIIT & Group Training</a>
                    <a href="#">Yoga & Pilates</a>
                     <a href="#">Circuit Training</a>
                      <a href="#">Athletic Performance</a>
                      </div>
                  </div>



                   <div>

                 <h1 className="flex items-center gap-2 text-white font-bold text-[17px] "><span> <i className="fas fa-clock text-[#F34F3A] text-lg"></i></span>We're Open</h1>
                 <p className="text-[#dadadbff]">Monday - Sunday 06.00 - 23.00</p>

                 <h1 className="flex items-center gap-2 text-white font-bold text-[17px] mt-7 "><span><i className="fas fa-location text-[#F34F3A] text-lg"></i></span>Our Location</h1>
                 <p className="text-[#dadadbff]">100 S Main St, New York, NY</p>

                 <h1 className="flex items-center gap-2 text-white font-bold text-[17px] mt-7 "><span><i className="fas fa-message text-[#F34F3A] text-lg"></i></span>Send a Message</h1>
                 <p className="text-[#dadadbff]">contact@powerflow.com</p>
                   </div>
            </div>
        </section>
    )
}
export default Footer