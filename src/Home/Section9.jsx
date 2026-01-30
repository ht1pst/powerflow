import { useState } from "react";

function Section9() {
  const [activeCategory, setActiveCategory] = useState("membership");
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = {
    membership: [
      {
        question: "What types of memberships do you offer?",
        answer:
          "We offer monthly, quarterly, and annual memberships, as well as personal training and family packages to suit your fitness goals.",
      },
      {
        question: "How can I join the gym?",
        answer:
          "Simply visit our front desk or sign up online. Our team will guide you through choosing the right membership plan for your needs.",
      },
      {
        question: "Do you offer free trials?",
        answer:
          "Yes! We provide a one-day free trial so you can experience our facilities and classes before committing to a membership.",
      },
       {
        question: "Can I freeze or pause my membership?",
        answer:
          "Memberships can be paused for travel or medical reasons. Contact our front desk for details and documentation requirements.",
      },
       {
        question: "Do you have discounts or referral bonuses?",
        answer:
          "Yes! Members who refer friends receive special rewards, and we often run seasonal promotions for new joiners.",
      },
    ],

    training: [
      {
        question: "What kind of equipment do you have?",
        answer:
          "Our gym features state-of-the-art cardio machines, free weights, resistance equipment, functional training zones, and a yoga studio.",
      },
      {
        question: "Do you offer personal training?",
        answer:
          "Yes, certified personal trainers are available for one-on-one or small group sessions to help you reach your fitness goals faster.",
      },
      {
        question: "What classes are included with membership?",
        answer:
          "All memberships include access to yoga, HIIT, spinning, Zumba, pilates, and strength classes—scheduled daily by our instructors.",
      },
      {
        question: "Do you have locker rooms and showers?",
        answer:
          "Yes, we provide clean locker rooms, private showers, and secure storage for all members.",
      },
      {
        question: "Are group classes beginner-friendly?",
        answer:
          "Absolutely! All group classes are designed for all levels, and instructors provide modifications for beginners and advanced members alike.",
      },
    ],

    billing: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept debit/credit cards, bank transfers, and digital wallets. Payments can be made in person or through our online portal.",
      },
      {
        question: "Can I get an invoice or receipt for my membership?",
        answer:
         "Yes, every transaction includes a digital receipt, and you can request a full invoice from our front desk or via email."
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Memberships can be canceled anytime with 7 days’ notice. Refunds depend on the plan type and remaining duration.",
      },
       {
        question: "Are there any additional fees?",
        answer:
          "No hidden fees. Only optional add-ons such as personal training or nutrition consultations have extra charges.",
      },
       {
        question: "How do I update my billing information?",
        answer:
          "You can update your payment details anytime at the front desk or through your member dashboard online.",
      },
    ],
  };

  const changeCategory = (category) => {
    setActiveCategory(category);
    setActiveIndex(null);
  };

  return (
    <section className="bg-[#181919] h-auto pt-20">
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:px-10 px-[20px]">
        {/* LEFT */}
        <div>
          <p className="text-[#F34F3A] font-bold text-[17px]">FAQ</p>
          <h1 className="text-white lg:text-[45px] text-[40px] font-[800] lg:w-150 leading-tight mt-5">
            Answers to Your Questions About Gym & Fitness
          </h1>
        </div>

        {/* RIGHT */}
        <div>
          {/* CATEGORY TABS */}
        <div className="flex flex-col lg:flex-col  lg:items-center">
  <h1
    onClick={() => changeCategory("membership")}
    className={`cursor-pointer lg:text-[16px] text-[18px] lg:w-52 h-12 flex lg:justify-center px-3  items-center transition-all duration-300 ${
      activeCategory === "membership"
        ? "bg-[#F34F3A] text-white font-bold"
        : "text-[#d6d9d9]"
    }`}
  >
    Membership & Plans
  </h1>

  <h1
    onClick={() => changeCategory("training")}
    className={`cursor-pointer lg:text-[16px] text-[18px] lg:w-52 h-12 flex lg:justify-center px-3 items-center transition-all duration-300 ${
      activeCategory === "training"
        ? "bg-[#F34F3A] text-white font-bold"
        : "text-[#d6d9d9]"
    }`}
  >
    Training & Facilities
  </h1>

  <h1
    onClick={() => changeCategory("billing")}
    className={`cursor-pointer lg:text-[16px] text-[18px] lg:w-52 h-12 flex lg:justify-center px-3 items-center transition-all duration-300 ${
      activeCategory === "billing"
        ? "bg-[#F34F3A] text-white font-bold"
        : "text-[#d6d9d9]"
    }`}
  >
    Billing & Policies
  </h1>
</div>


          {/* FAQ LIST */}
          <div className="max-w-xl space-y-4 mt-8">
            {faqData[activeCategory].map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className="border border-t-0 border-l-0 border-r-0 border-b-gray-700 lg:w-140 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setActiveIndex(isActive ? null : index)
                    }
                    className="w-full flex justify-between items-center lg:px-5 py-3"
                  >
                    <span className="text-white text-xl  font-bold text-start">
                      {faq.question}
                    </span>
                    <span className="text-2xl font-bold text-white">
                      {isActive ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ${
                      isActive ? "grid-rows-[1fr] py-3" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden px-4 text-[#a9a6a6ff]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
     <div className="bg-[#F34F3A] flex flex-col lg:flex-row justify-center lg:items-center lg:h-35 h-80 gap-10 lg:gap-50 lg:mt-20  px-[20px]">
       <h1 className="text-white font-bold text-[35px]">Ready to take the first step towards your fitness goals?</h1> 
       <button className="text-[15px] font-bold text-white bg-[#F34F3A] #9d9c9c w-28 h-10 border border-[#c3bdbc]">JOIN NOW</button> 
       </div>
    </section>
  );
}

export default Section9;
