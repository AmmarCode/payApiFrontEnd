import React from "react";
import { v4 as uuid } from "uuid";
import check from "/assets/shared/desktop/icon-check.svg";
import bgCircle from "/assets/shared/desktop/bg-pattern-circle.svg";

import pricingDetails from "../pricingDetails";

const Pricing = () => {
  return (
    <div className="tablet:mx-[3.9rem] laptop:mx-[16.5rem] laptop:gap-x-[3rem]">
      <img
        src={bgCircle}
        alt="background circle pattern"
        className="absolute mobile:min-w-[78rem] mobile:min-h-[78rem]
                   mobile:top-[-61.4rem] left-[15.4rem]
                   tablet:top-[-46.4rem] tablet:left-[50.5rem] 
                   tablet:w-[78rem] tablet:h-[78rem]
                   laptop:top-[-52.7rem] laptop:left-[80rem] 
                   laptop:right-[-17.2rem] z-0 overflow-x-hidden"
      />
      <h1
        className="font-serif mobile:text-h3l
                   mobile:text-center mobile:mb-[4.8rem]
                   tablet:text-h2 tablet:mt-[7.5rem] 
                   tablet:text-center tablet:mb-[6.9rem] 
                   laptop:text-h1sm text-SJBlue 
                   laptop:mb-[7.2rem] laptop:mt-[8.2rem]"
      >
        Pricing
      </h1>
      <div className="grid mobile:grid-cols-1  mobile:justify-items-center  tablet:grid-cols-3 gap-[1rem]">
        {pricingDetails.map((column) => {
          return (
            <div
              className="mobile:text-center laptop:text-start tablet:w-[22.3rem] tablet:h-[61.5rem] laptop:w-[35rem] laptop:h-[58.2rem]"
              key={uuid()}
            >
              <h3
                className="font-serif mobile:text-h4 mobile:w-[32.7] 
                             mobile:mx-[2.4rem] tablet:text-h4 laptop:text-h3l 
                             text-DarkPink mb-[1.6rem]"
              >
                {column.title}
              </h3>
              <p
                className="text-body text-SJBlue opacity-[0.7] 
                           mobile:hidden tablet:block mb-[0.8rem]
                            tablet:w-[22.3rem] tablet:h-[8.4rem]"
              >
                {column.description}
              </p>
              <h1 className="font-serif mobile:text-h1sm tablet:text-h2 laptop:text-h1sm text-SJBlue">
                {column.cost}
              </h1>
              <hr
                className="my-[2.4rem] mobile:w-[32.7rem]  mobile:mx-[2.4rem]
                             border-[0.1rem] border-solid
                             border-SJBlue opacity-10 mr-[3rem]"
              />
              <div className="flex items-center mobile:w-[13.7rem] mx-[12rem] tablet:mx-0">
                <img
                  src={check}
                  alt="icon-check"
                  className={`w-[1.2rem] h-[0.8rem] mr-[2.4rem] ${
                    !column.transaction ? "invisible" : ""
                  }`}
                />
                <p
                  className={`text-body text-SJBlue ${
                    !column.transaction ? "opacity-[0.5]" : "opacity-[0.7]"
                  }`}
                >
                  Transactions
                </p>
              </div>
              <div className="flex items-center mobile:w-[13.7rem] mx-[12rem] tablet:mx-0">
                <img
                  src={check}
                  alt="icon-check"
                  className={`w-[1.2rem] h-[0.8rem] mr-[2.4rem] ${
                    !column.auth ? "invisible" : ""
                  }`}
                />
                <p
                  className={`text-body text-SJBlue ${
                    !column.auth ? "opacity-[0.5]" : "opacity-[0.7]"
                  }`}
                >
                  Auth
                </p>
              </div>
              <div className="flex items-center mobile:w-[13.7rem] mx-[12rem] tablet:mx-0">
                <img
                  src={check}
                  alt="icon-check"
                  className={`w-[12px] h-[0.8rem] mr-[24px] ${
                    !column.identity ? "invisible" : ""
                  }`}
                />
                <p
                  className={`text-body text-SJBlue ${
                    !column.identity ? "opacity-[0.5]" : "opacity-[0.7]"
                  }`}
                >
                  Identity
                </p>
              </div>
              <div className="flex items-center mobile:w-[13.7rem] mx-[12rem] tablet:mx-0">
                <img
                  src={check}
                  alt="icon-check"
                  className={`w-[1.2rem] h-[0.8rem] mr-[2.4rem] ${
                    !column.investment ? "invisible" : ""
                  }`}
                />
                <p
                  className={`text-body text-SJBlue ${
                    !column.investment ? "opacity-[0.5]" : "opacity-[0.7]"
                  }`}
                >
                  Investments
                </p>
              </div>
              <div className="flex items-center mobile:w-[13.7rem] mx-[12rem] tablet:mx-0">
                <img
                  src={check}
                  alt="icon-check"
                  className={`w-[1.2rem] h-[0.8rem] mr-[2.4rem] ${
                    !column.assets ? "invisible" : ""
                  }`}
                />
                <p
                  className={`text-body text-SJBlue ${
                    !column.assets ? "opacity-[0.5]" : "opacity-[0.7]"
                  }`}
                >
                  Assets
                </p>
              </div>
              <div className="flex items-center mobile:w-[13.7rem] mx-[12rem] tablet:mx-0">
                <img
                  src={check}
                  alt="icon-check"
                  className={`w-[1.2rem] h-[0.8rem] mr-[2.4rem] ${
                    !column.liabilities ? "invisible" : ""
                  }`}
                />
                <p
                  className={`text-body text-SJBlue ${
                    !column.liabilities ? "opacity-[0.5]" : "opacity-[0.7]"
                  }`}
                >
                  Liabilities
                </p>
              </div>
              <div className="flex items-center mobile:w-[13.7rem] mx-[12rem] tablet:mx-0">
                <img
                  src={check}
                  alt="icon-check"
                  className={`w-[1.2rem] h-[0.8rem] mr-[2.4rem] ${
                    !column.income ? "invisible" : ""
                  }`}
                />
                <p
                  className={`text-body text-SJBlue ${
                    !column.income ? "opacity-[0.5]" : "opacity-[0.7]"
                  } `}
                >
                  Income
                </p>
              </div>
              <hr className="my-[2.4rem] mobile:w-[32.7rem]  mobile:mx-[2.4rem] mobile:border-[0.1rem] border-solid border-SJBlue opacity-10 mr-[3rem]" />
              <button
                className="w-[16.8rem] text-body h-[4.8rem] border-[0.1rem] font-bold
                                 border-solid border-SJBlue text-SJBlue font-sans
                                 hover:bg-SJBlue hover:text-white rounded-[2.4rem]"
              >
                Request Access
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
