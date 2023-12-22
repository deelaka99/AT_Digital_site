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
    <div className="w-full mobile:h-[10vh] bg-primary flex fixed top-0 z-50">
      <div className="h-full mobile:w-3/4 flex items-center justify-start mobile:pl-3 mobile:pt-2 mobile:pb-2">
        <img className="mobile:w-4/6" src={Logo} alt="logo" />
      </div>
      <div className="h-full mobile:w-1/4 flex items-center justify-end mobile:pr-5 mobile:pt-2 mobile:pb-2">
        <FontAwesomeIcon
          className="text-white mobile:text-[32px] active:text-secondary"
          icon={faBars}
          onClick={toggleMenu}
        />
      </div>
      {MenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-primary">
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
