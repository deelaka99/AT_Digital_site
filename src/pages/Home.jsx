import React from "react";
import Girl from "../assets/pictures/girl.jpg";

function Home() {
  return (
    <div className="w-full mobile:h-[100vh] tablet:relative">
      {/* Home fraction 1 for navbar gap filling */}
      <div className="w-full mobile:h-[10vh] tablet:h-[8vh] laptop:h-[9vh]"></div>
      {/* Home fraction 2 for girl image */}
      <div className="w-full mobile:h-[40vh] tablet:h-[62vh] laptop:h-[91vh] flex items-center justify-center">
        {/* In here, i flipped the image using 'transform scale-x-[-1]' classes*/}
        <img
          className="h-full w-full transform scale-x-[-1]"
          src={Girl}
          alt="girl"
        />
      </div>
      {/* Home fraction 3 for intro paragraph */}
      <div className="bg-gradient-to-r from-dark to-analogous2 w-full mobile:h-[50vh] tablet:h-[30vh] laptop:h-[40vh] laptop:w-[700px] laptop:absolute laptop:bottom-0 mobile:px-6 mobile:py-7 tablet:px-7 tablet:py-6 laptop:ml-10 laptop:mb-10 laptop:flex laptop:flex-col laptop:justify-center laptop:items-start">
        <p className="font-inter font-bold text-accent1 mobile:text-[36px] mobile:leading-[1.1] tablet:text-[43px] tablet:leading-[1.2] laptop:text-[45px]">
          We Crush Your Competitors, Goals, And Sales Records -Without The B.S
        </p>
        <p>&nbsp;</p>
        <button className="bg-secondary font-inter font-semibold mobile:text-[14px] tablet:text-[16px] laptop:text-[18px] text-accent1 mobile:py-3 mobile:px-6 tablet:py-4 tablet:px-7 rounded shadow-md active:bg-txtColorLight hover:shadow-lg">
          GET FREE CONSULTATION
        </button>
      </div>
    </div>
  );
}

export default Home;
