import React from "react";
import { TiTick } from "react-icons/ti";

const Subscription = () => {
  return (
    <>
      <div className="flex mt-16 flex-col lg:gap-28 sm:gap-10">
        <h1 className="lg:text-5xl sm:text-3xl font-bold font-[PT+Serif] text-center">
          We’ve got a strategy that’s ideal for you
        </h1>
        <div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 lg:gap-4 sm:gap-10 lg:mx-16 sm:mx-4 justify-items-center items-start">
            <div className="flex flex-col justify-center items-center lg:gap-6 sm:gap-4">
              <div
                data-aos="zoom-out"
                className="border-4 border-gray-400 shadow-sm rounded-md flex px-4 py-4"
              >
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-bold">BASIC PLAN</h1>
                  <h3 className="text-md font-semibold text-[#053b50ec]">
                    Get started with your strategy journey
                  </h3>
                </div>
                <div className=" lg:ml-4 sm:ml-10">
                  <p className="text-4xl font-semibold">₹0</p>
                </div>
              </div>
              <button className="py-2 lg:px-4 sm:px-5 transition-colors bg-[#053b50ec] border active:bg-[#3b748aec] font-normal border-green-700 text-white rounded-lg hover:bg-[#1c343eec] disabled:opacity-50 flex justify-center items-center shadow-sm font-[poppins]">
                Signup
              </button>
            </div>

            <div className="flex flex-col justify-center items-center lg:gap-6 sm:gap-4">
              <div
                data-aos="zoom-out"
                className=" relative border-4 border-[#053b50ec] shadow-sm rounded-md flex px-4 py-4 xl:h-[12rem] sm:h-auto"
              >
                <div className=" absolute rounded-full bg-[#053b50] top-0 -mt-4 -mr-4 right-0 p-[0.1rem]">
                  <TiTick size={30} className="text-white" />
                </div>
                <div className="flex flex-col gap-2 ">
                  <h1 className="text-lg font-bold">MONTHLY PLAN</h1>
                  <h3 className="text-[1rem] font-semibold text-[#053b50ec]">
                    Professional tools for strategy building
                  </h3>
                </div>
                <div className="ml-4">
                  <p className="text-4xl font-semibold">₹1300</p>
                  <p className="text-lg text-[#053b50ec] font-bold mt-1">
                    +18% GST
                  </p>
                </div>
              </div>
              <button className="py-2 lg:px-4 sm:px-5 transition-colors bg-[#053b50ec] border active:bg-[#3b748aec] font-normal border-green-700 text-white rounded-lg hover:bg-[#1c343eec] disabled:opacity-50 flex justify-center items-center shadow-sm font-[poppins]">
                Subscribe
              </button>
            </div>

            <div className="flex flex-col justify-center items-center lg:gap-6 sm:gap-4 ">
              <div
                data-aos="zoom-out"
                className="relative border-4 border-gray-400 shadow-sm rounded-md flex px-4 py-4 xl:h-[14rem] sm:h-auto"
              >
                <div className=" absolute rounded-full bg-[#053b50] top-0 -mt-6 -mr-4 right-0 p-[0.5rem] text-white font-semibold px-3">
                  SAVE UPTO 23%
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-bold">6 MONTHS PLAN</h1>
                  <h3 className="text-[1.05rem] font-semibold text-[#053b50ec]">
                    Professional tools for strategy building
                  </h3>
                </div>
                <div className="ml-4">
                  <p className="text-4xl font-semibold">₹6000</p>
                  <p className="text-lg text-[#053b50ec] font-bold mt-1">
                    +18% GST
                  </p>
                </div>
              </div>
              <button className="py-2 lg:px-4 sm:px-5 transition-colors bg-[#053b50ec] border active:bg-[#3b748aec] font-normal border-green-700 text-white rounded-lg hover:bg-[#1c343eec] disabled:opacity-50 flex justify-center items-center shadow-sm font-[poppins]">
                Subscribe
              </button>
            </div>

            <div className="flex flex-col justify-center items-center lg:gap-6 sm:gap-4 ">
              <div
                data-aos="zoom-out"
                className="relative border-4 border-gray-400 shadow-sm rounded-md flex px-4 py-4 xl:h-[16rem] sm:h-auto"
              >
                <div className=" absolute rounded-full bg-[#053b50] top-0 -mt-6 -mr-4 right-0 p-[0.5rem] px-4 text-white font-semibold">
                  SAVE UPTO 30%
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-bold">ANNUAL PLAN</h1>
                  <h3 className="text-[1.1rem] font-semibold text-[#053b50ec]">
                    Professional tools for strategy building
                  </h3>
                </div>
                <div className="ml-4">
                  <p className="text-4xl font-semibold">₹11000</p>
                  <p className="text-lg text-[#053b50ec] font-bold mt-1">
                    +18% GST
                  </p>
                </div>
              </div>
              <button className="py-2 lg:px-4 sm:px-5 transition-colors bg-[#053b50ec] border active:bg-[#3b748aec] font-normal border-green-700 text-white rounded-lg hover:bg-[#1c343eec] disabled:opacity-50 flex justify-center items-center shadow-sm font-[poppins]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
