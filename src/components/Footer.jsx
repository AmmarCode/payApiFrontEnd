import React from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";

import logo from "/assets/shared/desktop/footerLogo.svg";
import twitter from "/assets/shared/desktop/twitter.svg";
import facebook from "/assets/shared/desktop/facebook.svg";
import linkedin from "/assets/shared/desktop/linkedin.svg";

const Footer = () => {
  const navOptions = ["Pricing", "About", "Contact"];

  return (
    <div>
      <div
        className="flex flex-col items-center mt-[8rem] 
                      laptop:flex-row laptop:justify-around"
      >
        <h2
          className="w-[32.8rem] text-h3l text-SJBlue 
                       font-serif mb-[3.2rem] text-center 
                       laptop:text-start"
        >
          Ready to start?
        </h2>
        <form
          className="flex flex-col items-center tablet:flex-row 
                     tablet:relative"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            placeholder="Enter email address"
            type="email"
            className="w-[32.7rem] h-[4.8rem] rounded-[2.5rem] outline-none
                       pl-[2.5rem] text-body font-bold mb-[1.6rem]
                       tablet:w-[44.5rem] tablet:pr-[19.3rem]"
          ></input>
          <button
            className="w-[32.7rem] h-[4.8rem] rounded-[2.5rem]
                       bg-DarkPink text-white text-body font-bold
                       tablet:absolute tablet:top-0 tablet:right-0
                       tablet:w-[17.3rem] laptop:hover:bg-CharmPink"
          >
            Schedule a Demo
          </button>
        </form>
      </div>

      <div className="flex justify-center">
        <div
          className="mobile:w-[37.5rem] mobile:h-[35.3rem]
                   bg-MBlue mt-[8rem] flex flex-col 
                   items-center tablet:w-[76.8rem] 
                   tablet:h-[10rem] tablet:flex-row
                   tablet:relative laptop:w-[115.1rem] 
                   desktop:w-[144rem]"
        >
          <NavLink to="/">
            <img
              src={logo}
              alt="logo"
              className="my-[4rem] tablet:ml-[3.9rem] 
                         tablet:mr-[6.4rem] laptop:ml-[10rem]
                         desktop:mr-[16.4rem]"
            />
          </NavLink>
          <ul className="tablet:flex tablet:flex-row tablet:gap-x-[4rem]">
            {navOptions.map((navLink) => {
              return (
                <NavLink to={`/${navLink}`} key={uuid()}>
                  <li
                    className="mobile:mb-[3.1rem] tablet:mb-0
                            text-white text-body 
                             font-bold opacity-70 hover:opacity-100"
                  >
                    {navLink}
                  </li>
                </NavLink>
              );
            })}
          </ul>
          <ul
            className="flex gap-x-[2.4rem] items-center mt-[.4rem] 
                     tablet:ml-[13.7rem] tablet:absolute 
                     tablet:right-[6.4rem] 
                     laptop:right-[10rem] desktop:right-[16.5rem]"
          >
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <img src={facebook} alt="facebook logo" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank">
                <img src={twitter} alt="twitter logo" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank">
                <img src={linkedin} alt="linkedin logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
