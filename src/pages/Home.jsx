import React from "react";
import { NavLink } from "react-router-dom";

import bgCircle from "/assets/shared/desktop/bg-pattern-circle.svg";
import phoneMockup from "/assets/home/desktop/illustration-phone-mockup.svg";

import tesla from "/assets/shared/desktop/tesla.svg";
import google from "/assets/shared/desktop/google.svg";
import microsoft from "/assets/shared/desktop/microsoft.svg";
import nvidia from "/assets/shared/desktop/nvidia.svg";
import oracle from "/assets/shared/desktop/oracle.svg";
import hewlett from "/assets/shared/desktop/hewlett-packard.svg";

import easyImplement from "/assets/home/desktop/illustration-easy-to-implement.svg";

import simpleUI from "/assets/home/desktop/illustration-simple-ui.svg";

import personal from "/assets/home/desktop/icon-personal-finances.svg";
import banking from "/assets/home/desktop/icon-banking-and-coverage.svg";
import consumer from "/assets/home/desktop/icon-consumer-payments.svg";

const Home = () => {
  return (
    <div className="flex justify-center">
      {/* Landing secttion */}
      {/*  border-green-500 
           border-2 border-solid  */}
      <div
        className="mobile:w-[37.5rem] tablet:w-[76.8rem] 
                      laptop:w-[115rem] desktop:w-[144rem]"
      >
        <section className="mb-[8rem]">
          <img
            src={bgCircle}
            alt="background circle pattern"
            className="absolute min-w-[78rem] min-h-[78rem] 
                       top-[-55rem] right-[-20.2rem] z-0 
                       tablet:min-w-[94.9rem] tablet:min-h-[94.9rem] 
                       tablet:left-[-8.3rem] tablet:top-[-66.3rem]                        
                       laptop:min-w-[78rem] laptop:min-h-[78rem] 
                       laptop:left-[80rem] laptop:top-[-17.2rem]"
          />
          <div
            className="flex mobile:flex-col-reverse 
                       items-center laptop:flex-row
                       laptop:justify-around"
          >
            <div className="laptop:mt-[10.2rem] laptop:flex-col">
              <h1
                className="font-serif text-SJBlue 
                           mobile:text-[3.2rem] 
                           mobile:leading-[3.6rem] 
                           mobile:text-center 
                           mobile:w-[32.7rem] mb-[2.4rem]
                           tablet:w-[57.3rem] tablet:text-h2
                           laptop:text-h1l laptop:text-start"
              >
                Start building with our APIs for absolutely free.
              </h1>
              <form
                className="flex flex-col gap-[1.6rem] items-start
                           tablet:relative laptop:justify-start"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  placeholder="Enter email address"
                  type="email"
                  className="rounded-[2.5rem] mobile:w-[32.7rem] 
                           mobile:h-[4.8rem] pl-[2.7rem] text-body 
                           font-bold outline-none tablet:w-[44.5rem] 
                           tablet:pr-[19.3rem]"
                ></input>
                <button
                  className="rounded-[2.5rem] mobile:w-[32.7rem] 
                                 mobile:h-[4.8rem] bg-DarkPink 
                                 font-sans text-white font-bold 
                                 text-body tablet:w-[17.3rem] 
                                 tablet:absolute tablet:top-0
                                 tablet:right-[6rem] laptop:right-[12.5rem]"
                >
                  Schedule a Demo
                </button>
              </form>
              <p
                className="font-sans text-body text-SJBlue 
                           mobile:text-center mt-[2.4rem] 
                           laptop:text-start laptop:pl-[2rem]"
              >
                Have any questions?
                <NavLink to="/Contact" className="font-bold cursor-pointer">
                  {" "}
                  Contact Us
                </NavLink>
              </p>
            </div>
            <img
              src={phoneMockup}
              alt="phone mockup"
              className="mobile:w-[14.8rem] mobile:h-[24rem]
                         laptop:w-[41rem] laptop:h-[67rem]"
            />
          </div>
        </section>

        {/* Who we are section */}

        <section
          className="relative bg-MBlue flex
                     mobile:min-w-[37.5rem] mobile:h-[67rem]
                     mobile:items-center mobile:flex-col-reverse 
                     mobile:justify-center
                     mobile:gap-y-[4.9rem] tablet:min-w-[76.8rem]
                     laptop:min-w-[115.1rem] desktop:min-w-[144rem] 
                     laptop:flex-row laptop:items-center 
                     laptop:justify-evenly overflow-hidden"
        >
          <img
            src={bgCircle}
            alt="circle"
            className="absolute mobile:min-w-[78rem] mobile:min-h-[78rem] 
                       mobile:top-[-60.2rem] mobile:left-[-20.2rem] 
                       tablet:left-[-0.7rem] tablet:top-[-54.8rem]
                       laptop:left-[-23.5rem] laptop:top-[-35.9rem]"
          />
          <div
            className="flex flex-col items-center
                         text-white laptop:items-start"
          >
            <h2
              className="mobile:text-h3l font-serif mobile:mb-[1.6rem]
                           tablet:text-h2 laptop:text-h1sm"
            >
              Who we work with
            </h2>
            <p
              className="mobile:w-[32.7rem] mobile:text-center 
                          tablet:w-[45.7rem] text-body 
                          opacity-70 mb-[3.2rem] laptop:text-start"
            >
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </p>
            <NavLink to="/About">
              <button
                className="w-[12.9rem] font-bold text-body h-[4.8rem] 
                         rounded-[2.5rem] border-white border border-solid"
              >
                About Us
              </button>
            </NavLink>
          </div>
          <div
            className="grid mobile:grid-cols-2 mobile:gap-y-[4rem] 
                       mobile:gap-x-[2.9rem] tablet:grid-cols-3
                       items-center content-center"
          >
            <img
              src={tesla}
              alt="tesla logo"
              className="self-center justify-self-center"
            />
            <img
              src={microsoft}
              alt="microsoft logo"
              className="self-center justify-self-center"
            />
            <img
              src={hewlett}
              alt="hp logo"
              className="self-center justify-self-center"
            />
            <img
              src={oracle}
              alt="oracle logo"
              className="self-center justify-self-center"
            />
            <img
              src={google}
              alt="google logo"
              className="self-center justify-self-center"
            />
            <img
              src={nvidia}
              alt="nvidia logo"
              className="self-center justify-self-center"
            />
          </div>
        </section>

        {/* Easy implementation section */}

        <section
          className="flex mobile:flex-col items-center 
                            laptop:flex-row laptop:justify-center"
        >
          <img
            src={easyImplement}
            alt="illustration"
            className=" mobile:mt-[4rem] mobile:ml-[2.4rem]"
          />
          <div className="mobile:text-center text-SJBlue laptop:text-start">
            <h2 className="text-h3l font-serif mb-[2.4rem] laptop:text-h2">
              Easy to implement
            </h2>
            <p
              className="text-body font-sans opacity-75 
                         mobile:w-[32.8rem] tablet:w-[57.3rem]
                         laptop:w-[44.5rem]"
            >
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </section>

        {/* Simple UI&UX section */}

        <section
          className="flex mobile:flex-col-reverse items-center
                            laptop:flex-row laptop:justify-center"
        >
          <img
            src={bgCircle}
            alt="circle"
            className="hidden laptop:block laptop:absolute 
                       laptop:left-[100rem] z-0"
          />
          <div className="text-SJBlue mobile:text-center laptop:text-start">
            <h2 className="text-h3l font-serif laptop:text-h2">Simple UI&UX</h2>
            <p
              className="text-sans text-body mobile:w-[32.8rem] 
                         tablet:w-[57.3rem] opacity-70 laptop:w-[44.5rem]"
            >
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </p>
          </div>
          <img
            src={simpleUI}
            alt="Simple UI illustration"
            className="mobile:mt-[4rem] mobile:ml-[2.4rem] z-10"
          />
        </section>

        {/* Finances Details section */}

        <section
          className="flex mobile:flex-col mobile:mt-[4rem] 
                     tablet:flex-row tablet:gap-x-[1rem]
                     tablet:mx-[3.8rem]"
        >
          <div
            className="mobile:mt-[4.8rem] w-[32.8rem]
                          mx-auto text-SJBlue"
          >
            <img src={personal} alt="personal icon" className="mx-auto" />
            <h3
              className="text-center text-h3sm font-sans 
                         font-bold mt-[3.3rem] mb-[1.6rem]"
            >
              Personal Finances
            </h3>
            <p className="text-center opacity-70 text-body">
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.
            </p>
          </div>
          <div
            className="mobile:mt-[4.8rem] w-[32.8rem] 
                          mx-auto text-SJBlue"
          >
            <img src={banking} alt="banking icon" className="mx-auto" />
            <h3
              className="text-center text-h3sm font-sans
                           font-bold mt-[3.3rem] mb-[1.6rem]"
            >
              Banking & Coverage
            </h3>
            <p className="text-center opacity-70 text-body">
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.
            </p>
          </div>
          <div
            className="mobile:mt-[4.8rem] w-[32.8rem] 
                          mx-auto text-SJBlue"
          >
            <img src={consumer} alt="consumer icon" className="mx-auto" />
            <h3
              className="text-center text-h3sm font-sans
                           font-bold mt-[3.3rem] mb-[1.6rem]"
            >
              Consumer Payments
            </h3>
            <p className="text-center opacity-70 text-body">
              It’s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
