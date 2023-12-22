import React from "react";
import Girl from "../assets/pictures/girl.jpg";

function Home() {
  return (
    <div className="w-full mobile:h-[100vh]">
      {/* Home fraction 1 for navbar gap filling */}
      <div className="w-full mobile:h-[10vh] flex items-center justify-center"></div>
      {/* Home fraction 2 for girl image */}
      <div className="w-full mobile:h-[40vh] flex items-center justify-center">
        {/* In here, i flipped the image using 'transform scale-x-[-1]' classes*/}
        <img
          className="h-full w-full transform scale-x-[-1]"
          src={Girl}
          alt="girl"
        />
      </div>
      {/* Home fraction 3 for intro paragraph */}
      <div className="bg-gradient-to-r from-dark to-analogous2  w-full mobile:h-[50vh] mobile:px-6 mobile:py-7">
        <p className="font-inter font-bold text-accent1 mobile:text-4xl">
          We Crush Your
          <br />
          Competitors,
          <br />
          Goals, And Sales
          <br />
          Records -Without
          <br />
          The B.S
        </p>
        <p>&nbsp;</p>
        <button className="bg-secondary font-inter font-semibold mobile:text-sm text-accent1 mobile:py-3 mobile:px-6 rounded shadow-md active:bg-txtColorLight">
          GET FREE CONSULTATION
        </button>
      </div>
    </div>
  );
}

export default Home;
