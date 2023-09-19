import React from "react";
import Layout from "../Layout/Layout";
import Carosel from "../components/Carosel";
import OptionsAnalysis from "../components/OptionsAnalysis";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Layout>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Carosel />
          <OptionsAnalysis />
          <Contact />
        </div>
      </Layout>
    </>
  );
};

export default Home;
