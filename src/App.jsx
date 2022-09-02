import "./App.css";
import React from "react";
<<<<<<< Updated upstream
import Footer from "./components/footer";
=======
import { Route, Routes } from "react-router-dom";
import HeaderContainer from "./container/headerContainer";
import Footer from "./components/footer";
import ComingSoon from "./components/comingSoon";
import TreeComponents from "./components/threeComponents";
import CoinIdComponent from "./components/coinIdComponents";
>>>>>>> Stashed changes

function App() {
  return (
    <div>
<<<<<<< Updated upstream
=======
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<TreeComponents />} />
        <Route path="/coins/:id" element={<CoinIdComponent />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
      </Routes>
>>>>>>> Stashed changes
      <Footer />
    </div>
  );
}

export default App;
