import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import style from "./style.module.scss";

import coinsMarketsThunk from "../../../thunks/coins-markets";

function PaginationRounded() {
  const coinsCount = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  function onPageChanged(pageNumber) {
    coinsMarketsThunk(dispatch, pageNumber);
  }

  return (
    <Stack spacing={2}>
      <Pagination
        className={style.pagination}
        count={Math.ceil(coinsCount.activeCryptocurrencies / 100)}
        shape="rounded"
        onChange={(event, pageNumber) => {
          onPageChanged(pageNumber);
        }}
      />
    </Stack>
  );
}

export default PaginationRounded;
