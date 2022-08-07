import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles(() => ({
  errMsgStyle: {
    color: "#c62828",
  },
}));

export interface DropdownProps {
  dropdownOptions: Array<{ label: string; value: string }>;
  value: string;
  onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
  variant: "standard" | "outlined" | "filled";
  label: string;
  validateOnFocusOut: boolean;
}

export const DropdownSelect = (props: DropdownProps) => {
  const {
    dropdownOptions,
    value,
    onChange,
    variant,
    label,
    validateOnFocusOut,
  } = props;

  const classes = useStyles();

  const [errMsg, setErrMsg] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);

  const onBlur = () => {
    let message = "";
    if (validateOnFocusOut) {
      if (value === "") {
        message = "Select any one option";
        setErr(true);
      } else if(value.length === 1 ) {
        setErr(false)
      } else {
        setErr(false)
      }
      setErrMsg(message);
    }
  };

  return (
    <FormControl style={{ width: "320px" }} variant={variant}>
      <InputLabel
        id="demo-simple-select-label"
        className={err ? classes.errMsgStyle : ""}
      >
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={onChange}
        variant={variant}
        onBlur={onBlur}
        error={err}
      >
        {dropdownOptions.map((data: any) => {
          return (
            <MenuItem key={data.label} value={data.label}>
              {" "}
              {data.value}{" "}
            </MenuItem>
          );
        })}
      </Select>
      {errMsg ? <FormHelperText error> {errMsg} </FormHelperText> : ""}
    </FormControl>
  );
};
