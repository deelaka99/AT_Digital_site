import React from "react";
import PC from "../assets/pictures/pc.png";
import Magnifier from "../assets/pictures/magnifier.png";

function Services() {
  return (
    <div className="w-full mobile:h-[180vh] tablet:h-[80vh]">
      {/* Service 1 fraction:- web & mobile app development part */}
      <div className="bg-white w-full mobile:h-[90vh] tablet:h-[40vh] tablet:flex tablet:px-7">
        {/* for PC image */}
        <div className="mobile:w-full mobile:h-[30vh] tablet:h-full tablet:w-2/5 mobile:px-2 mobile:py-2 flex items-center justify-center">
          <img src={PC} alt="PC" className="mobile:w-2/3 tablet:w-full" />
        </div>
        {/* for web & mobile app development part */}
        <div className="mobile:w-full mobile:h-[60vh] tablet:h-full tablet:w-3/5 flex flex-col mobile:items-center tablet:items-start justify-center mobile:px-3 mobile:py-2">
          <h1 className="mobile:text-center tablet:text-start font-poppins font-bold text-primary mobile:text-[27px] tablet:text-[30px] tablet:leading-[1.2]">
            Web & Mobile App Development
          </h1>
          <br />
          <p className="mobile:text-center tablet:text-start font-medium font-inter text-txtColor mobile:text-[16px] mobile:leading-[1.2] tablet:text-[18px] tablet:leading-[1.2]">
            Your web and mobile Apps are pieces of the puszzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <br />
          <button className="bg-secondary text-center font-inter font-semibold mobile:text-[14px] tablet:text-[16px] text-accent1 mobile:py-3 mobile:px-6 tablet:py-2 tablet:px-5 rounded shadow-md active:bg-txtColorLight">
            LEARN MORE
          </button>
        </div>
      </div>
      {/* Service 2 fraction:- Digital strategy part */}
      <div className="w-full mobile:h-[90vh] tablet:h-[40vh] tablet:flex tablet:px-7">
        {/* for magnifier image */}
        <div className="mobile:w-full mobile:h-[35vh] tablet:h-full tablet:w-3/5 mobile:px-2 mobile:py-2 flex tablet:flex-col mobile:flex-row mobile:items-center tablet:items-start justify-center">
          {/* for mobiles */}
          <img
            src={Magnifier}
            alt="Magnifier"
            className="mobile:w-4/5 tablet:hidden"
          />
          {/* for tablet onwards */}
          <h1 className="mobile:hidden tablet:block tablet:text-start font-poppins font-semibold text-primary tablet:text-[30px] tablet:leading-[1.2]">
            Digital Strategy Consulting
          </h1>
          <br />
          <p className="mobile:hidden tablet:block tablet:text-start font-medium font-inter text-txtColor tablet:text-[18px] tablet:leading-[1.2]">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <br />
          <button className="mobile:hidden tablet:block bg-secondary text-center font-inter font-semibold mobile:text-[14px] tablet:text-[16px] text-accent1 mobile:py-3 mobile:px-6 tablet:py-2 tablet:px-5 rounded shadow-md active:bg-txtColorLight">
            LEARN MORE
          </button>
        </div>
        {/* for web & mobile app development part */}
        <div className="mobile:w-full mobile:h-[55vh] tablet:h-full tablet:w-2/5 flex mobile:flex-col tablet:flex-row items-center justify-center mobile:px-3 mobile:py-2">
          {/* for mobiles */}
          <h1 className="tablet:hidden text-center font-poppins font-semibold text-primary mobile:text-[27px]">
            Digital Strategy Consulting
          </h1>
          <br />
          <p className="tablet:hidden text-center font-medium font-inter text-txtColor mobile:text-text-[16px] mobile:leading-[1.2]">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <br />
          <button className="tablet:hidden bg-secondary text-center font-inter font-semibold mobile:text-[14px] text-accent1 mobile:py-3 mobile:px-6 rounded shadow-md active:bg-txtColorLight">
            LEARN MORE
          </button>
          {/* for tablets onward */}
          <img
            src={Magnifier}
            alt="Magnifier"
            className="mobile:hidden tablet:block tablet:w-11/12"
          />
        </div>
      </div>
    </div>
  );
}
export default Services;
