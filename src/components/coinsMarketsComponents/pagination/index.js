import React from "react";
import { useSelector } from "react-redux";
import PaginationRounded from "./paginationfromMaterialUI";

function Pegination({ currentPage, setCurrentPage }) {
  const pageNumber = [];
  const coinsCount = useSelector((state) => state.coins);
  for (
    let i = 1;
    i <= Math.ceil(coinsCount.active_cryptocurrencies / 100);
    i++
  ) {
    pageNumber.push(i);
  }
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }
  return (
    <div>
      <PaginationRounded countPage={pageNumber.length} />
      {/* {pageNumber.map((number) => (
            <li key={number}>
              <a href="!#" onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          ))}
        </ul> */}
    </div>
  );
}

export default Pegination;
