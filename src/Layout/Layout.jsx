import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "./../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ flex: 1 }} className="min-h-[90vh]">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
