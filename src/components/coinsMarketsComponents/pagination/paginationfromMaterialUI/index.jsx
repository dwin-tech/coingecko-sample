import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded({countPage}) {
  return (
    <Stack spacing={2}>
      <Pagination count={countPage} variant="outlined" shape="rounded" />
    </Stack>
  );
}
