import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-[10rem] mb-[10rem] lg:mx-24 sm:mx-5">
        <div className="flex flex-col  items-center w-full">
          <h1 className="text-xl font-semibold">App info</h1>
          <div className="lg:px-12 sm:px-4 mt-4 flex justify-start gap-4 flex-col ">
            <h3 className="text-left lg:px-20 sm:px-2">
              Opstra App is an options analytics app comprising of several tools
              that help to find, analyse and track options trading
              opportunities.
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center w-full sm:mt-10 lg:mt-0">
          <h1 className="text-xl font-semibold">Contact us</h1>
          <div className="lg:px-12 sm:px-4 mt-4 flex justify-start gap-4 flex-col ">
            <h3 className="text-left ">
              We strive our best to provide the best available tools for options
              analysis. If you think we are missing any important features or
              found any errors in the app, please feel free to contact us.
            </h3>
            <div className="flex flex-col justify-start gap-3 ">
              <div className="flex gap-4 text-md font-medium">
                <IoLocationSharp
                  size={25}
                  className="text-blue-500 drop-shadow-2xl"
                />
                Pune, India
              </div>
              <div className="flex gap-4 text-md font-medium">
                <MdEmail size={25} className="text-blue-500 drop-shadow-2xl" />
                opstra@definedge.com
              </div>
              <div className="flex gap-4 text-md font-medium">
                <IoIosCall
                  size={25}
                  className="text-blue-500 drop-shadow-2xl"
                />{" "}
                020-61923200
              </div>
              <div className="flex gap-4 text-md font-medium">
                <FaTwitterSquare
                  size={25}
                  className="text-blue-500 drop-shadow-2xl"
                />
                @Definedge
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
