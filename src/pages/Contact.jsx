import React, { useEffect, useState } from "react";

import iconCheck from "/assets/shared/desktop/white-icon-check.svg";
import bgCircle from "/assets/shared/desktop/bg-pattern-circle.svg";

import tesla from "/assets/shared/desktop/SJBlueIcons/tesla.svg";
import google from "/assets/shared/desktop/SJBlueIcons/google.svg";
import microsoft from "/assets/shared/desktop/SJBlueIcons/microsoft.svg";
import nvidia from "/assets/shared/desktop/SJBlueIcons/nvidia.svg";
import oracle from "/assets/shared/desktop/SJBlueIcons/oracle.svg";
import hewlett from "/assets/shared/desktop/SJBlueIcons/hewlett-packard.svg";

const Contact = () => {
  const clientsList = [tesla, microsoft, hewlett, oracle, google, nvidia];
  const localStorageState = JSON.parse(window.localStorage.getItem("formData"));
  const initialFormData = {
    Name: "",
    "Email Address": "",
    "Company Name": "",
    Title: "",
    Message: "",
    checked: true,
  };
  const [formData, setFormData] = useState(
    localStorageState || initialFormData
  );
  const [errorMessage, setErrorMessage] = useState("");
  const successMessage =
    "Your message was sent successfully we'll get in touch with you shortly.";

  let formElements = [...Object.keys(formData)];

  const handleChecked = (e) => {
    e.preventDefault();
    setFormData({ ...formData, checked: !formData.checked });
  };

  const handleChangeValue = (event, element) => {
    switch (element) {
      case "Name":
        setFormData({ ...formData, Name: event.target.value });
        break;
      case "Email Address":
        setFormData({ ...formData, "Email Address": event.target.value });
        break;
      case "Company Name":
        setFormData({ ...formData, "Company Name": event.target.value });
        break;
      case "Title":
        setFormData({ ...formData, Title: event.target.value });
        break;
      case "Message":
        setFormData({ ...formData, Message: event.target.value });
        break;
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (formData["Name"].length < 1) {
      setErrorMessage("Name field can't be empty");
    } else if (formData["Email Address"].length < 1) {
      setErrorMessage("Email Address field can't be empty");
    } else if (!formData["Email Address"].includes("@")) {
      console.log("Wrong email format");
      setErrorMessage("Please use a valid Email Address");
    } else if (formData["Message"].length < 1) {
      setErrorMessage("Message field can't be empty");
    } else {
      setFormData(initialFormData);
      setErrorMessage("");
      alert(successMessage);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="tablet:mx-[9.7rem] laptop:mx-[16.5rem]">
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
        className="text-h1sm text-SJBlue font-serif
                   mobile:text-center mobile:text-h3l
                   mobile:w-[32.7rem] mobile:mx-auto
                   mobile:mb-[4rem] 
                   tablet:text-h1sm tablet:text-center
                   tablet:w-[57.3rem] tablet:h-[17.8rem] 
                   tablet:mt-[7.5rem] tablet:mb-[5.4rem]
                   laptop:text-start  laptop:mx-0
                   laptop:mb-[4.3rem] laptop:w-[73.0rem] 
                   laptop:h-[13.3rem] laptop:mt-[8.2rem]"
      >
        Submit a help request and we'll get in touch shortly.
      </h1>
      <div
        className="flex mobile:flex-col mobile:items-center 
                      tablet:items-center laptop:flex-row 
                      laptop:justify-center gap-x-[12.4rem]"
      >
        <form
          action=""
          className="mobile:w-[32.7rem] tablet:w-[44.5rem]"
          onSubmit={handleSumbit}
        >
          {formElements.map((element, i) => {
            // console.log(element);
            if (element !== "checked") {
              return (
                <div key={i}>
                  <input
                    id={element}
                    placeholder={element}
                    type={element === "Message" ? "textarea" : "text"}
                    value={formData[element]}
                    className={`pl-[2.0rem] text-body ${
                      element === "Message"
                        ? "h-[8.9rem] mt-0 pb-[2.4rem]"
                        : "h-[4.2rem]"
                    } ${
                      element === "Title"
                        ? "mb-[1.2rem]"
                        : errorMessage && errorMessage.includes(element)
                        ? "mb-0 border-[#FF0000] placeholder:text-[#FF0000] placeholder:text-opacity-[0.5]"
                        : "mb-[2.4rem]"
                    } mobile:w-[32.7rem] tablet:w-[44.5rem]
                     text-SJBlue bg-[#EDF3F8] outline-none 
                     border-b-[2px] border-solid border-opacity-[0.15]
                    border-SJBlue focus:border-opacity-70`}
                    onChange={() => handleChangeValue(event, element)}
                  />
                  {element === "Name" ? (
                    <p
                      className={`text-[#FF0000] text-body ${
                        !errorMessage.includes("Name")
                          ? "hidden"
                          : "visible text-opacity-[0.5]"
                      }`}
                    >
                      {errorMessage}
                    </p>
                  ) : element === "Email Address" ? (
                    <p
                      className={`text-[#FF0000] text-body ${
                        !errorMessage.includes("Email")
                          ? "hidden"
                          : "visible text-opacity-[0.5]"
                      }`}
                    >
                      {errorMessage}
                    </p>
                  ) : element === "Message" ? (
                    <p
                      className={`text-[#FF0000] text-body ${
                        !errorMessage.includes("Message")
                          ? "hidden"
                          : "visible text-opacity-[0.5]"
                      }`}
                    >
                      {errorMessage}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              );
            }
          })}

          <div className="flex gap-x-[2.6rem] items-center mt-[24px]">
            <button
              className={`${
                formData.checked ? "bg-DarkPink" : "bg-SJBlue opacity-[0.25]"
              }  appearance-none mobile:w-[3.5rem] mobile:h-[2.2rem] 
                  tablet:w-[2.6rem] tablet:h-[2.1rem] cursor-pointer relative`}
              onClick={handleChecked}
            >
              <img
                src={iconCheck}
                alt="icon-check"
                className={`absolute left-[4px] top-[6px] ${
                  formData.checked ? "visible" : "invisible"
                }`}
              />
            </button>

            <p className="self-center text-body">
              Stay up-to-date with company announcements and updates to our API
            </p>
          </div>
          <button
            type="submit"
            className="w-[15.2rem] h-[4.8rem] text-body 
                       border-solid border-[1px] rounded-[2.4rem]
                       mt-[2.4rem] border-SJBlue text-SJBlue
                       hover:bg-SJBlue hover:text-white"
          >
            Submit
          </button>
        </form>

        <div
          className="flex flex-col mobile:items-center mobile:mt-[8rem]
                     mobile:mb-[8rem] tablet:mt-[6.4rem] 
                     only:laptop:items-start laptop:mt-[1.5rem]"
        >
          <h4
            className="text-h4 mobile:mb-[4rem] mobile:text-center 
                       tablet:mb-[4rem] laptop:text-start font-serif
                       text-SJBlue mobile:w-[32.7rem] tablet:w-[44.4rem] 
                       opacity-75"
          >
            Join the thousands of innovators already building with us
          </h4>
          <div
            className="grid mobile:grid-cols-2 tablet:grid-cols-3 
                       gap-x-[6.2rem] gap-y-[4.7rem] 
                       h-[10.3rem] laptop:mt-[4rem]"
          >
            {clientsList.map((client) => {
              return (
                <img
                  key={client}
                  src={client}
                  alt={`${client} logo`}
                  className="fill-SJBlue hover:fill-SJBlue"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
