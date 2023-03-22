import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";
import logo from "/assets/shared/desktop/logo.svg";
import menu from "/assets/shared/mobile/menu.svg";
import close from "/assets/shared/mobile/close.svg";

const Navbar = () => {
  const navOptions = ["Pricing", "About", "Contact"];
  const [mobileNavMenuState, setMobileNavMenuState] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMobilNavMenu, setShowMobileNavMenu] = useState(
    windowWidth > 767 ? false : true
  );

  const handleNavMenuState = () => {
    setMobileNavMenuState(!mobileNavMenuState);
  };

  const handleCloseMenu = () => {
    if (windowWidth < 767) {
      setMobileNavMenuState(false);
    } else {
      return;
    }
  };

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    if (windowWidth < 768) {
      setShowMobileNavMenu(true);
    } else {
      setShowMobileNavMenu(false);
    }
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowWidth]);

  return (
    <nav className={`flex justify-center `}>
      <div
        className="mobile:w-[32.7rem] mobile:h-[11.5rem] 
                   tablet:w-[76.8rem] laptop:min-w-[115.1rem] desktop:w-[144rem]"
      >
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            className="cursor-pointer absolute left-[2.4rem] top-[4.3rem]
                       z-10 tablet:left-[4rem] laptop:left-[10rem] desktop:left-[16.5rem]"
            onClick={handleCloseMenu}
          />
        </NavLink>
        <img
          src={menu}
          alt="hamburger menu"
          className={`cursor-pointer ${
            !mobileNavMenuState && showMobilNavMenu ? "visible" : "hidden"
          } absolute right-[2.4rem] top-[5.1rem] z-20`}
          onClick={handleNavMenuState}
        />
        <img
          src={close}
          alt="close icon"
          className={`cursor-pointer ${
            mobileNavMenuState && showMobilNavMenu ? "visible" : "hidden"
          } absolute right-[2.4rem] top-[5.1rem] z-30`}
          onClick={handleNavMenuState}
        />
        {/* border-green-500 border-2 border-solid */}
        <ul
          className={`flex flex-col gap-[3.2rem] 
                      items-center mobile:absolute mobile:h-screen
                      bg-[#1B262F] mobile:left-1/4 mobile:w-3/4
                      ${
                        mobileNavMenuState || !showMobilNavMenu
                          ? "visible"
                          : "hidden"
                      } z-20 opacity-95 tablet:flex-row 
                      tablet:h-[4.8rem] tablet:bg-transparent
                      tablet:absolute tablet:top-[4rem] tablet:right-30
                      tablet:left-[31%] tablet:w-auto laptop:left-[27%]`}
        >
          <hr className="mt-[9.5rem] w-[85%] opacity-[0.15] tablet:hidden" />
          {navOptions.map((navLink) => {
            return (
              <NavLink to={`/${navLink}`} key={uuid()}>
                <li
                  className="text-white 
                             mobile:text-[2rem] font-bold 
                             z-50 text-body
                             tablet:text-LSJBlue tablet:hover:text-SJBlue"
                  onClick={handleCloseMenu}
                >
                  {navLink}
                </li>
              </NavLink>
            );
          })}
          <button
            className="w-[25.6rem] h-[4.8rem] bg-DarkPink
                      laptop:hover:bg-CharmPink
                       text-white font-bold rounded-[2.5rem] 
                       text-body tablet:w-[17.3rem] tablet:ml-[2.5rem] laptop:ml-[30rem] desktop:ml-[43rem]"
          >
            Schedule a Demo
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
