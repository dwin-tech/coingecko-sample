import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from "./style.module.scss";

const coinData = ["Bitcoin", "Ethereum", "Tether", "USD Coin"];

function SearchBar() {
  const [filteredData, setFilteredData] = useState([]);
  function filter(event) {
    const searchCoin = event.target.value;
    const filterData = coinData.filter((value) => {
      return value.toLowerCase().includes(searchCoin.toLowerCase());
    });
    setFilteredData(filterData);
  }
  return (
    <div className={style.search}>
      <div className={style.searchInputs}>
        <input type="text" placeholder="Search" onChange={filter} />
        <div className={style.searchIcon}>
          <SearchIcon />
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className={style.data}>
          {filteredData.map((coin) => {
            return <p>{coin}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
