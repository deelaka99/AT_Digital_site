import React from "react";
import Logo from "../assets/pictures/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="w-full mobile:h-[10vh] bg-primary flex">
      <div className="h-full mobile:w-3/4 flex items-center justify-start mobile:pl-3 mobile:pt-2 mobile:pb-2">
        <img className="mobile:w-5/6 mobile:h-5/6" src={Logo} alt="logo" />
      </div>
      <div className="h-full mobile:w-1/4 flex items-center justify-end mobile:pr-3 mobile:pt-2 mobile:pb-2">
        <FontAwesomeIcon
          className="text-white mobile:text-[32px]"
          icon={faBars}
        />
      </div>
    </div>
  );
}

export default Navbar;
