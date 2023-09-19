import React from "react";
import { OptionData } from "../constant/OptionData.js";

const OptionsAnalysis = () => {
  const optionArray = Object.values(OptionData);
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col mt-14">
        <h1 className="lg:text-3xl sm:text-[1.1rem] font-[poppins] flex justify-center items-center font-medium">
          Your first step towards Options Analysis
        </h1>
        <h2 className="text-center lg:text-[1.2rem] mt-1 sm:text-[0.8rem] font-normal">
          Start analysing and building your options strategies
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:px-32 sm:px-4 w-full mt-8">
        {optionArray.map((op, index) => (
          <div
            data-aos="flip-left"
            data-aos-duration="1000"
            key={index}
            className="flex flex-col justify-center sm:mt-4 lg:mt-0 shadow-md"
          >
            <div className="h-full w-full py-1 bg-contain">
              <img src={op.url} alt="" className="w-full " />
            </div>
            <div className="px-2">
              <h1 className="text-2xl mb-1 text-gray-600 font-medium">
                {op.name}
              </h1>
              <h2 className="text-md font-normal text-gray-600">{op.des}</h2>
            </div>
            <button className="text-blue-500 font-semibold text-lg mb-4 mt-4 hover:text-blue-700">
              Explore
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default OptionsAnalysis;
