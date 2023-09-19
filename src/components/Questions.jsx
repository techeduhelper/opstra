import React from "react";

const Questions = () => {
  return (
    <>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="flex bg-white mb-5 pt-4 mx-3 flex-col rounded-sm px-2"
      >
        <h1 className="text-2xl text-center font-bold">
          Frequently Asked Questions
        </h1>
        <ol className="list-decimal text-left px-5 text-lg font-medium font-[poppins] mt-5 text-gray-700">
          <li>Are the data updates real-time?</li>
          <h1 className="text-[1.1rem] font-normal mt-2 font-sans mb-6 text-left tracking-wide">
            A: Our data feed is 1-minute data plus few seconds of delay due to
            calculations required for IV, Greeks etc. Open interest data updates
            every 3-minutes.
          </h1>
          <li>What is the difference among the 3 Portfolios in Opstra?</li>
          <h1 className="text-[1.1rem] font-normal mt-2 font-sans mb-6 tracking-wide">
            A: There is no such structural difference between the portfolios,
            they are separated for categorization purposes of the strategies to
            be saved.
          </h1>
          <li>How to download invoice?</li>
          <h1 className="text-[1.1rem] font-normal mt-2 font-sans mb-6 tracking-wide">
            A: Please login to
            <span className="font-[1rem] mt-[0.8rem] block break-words mb-2">
              <a
                href="https://dashboard.definedge.com"
                style={{ color: "black", textDecoration: "none" }}
              >
                https://dashboard.definedge.com
              </a>
            </span>
            & go to payment history and please look for the tab to download
            invoice.
          </h1>
          <li>Whom should I write to in case of further queries?</li>
          <h1 className="text-[1.1rem] font-normal mt-2 font-sans mb-6 tracking-wide">
            A: Please write to our Opstra support team at opstra@definedge.com
            or you can call us at 020-61923200, if you have any queries.
          </h1>
          <li>How many tickers are supported in Back testing?</li>
          <h1 className="text-[1.1rem] font-normal mt-2 font-sans mb-6 tracking-wide">
            A: We support around 53 tickers and avoid other illiquid tickers due
            to lack of liquidity in options which might lead to unreliable back
            testing results.
            <br />
            <br /> Note:- Finnifty options are not consistently liquid, hence,
            they are not added for Back testing; though they are available in
            Strategy Builder to create and analyze live strategies.
          </h1>
          <li>Where do I see my subscription details?</li>

          <h1 className="text-[1.1rem] font-normal mt-2 font-sans mb-6 tracking-wide">
            A: To check the validity of your subscription, please follow the
            given.
            <span className="font-[1rem] mt-[0.5rem] block break-words">
              <a
                href="https://dashboard.definedge.com/subscriptions"
                style={{ color: "black", textDecoration: "none" }}
              >
                https://dashboard.definedge.com/subscriptions
              </a>
            </span>
          </h1>
        </ol>
      </div>
    </>
  );
};

export default Questions;
