import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderContainer from "./container/headerContainer";
import Footer from "./components/footer";
import ComingSoon from "./components/comingSoon";
import TreeComponents from "./components/threeComponents";
import SecondPage from "./components/secondPage/index";

function App() {
  return (
    <div>
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<TreeComponents />} />
        <Route path="/coins/:id" element={<SecondPage />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
