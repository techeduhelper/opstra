import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Plans from "./pages/Plans";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import "aos/dist/aos.css";
import AOS from "aos";
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});
import PageNotFound from "./components/PageNotFound";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
