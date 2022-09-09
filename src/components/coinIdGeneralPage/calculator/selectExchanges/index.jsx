import React, { useMemo } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import style from "./style.module.scss";

export default function SelectAutoWidth({ cours, setCours, obj }) {
  const arrayOfCours = obj ? Object.keys(obj) : [];

  const array = useMemo(() => {
    return arrayOfCours.map((e) => {
      return (
        <MenuItem key={e.id} value={e} className={style.coinSymbol}>
          {e}
        </MenuItem>
      );
    });
  }, [arrayOfCours]);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }} className={style.selectCours}>
        <InputLabel
          id="demo-simple-select-autowidth-label"
          className={style.coinSymbol}
        >
          {cours}
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={cours}
          onChange={(e) => setCours(e.target.value)}
          autoWidth
          label="Age"
          className={style.coinSymbol}
        >
          {array}
        </Select>
      </FormControl>
    </div>
  );
}

SelectAutoWidth.propTypes = {
  cours: PropTypes.string.isRequired,
  setCours: PropTypes.func.isRequired,
  obj: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
