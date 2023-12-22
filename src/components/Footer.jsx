import React from "react";
import Logo from "../assets/pictures/logo.png";

function Footer() {
  return (
    <div className="bg-primary w-full mobile:h-[100vh] mobile:px-3 mobile:py-[2vh] flex flex-col">
      <div className="w-full mobile:h-[23vh] py-2">
        <img src={Logo} alt="Logo" className="mobile:w-[250px] mobile:h-[60px]" />
        <p className="font-inter  text-white mobile:text-[16px] mobile:leading-[1.2]">
          Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
        </p>
      </div>
      <div className="w-full mobile:h-[34vh] flex flex-col justify-center">
        <h1 className="font-inter font-semibold text-white mobile:text-[21px]">
          Our Technologies
        </h1>
        <p className="font-inter  text-white mobile:text-[14px] mobile:leading-[1.8]">
          ReactJS <br />
          Gatsby <br />
          NextJS <br />
          NodeJS <br />
          GraphQL <br />
          Laravel
        </p>
      </div>
      <div className="w-full mobile:h-[33vh] flex flex-col justify-center">
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
      <div className="w-full mobile:h-[7vh] flex border-t border-white mobile:py-2">
        <div className="h-full w-1/2 flex items-center justify-center">
          <p className="font-inter text-white mobile:text-[14px] active:text-txtColorSubtle">
            Privacy Policy
          </p>
        </div>
        <div className="h-full w-1/2 flex items-center justify-center border-l border-white">
          <p className="font-inter text-white mobile:text-[14px] active:text-txtColorSubtle">
            Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
