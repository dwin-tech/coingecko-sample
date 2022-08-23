import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import style from "./style.module.scss";
import { currnetPageAction } from "../../../actions/coins-markets";

function PaginationRounded() {
  const currentPage = useSelector((state) => state.coinsMarkets);
  const coinsCount = useSelector((state) => state.coins);
  return (
    <Stack spacing={2}>
      <Pagination
        className={style.pagination}
        count={Math.ceil(coinsCount.activeCryptocurrencies / 100)}
        shape="rounded"
        onClick={() => currnetPageAction(currentPage)}
      />
    </Stack>
  );
}

export default PaginationRounded;
