import React from "react";
import Layout from "../Layout/Layout";
import { PiWarningCircleBold } from "react-icons/pi";
import Subscription from "../components/Subscription";
import PlansTable from "../components/PlansTable";
import Questions from "../components/Questions";

const Plans = () => {
  return (
    <Layout>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="lg:mx-24 sm:mx-4"
      >
        <div className="bg-white flex lg:flex-row sm:flex-col items-center lg:justify-center gap-4 text-xl border-2 py-3 lg:mt-16 sm:mt-5 rounded-lg px-4 lg:mx-24">
          <div className="flex gap-2 lg:items-center">
            <div>
              <PiWarningCircleBold size={40} className="text-red-600" />
            </div>
            <h3 className="text-left">
              If you are{" "}
              <span className="text-red-600 font-medium">
                not a registered opstra user
              </span>
              , please sign up before making the subscription payment
            </h3>
          </div>
          <button className="py-2 lg:px-4 sm:px-5 transition-colors bg-[#053b50ec] border active:bg-[#3b748aec] font-normal border-green-700 text-white rounded-lg hover:bg-[#1c343eec] disabled:opacity-50 flex justify-center items-center shadow-sm font-[poppins]">
            Signup
          </button>
        </div>
        <Subscription />
        <PlansTable />
        <Questions />
      </div>
    </Layout>
  );
};

export default Plans;
