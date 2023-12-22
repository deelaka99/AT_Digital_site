import React from "react";
import PC from "../assets/pictures/pc.png";
import Magnifier from "../assets/pictures/magnifier.png";

function Services() {
  return (
    <div className="w-full mobile:h-[180vh]">
      {/* Service 1 fraction:- web & mobile app development part */}
      <div className="bg-white w-full mobile:h-[90vh]">
        {/* for PC image */}
        <div className="w-full mobile:h-[40vh] mobile:px-2 mobile:py-2 flex items-center justify-center">
          <img src={PC} alt="PC" className="mobile:h-3/5 mobile:w-3/5" />
        </div>
        {/* for web & mobile app development part */}
        <div className="w-full mobile:h-[50vh] flex flex-col items-center justify-center mobile:px-3 mobile:py-2">
          <h1 className="text-center font-inter font-semibold text-primary mobile:text-2xl">
            Web & Mobile App Development
          </h1>
          <br />
          <p className="text-center font-inter text-txtColor mobile:text-text-md">
            Your web and mobile Apps are pieces of the puszzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <br />
          <button className="bg-secondary text-center font-inter font-semibold mobile:text-sm text-accent1 mobile:py-3 mobile:px-6 rounded shadow-md active:bg-txtColorLight">
            LEARN MORE
          </button>
        </div>
      </div>
      {/* Service 2 fraction:- Digital strategy part */}
      <div className="w-full mobile:h-[90vh]">
        {/* for magnifier image */}
        <div className="w-full mobile:h-[40vh] mobile:px-2 mobile:py-2 flex items-center justify-center">
          <img
            src={Magnifier}
            alt="Magnifier"
            className="mobile:h-4/5 mobile:w-4/5"
          />
        </div>
        {/* for web & mobile app development part */}
        <div className="w-full mobile:h-[50vh] flex flex-col items-center justify-center mobile:px-3 mobile:py-2">
          <h1 className="text-center font-inter font-semibold text-primary mobile:text-2xl">
            Digital Strategy Consulting
          </h1>
          <br />
          <p className="text-center font-inter text-txtColor mobile:text-text-md">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <br />
          <button className="bg-secondary text-center font-inter font-semibold mobile:text-sm text-accent1 mobile:py-3 mobile:px-6 rounded shadow-md active:bg-txtColorLight">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
export default Services;
