import React from "react";
import Logo from "../assets/pictures/logo.png";

function Footer() {
  return (
    <div className="bg-primary w-full mobile:h-[100vh] tablet:h-[40vh] mobile:px-3 mobile:py-[2vh] tablet:px-7 tablet:py-2 flex flex-col">
      <div className="w-full mobile:h-[23vh] tablet:h-[15vh] py-2">
        <img
          src={Logo}
          alt="Logo"
          className="mobile:w-[250px] tablet:w-[270px]"
        />
        <p className="font-inter  text-white mobile:text-[14px] mobile:leading-[1.2] tablet:text-[18px] tablet:leading-[1.3]">
          Your goal is our target. Not anything in between. We use online
          marketing platforms and tools to achieve single objective - your
          business results.
        </p>
      </div>
      <div className="w-full mobile:h-[34vh] tablet:h-[20vh] flex mobile:flex-col tablet:flex-row justify-center">
        {/* for mobile devices */}
        <h1 className="tablet:hidden font-inter font-semibold text-white mobile:text-[21px]">
          Our Technologies
        </h1>
        <p className="tablet:hidden font-inter  text-white mobile:text-[14px] mobile:leading-[1.8]">
          ReactJS <br />
          Gatsby <br />
          NextJS <br />
          NodeJS <br />
          GraphQL <br />
          Laravel
        </p>
        {/* for above tablet devices */}
        <div className="h-full w-1/2 py-1">
          <h1 className="mobile:hidden tablet:block font-inter font-semibold text-white tablet:text-[20px]">
            Our Technologies
          </h1>
          <p className="mobile:hidden tablet:block font-inter  text-white tablet:text-[16px] tablet:leading-[1.5]">
            ReactJS <br />
            Gatsby <br />
            NextJS <br />
            NodeJS <br />
            GraphQL <br />
            Laravel
          </p>
        </div>
        <div className="h-full w-1/2 py-1">
          <h1 className="mobile:hidden tablet:block font-inter font-semibold text-white tablet:text-[20px]">
            Our Services
          </h1>
          <p className="mobile:hidden tablet:block font-inter  text-white tablet:text-[16px] tablet:leading-[1.5]">
            Social Media Marketing <br />
            Web & Mobile App Development <br />
            Data & Analytics <br />
            Google Marketing Solutions <br />
            Search Engine Optimization
          </p>
        </div>
      </div>
      <div className="tablet:hidden w-full mobile:h-[33vh] flex flex-col justify-center">
        <h1 className="font-inter font-semibold text-white mobile:text-[21px]">
          Our Services
        </h1>
        <p className="font-inter  text-white mobile:text-[14px] mobile:leading-[1.8]">
          Social Media Marketing <br />
          Web & Mobile App Development <br />
          Data & Analytics <br />
          Google Marketing Solutions <br />
          Search Engine Optimization
        </p>
      </div>
      <div className="w-full mobile:h-[7vh] tablet:h-[5vh] flex mobile:border-t tablet:border-t-2 border-white mobile:py-2">
        <div className="h-full w-1/2 flex items-center mobile:justify-center tablet:justify-end tablet:pr-8">
          <p className="font-inter text-white mobile:text-[14px] tablet:text-[16px] active:text-secondary">
            Privacy Policy
          </p>
        </div>
        <div className="h-full w-1/2 flex items-center mobile:justify-center tablet:justify-start tablet:pl-8 mobile:border-l tablet:border-l-2 border-white">
          <p className="font-inter text-white mobile:text-[14px] tablet:text-[16px] active:text-secondary">
            Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
