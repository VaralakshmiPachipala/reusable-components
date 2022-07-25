import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const MultipleDropdownSelect = (props: any) => {
  return (
    <FormControl style={{ width: "320px" }} variant="outlined">
      <InputLabel id="demo-multiple-name-label">Country</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={props.country}
        onChange={props.handleChange}
        label="country"
        variant="outlined"
      >
        {props.dropdownOptions.map((options: any) => {
          return (
            <MenuItem key={options.label} value={options.label}>
              {options.value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
