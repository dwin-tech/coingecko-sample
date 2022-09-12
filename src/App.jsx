import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import ComingSoon from "./components/comingSoon";
import TreeComponents from "./components/threeComponents";
import CoinIdGeneralPage from "./components/coinIdGeneralPage/index";
import SearchBar from "./components/searchTopCoins/searchBar";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<TreeComponents />} />
        <Route path="/coins/:id" element={<CoinIdGeneralPage />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
