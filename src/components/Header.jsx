import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { FaMoneyBillWave, FaBlogger, FaUnlockAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{ textDecoration: "none" }}
          className="bg-[#053b50ec] z-50 sticky top-0 shadow-md lg:px-6 sm:px-2 flex justify-center items-center h-16"
        >
          <Container fluid>
            <div className="flex items-center gap-4">
              <button
                onClick={handleShow}
                className="lg:hidden outline-none border-none text-white hover:text-gray-400 "
              >
                <GiHamburgerMenu size={30} />
              </button>
              <Navbar.Brand
                href={"/"}
                className="justify-self-center text-2xl text-white font-semibold"
              >
                <h1 className="font-sans">Opstra Options Analytics</h1>
              </Navbar.Brand>
            </div>
            <Navbar.Offcanvas
              show={show}
              onHide={handleClose}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="w-30"
              style={{ width: "60%" }}
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 text-sm font-sans uppercase font-normal lg:text-white sm:text-black">
                  <NavLink
                    to={"/"}
                    className="px-4 py-[1.2rem] transition duration-300 hover:bg-slate-400 hover:bg-opacity-10  lg:hover:text-white sm:hover:text-black  font-medium lg:text-white flex items-center lg:gap-2 sm:gap-4 sm:w-full lg:w-auto "
                    onClick={handleClose}
                  >
                    <ImHome size={25} className="sm:mr-4 lg:mr-0" />
                    Home
                  </NavLink>

                  <NavLink
                    to={"/plans"}
                    className="px-4 py-[1.2rem] transition duration-300 hover:bg-slate-400 hover:bg-opacity-10  lg:hover:text-white sm:hover:text-black  font-medium lg:text-white flex items-center lg:gap-2 sm:gap-4"
                    onClick={handleClose}
                  >
                    <FaMoneyBillWave size={25} className="sm:mr-4 lg:mr-0" />
                    PLANS
                  </NavLink>
                  <NavLink
                    to={"/blog"}
                    className="px-4 py-[1.2rem] transition duration-300 hover:bg-slate-400 hover:bg-opacity-10  lg:hover:text-white sm:hover:text-black  font-medium lg:text-white flex items-center lg:gap-2 sm:gap-4"
                    onClick={handleClose}
                  >
                    <FaBlogger size={25} className="sm:mr-4 lg:mr-0" />
                    BLOG
                  </NavLink>
                  <NavLink
                    to={"/login"}
                    className="px-4 py-[1.2rem] transition duration-300 hover:bg-slate-400 hover:bg-opacity-10  lg:hover:text-white sm:hover:text-black  font-medium lg:text-white flex items-center lg:gap-2 sm:gap-4"
                    onClick={handleClose}
                  >
                    <FaUnlockAlt size={25} className="sm:mr-4 lg:mr-0" />
                    LOGIN/SIGNUP
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
