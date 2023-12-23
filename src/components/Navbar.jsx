import React, { useState } from "react";
import Logo from "../assets/pictures/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  return (
    <div className="w-full mobile:h-[10vh] tablet:h-[8vh] laptop:h-[9vh] bg-primary flex fixed top-0 z-50">
      <div className="h-full mobile:w-3/4 tablet:w-2/5 laptop:w-1/4 flex items-center justify-start mobile:pl-3 mobile:pt-2 mobile:pb-2 tablet:pl-7 tablet:pt-4 tablet:pb-4">
        <img className="mobile:w-4/6 tablet:w-4/5 laptop:w-[180px]" src={Logo} alt="logo" />
      </div>
      <div className="h-full mobile:w-1/4 tablet:w-3/5 laptop:w-3/4 flex items-center justify-end mobile:pr-5 mobile:pt-2 mobile:pb-2 tablet:pr-7 tablet:pt-4 tablet:pb-4 tablet:gap-7 laptop:gap-10">
        <FontAwesomeIcon
          className="text-white mobile:text-[32px] active:text-secondary tablet:hidden"
          icon={faBars}
          onClick={toggleMenu}
        />
        <h1 className="mobile:hidden tablet:block text-white tablet:text-[16px] laptop:text-[17px] font-inter tablet:font-medium laptop:font-normal active:text-secondary">SERVICES</h1>
        <h1 className="mobile:hidden tablet:block text-white tablet:text-[16px] laptop:text-[17px] font-inter tablet:font-medium laptop:font-normal active:text-secondary">ABOUT US</h1>
        <h1 className="mobile:hidden tablet:block text-white tablet:text-[16px] laptop:text-[17px] font-inter tablet:font-medium laptop:font-normal active:text-secondary">CONTACT US</h1>
        <h1 className="mobile:hidden tablet:block text-white tablet:text-[16px] laptop:text-[17px] font-inter tablet:font-medium laptop:font-normal active:text-secondary">CAREERS</h1>
      </div>
      {MenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-primary tablet:hidden">
          <div className="w-full h-[10vh] border-b border-white flex items-center justify-between text-white px-6">
            <img className="w-[140px]" src={Logo} alt="Logo" />
            <FontAwesomeIcon
              className="text-2xl active:text-secondary"
              icon={faRectangleXmark}
              onClick={() => {
                setMenuOpen(!MenuOpen);
              }}
            />
          </div>
          <div className="w-full h-[90vh] flex justify-center pt-[7vh]">
            <ul className="text-white text-xl font-inter font-medium leading-10">
              <li className="active:text-secondary">Services</li>
              <li className="active:text-secondary">About Us</li>
              <li className="active:text-secondary">Contact Us</li>
              <li className="active:text-secondary">Careers</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
