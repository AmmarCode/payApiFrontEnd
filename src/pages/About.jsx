import React from "react";
import mobileTeamImage from "/assets/about/mobile/image-team-members.jpg";
import tabletTeamImage from "/assets/about/tablet/image-team-members.jpg";
import teamImage from "/assets/about/desktop/image-team-members.jpg";
import bgCircle from "/assets/shared/desktop/bg-pattern-circle.svg";

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="mobile:w-[37.5rem] tablet:w-[768rem] laptop:w-[115.1rem] desktop:w-[144rems] flex flex-col tablet:items-center">
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
          className="mobile:text-h3l mobile:w-[32.7rem] mobile:mx-[2.4rem] 
                     mobile:text-center tablet:text-h2 tablet:mx-[9.7rem] 
                     tablet:text-center tablet:w-[57.3rem] 
                     laptop:text-start laptop:text-h1sm
                     font-serif mt-[8.2rem]  text-SJBlue 
                     laptop:w-[73.0rem] laptop:h-[18.9rem] 
                     laptop:ml-[26.0rem] laptop:mr-[45.0rem]"
        >
          We empower innovators <br></br>by delivering access to the financial
          system
        </h1>

        <div
          className="flex mobile:flex-col mobile:w-[32.7rem] 
                     mobile:mx-[2.4rem] mobile:text-center
                     mt-[5.1rem] tablet:flex-row 
                     tablet:text-start tablet:w-[68.9rem]
                     tablet:mx-[3.9rem] laptop:mx-[26rem] 
                     laptop:w-[92.1rem]"
        >
          <h3
            className="text-h3l mobile:mx-[3.6rem] 
                         mobile:mb-[1.6rem] tablet:mx-0
                         text-SJBlue font-serif 
                         w-[25.5rem] h-[4.0rem]"
          >
            Our Vision
          </h3>
          <p
            className="tablet:w-[45.6rem] tablet:h-[14rem] laptop:w-[63.5rem] 
                      laptop:h-[11.2rem] text-body text-SJBlue opacity-[0.7]"
          >
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.
          </p>
        </div>
        <div
          className="mt-[5.6rem] flex mobile:flex-col mobile:w-[32.7rem] 
                     mobile:mx-[2.4rem] mobile:text-center
                     tablet:flex-row 
                     tablet:text-start tablet:w-[68.9rem]
                     tablet:mx-[3.9rem] laptop:mx-[26rem] 
                     laptop:w-[92.1rem]"
        >
          <h3
            className="text-h3l mobile:mx-[3.6rem] 
                         mobile:mb-[1.6rem] tablet:mx-0
                         text-SJBlue font-serif 
                         w-[25.5rem] h-[4.0rem]"
          >
            Our Business
          </h3>
          <p
            className="tablet:w-[45.6rem] tablet:h-[14rem] laptop:w-[63.5rem] 
                      laptop:h-[11.2rem] text-body text-SJBlue opacity-[0.7]"
          >
            At the core of our platform is the technical infrastructure APIs
            that connect consumers. Our innovative product provides key insights
            for businesses and individuals, as well as robust reporting for
            traditional financial institutions and developers.
          </p>
        </div>

        <img
          src={mobileTeamImage}
          alt="team members image"
          className="self-center mobile:mt-[7.2rem] mobile:block tablet:hidden laptop:hidden desktop:hidden"
        />

        <img
          src={tabletTeamImage}
          alt="team members image"
          className="self-center hidden mobile:hidden tablet:block laptop:hidden desktop:hidden"
        />

        <img
          src={teamImage}
          alt="team members image"
          className="self-center hidden mobile:hidden tablet:hidden laptop:block desktop:min-w-[144rem]"
        />
        <div
          className="flex mobile:flex-col tablet:flex-row
                        tablet:mx-[3.9rem] tablet:w-[68.9rem]
                        gap-[1rem] laptop:mx-[16.5rem] 
                        laptop:gap-[3rem] laptop:my-[7.2rem]"
        >
          <div className="w-[35.0rem] mobile:text-center tablet:text-start">
            <hr
              className="my-[2.4rem] border-[1px] border-solid border-SJBlue 
                         opacity-10 mr-[3.0rem]"
            />
            <p className="tablet:hidden laptop:block text-body text-SJBlue font-sans opacity-[0.7]">
              Team Members
            </p>
            <h1 className="text-h1sm text-DarkPink font-serif ">300+</h1>
            <hr
              className="my-[2.4rem] border-[1px] border-solid border-SJBlue 
                         opacity-10 mr-[3.0rem] mobile:hidden tablet:block"
            />
          </div>
          <div className="w-[35.0rem] mobile:text-center tablet:text-start">
            <hr
              className="my-[2.4rem] border-[1px] border-solid border-SJBlue 
                         opacity-10 mr-[3.0rem] mobile:hidden tablet:block"
            />
            <p className="mobile:mt-[3.2rem] tablet:hidden laptop:mt-0 laptop:block text-body text-SJBlue font-sans opacity-[0.7]">
              Office in the US
            </p>
            <h1 className="text-h1sm text-DarkPink font-serif ">3</h1>
            <hr
              className="my-[2.4rem] border-[1px] border-solid border-SJBlue 
                         opacity-10 mr-[3.0rem] mobile:hidden tablet:block"
            />
          </div>
          <div className="w-[35.0rem] mobile:text-center tablet:text-start">
            <hr
              className="my-[24px] border-[1px] border-solid border-SJBlue 
                         opacity-10 mr-[3.0rem] mobile:hidden tablet:block"
            />
            <p className="mobile:mt-[3.2rem] tablet:hidden laptop:mt-0 laptop:block text-body text-SJBlue font-sans opacity-[0.7]">
              Transaction analyzed
            </p>
            <h1 className="text-h1sm text-DarkPink font-serif ">10M+</h1>
            <hr
              className="my-[2.4rem] border-[1px] border-solid border-SJBlue 
                         opacity-10 mr-[3.0rem]"
            />
          </div>
        </div>

        <div
          className="flex mobile:flex-col mobile:w-[32.7rem] 
                     mobile:mx-[2.4rem] mobile:text-center
                     mt-[5.1rem] tablet:flex-row 
                     tablet:text-start tablet:w-[68.9rem]
                     tablet:mx-[3.9rem] laptop:mx-[26rem] 
                     laptop:w-[92.1rem]"
        >
          <h3
            className="text-h3l mobile:mx-[3.6rem] 
                         mobile:mb-[1.6rem] tablet:mx-0
                         text-SJBlue font-serif 
                         w-[25.5rem] h-[4.0rem]"
          >
            The Culture
          </h3>
          <p
            className="tablet:w-[45.6rem] tablet:h-[14rem] laptop:w-[63.5rem] 
                      laptop:h-[11.2rem] text-body text-SJBlue opacity-[0.7]"
          >
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.{" "}
          </p>
        </div>
        <div
          className="flex mobile:flex-col mobile:w-[32.7rem] 
                     mobile:mx-[2.4rem] mobile:text-center
                     mt-[5.1rem] tablet:flex-row 
                     tablet:text-start tablet:w-[68.9rem]
                     tablet:mx-[3.9rem] laptop:mx-[26rem] 
                     laptop:w-[92.1rem]"
        >
          <h3
            className="text-h3l mobile:mx-[3.6rem] 
                         mobile:mb-[1.6rem] tablet:mx-0
                         text-SJBlue font-serif 
                         w-[25.5rem] h-[4.0rem]"
          >
            The People
          </h3>
          <p
            className="tablet:w-[45.6rem] tablet:h-[14rem] laptop:w-[63.5rem] 
                      laptop:h-[11.2rem] text-body text-SJBlue opacity-[0.7]"
          >
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
