import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export interface Props{
  dropdownOptions: Array<{label:string,value:string}>,
  countries : string,
  handleChange: void
}

export const DropdownSelect = (props: any) => {
  return (
    <Box>
      <FormControl style={{width: '320px'}} variant='outlined'>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.countries}
          label="Country"
          onChange={props.handleChange}
          variant= 'outlined'
        >
          {props.dropdownOptions.map((data: any) => {
            return <MenuItem key={data.label} value={data.label}> {data.value} </MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
