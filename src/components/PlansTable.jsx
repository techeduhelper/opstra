import React from "react";
import { ImCross } from "react-icons/im";
import { BsCheckLg, BsQuestionCircleFill } from "react-icons/bs";

const PlansTable = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex justify-center items-center flex-col lg:mt-16 sm:mt-10 mb-5 w-full px-2"
      >
        <h1 className="text-xl font-normal text-center">
          All subscriptions are
          <span className="font-bold"> NON-REFUNDABLE</span>. Please
          <span className="font-bold text-[#053b50ec]"> Read FAQs </span>
          carefully before subscribing
        </h1>
        <div className="flex justify-center mt-5 w-full px-2">
          <table className="bg-white border-2 border-black w-full lg:mx-5 sm:mx-1">
            <thead>
              <tr className="bg-gray-200 border-2 border-gray-700">
                <th className="border-2 border-black p-2" />
                <th className="border-2 border-black p-2 text-center text-[#053b50ec] lg:text-xl sm:text-lg">
                  BASIC PLAN FEATURES
                </th>
                <th className="border-2 border-black p-2 text-center text-[#053b50ec] lg:text-xl sm:text-lg">
                  PREMIUM PLAN FEATURES
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-2 border-black text-center hover:bg-gray-200">
                <td
                  colSpan="3"
                  className="border-2 border-black p-2 text-xl font-bold"
                >
                  Options
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Options Portfolio
                  <div>
                    <div>
                      <BsQuestionCircleFill
                        size={20}
                        className="text-gray-400"
                        title="All saved options trades in stragy builder can be seen here"
                      />
                    </div>
                  </div>
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  Maximum of 2 trades across all portfolios
                </td>
                <td className="p-2 text-center font-semibold">Unlimited</td>
              </tr>
              <tr className="border border-black">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Options Backtesting
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <ImCross size={18} className="text-red-600" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>
              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Options Simulator
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <ImCross size={18} className="text-red-600" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>
              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Options Algorithm
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <ImCross size={18} className="text-red-600" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>
              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Options Dashboard
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  15 minutes update
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  Live Data
                </td>
              </tr>
              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  IV Charts
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  EOD
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  Intraday
                </td>
              </tr>
              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Volatility Surface
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <ImCross size={18} className="text-red-600" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Strategy Charts
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <ImCross size={18} className="text-red-600" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Strategy Builder
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Volatility Skew
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <ImCross size={18} className="text-red-600" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Results Calendar
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Historical Results
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>

              <tr className="border-2 border-black text-center hover:bg-gray-200">
                <td
                  colSpan="3"
                  className="border-2 border-black p-2 text-xl font-bold"
                >
                  Open Interest
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Options Open Interest
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  15 minutes update
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  Live Data
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Historical TOI
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <ImCross size={18} className="text-red-600" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Put Call OI Dynamics
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <ImCross size={18} className="text-red-600" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Open Interest Charts
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <ImCross size={18} className="text-red-600" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  PCR
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  15 minutes update
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  Live Data
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Straddles
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <ImCross size={18} className="text-red-600" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Option Chain with Greeks
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  15 minutes update
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  Live Data
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Options Activity
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <ImCross size={18} className="text-red-600" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>

              <tr className="border-2 border-black text-center hover:bg-gray-200">
                <td
                  colSpan="3"
                  className="border-2 border-black p-2 text-xl font-bold"
                >
                  Futures
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Futures Dashboard
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  15 minutes update
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  Live Data
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Futures Open Interest
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  15 minutes update
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Futures Intraday
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <ImCross size={18} className="text-red-600" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Futures Buildup
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  15 minutes update
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  Live Data
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Heatmap
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  15 minutes update
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  Live Data
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  Moving Averages
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  15 minutes update
                </td>
                <td className="border-2 border-black p-2 text-center font-semibold">
                  Live Data
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  MWPL
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>

              <tr className="border-2 border-black text-center hover:bg-gray-200">
                <td
                  colSpan="3"
                  className="border-2 border-black p-2 text-xl font-bold"
                >
                  FII/DII
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  FII/DII Cash Market
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>

              <tr className="border-2 border-black hover:bg-gray-200">
                <td className="p-2 flex  items-center justify-between text-black font-semibold">
                  FII/DII Derivatives
                  <div>
                    <BsQuestionCircleFill
                      size={20}
                      className="text-gray-400"
                      title="All saved options trades in stragy builder can be seen here"
                    />
                  </div>
                </td>
                <td className="border-2 border-black p-2">
                  <div className="flex w-full justify-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex w-full justify-center items-center">
                    <BsCheckLg size={35} className="text-green-600 font-bold" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mx-1 px-1">
          <h1 className="text-xl font-medium mt-4 text-center">
            *Live data here refers to 1-min data + few seconds delay taken for
            IV & greeks calculations.
          </h1>
        </div>
      </div>
    </>
  );
};

export default PlansTable;
