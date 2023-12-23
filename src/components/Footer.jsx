import React from "react";
import Logo from "../assets/pictures/logo.png";

function Footer() {
  return (
    <div id="Footer" className="bg-primary w-full mobile:h-[100vh] tablet:h-[40vh] laptop:h-[45vh] mobile:px-3 mobile:py-[2vh] tablet:px-7 tablet:py-2 flex flex-col">
      <div className="laptop:hidden w-full mobile:h-[23vh] tablet:h-[15vh] py-2">
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
      <div className="laptop:hidden w-full mobile:h-[34vh] tablet:h-[20vh] flex mobile:flex-col tablet:flex-row justify-center">
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
        {/* for tablet devices */}
        <div className="h-full w-1/2 py-1">
          <h1 className="mobile:hidden laptop:hidden tablet:block font-inter font-semibold text-white tablet:text-[20px]">
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
          <h1 className="mobile:hidden laptop:hidden tablet:block font-inter font-semibold text-white tablet:text-[20px]">
            Our Services
          </h1>
          <p className="mobile:hidden laptop:hidden tablet:block font-inter  text-white tablet:text-[16px] tablet:leading-[1.5]">
            Social Media Marketing <br />
            Web & Mobile App Development <br />
            Data & Analytics <br />
            Google Marketing Solutions <br />
            Search Engine Optimization
          </p>
        </div>
      </div>
      <div className="tablet:hidden laptop:hidden w-full mobile:h-[33vh] flex flex-col justify-center">
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
      <div className="laptop:hidden w-full mobile:h-[7vh] tablet:h-[5vh] flex mobile:border-t tablet:border-t-2 border-white mobile:py-2">
        <div className="h-full w-1/2 flex items-center mobile:justify-center tablet:justify-end tablet:pr-8">
          <div className="laptop:h-full laptop:w-1/2"></div>
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
      {/* for laptop devices */}
      <div className="mobile:hidden tablet:hidden w-full h-[38vh] laptop:flex laptop:pt-5">
        <div className="h-full w-1/2 laptop:pr-16">
          <img
            src={Logo}
            alt="Logo"
            className="laptop:w-[250px]"
          />
          <p className="font-inter  text-white laptop:text-[16px] laptop:leading-[1.3]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="h-full w-1/2 flex">
          <div className="h-full w-1/2">
            <h1 className="font-inter font-semibold text-white tablet:text-[23px] laptop:leading-[1.9]">
              Our Technologies
            </h1>
            <p className="font-inter  text-white laptop:text-[16px] laptop:leading-[1.8]">
              ReactJS <br />
              Gatsby <br />
              NextJS <br />
              NodeJS <br />
              GraphQL <br />
              Laravel
            </p>
          </div>
          <div className="h-full w-1/2">
            <h1 className="font-inter font-semibold text-white laptop:text-[23px] laptop:leading-[1.9]">
              Our Services
            </h1>
            <p className="font-inter  text-white laptop:text-[16px] laptop:leading-[1.8]">
              Social Media Marketing <br />
              Web & Mobile App Development <br />
              Data & Analytics <br />
              Google Marketing Solutions <br />
              Search Engine Optimization
            </p>
          </div>
        </div>
      </div>
      <div className="mobile:hidden tablet:hidden w-full h-[7vh] laptop:flex">
        <div className="h-full w-1/5"></div>
        <div className="h-full w-3/5 flex laptop:py-3 laptop:border-t-2 border-white">
          <div className="h-full w-1/2 flex items-center tablet:justify-end pr-8">
            <div className="h-full w-1/2"></div>
            <p className="font-inter text-white laptop:text-[18px] active:text-secondary">
              Privacy Policy
            </p>
          </div>
          <div className="h-full w-1/2 flex items-center justify-start pl-8 border-l-2 border-white">
            <p className="font-inter text-white laptop:text-[18px] active:text-secondary">
              Terms & Conditions
            </p>
          </div>
        </div>
        <div className="h-full w-1/5"></div>
      </div>
    </div>
  );
}

export default Footer;
