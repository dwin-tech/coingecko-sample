import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import style from "./style.module.scss";
import coinsMarketsReducer from "../../../reducers/coins-markets";
import coinsMarketsThunk from "../../../thunks/coins-markets";

function PaginationRounded() {
  const coinsCount = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  function onPageChanged(sortString, pageNumber) {
    coinsMarketsThunk(dispatch, sortString, pageNumber);
  }

  return (
    <Stack spacing={2}>
      <Pagination
        className={style.pagination}
        count={Math.ceil(coinsCount.activeCryptocurrencies / 100)}
        shape="rounded"
        onChange={(event, getSortString, pageNumber) => {
          onPageChanged(getSortString, pageNumber);
          coinsMarketsReducer(dispatch({ type: "CURRENT-PAGE", pageNumber }));
        }}
      />
    </Stack>
  );
}

export default PaginationRounded;
