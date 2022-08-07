import React, { useState } from "react";
import {
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles(() => ({
  errMsgStyle: {
    color: "#c62828",
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export interface DropdownProps {
  dropdownOptions: Array<{ label: string; value: string }>;
  value: string[];
  onChange: (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode
  ) => void;
  variant: "standard" | "outlined" | "filled";
  label: string;
  validateOnFocusOut: boolean;
  checkBox: boolean;
}

export const MultipleDropdownSelect = (props: DropdownProps) => {
  const {
    dropdownOptions,
    value,
    onChange,
    variant,
    label,
    validateOnFocusOut,
    checkBox,
  } = props;
  const classes = useStyles();
  const [errMsg, setErrMsg] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);
  const onBlur = () => {
    let message = "";
    if (validateOnFocusOut) {
      if (value.length <= 1) {
        setErr(true);
        message = "Select morethan one option";
      } else if (value.length > 1) {
        setErr(false);
      } else {
        setErr(false);
      }
      setErrMsg(message);
    }
  };
  return (
    <FormControl style={{ width: "320px" }} variant={variant}>
      <InputLabel
        id="demo-multiple-name-label"
        className={err ? classes.errMsgStyle : ""}
      >
        {label}
      </InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={value}
        onChange={onChange}
        label={label}
        variant={variant}
        onBlur={onBlur}
        error={err}
        MenuProps={MenuProps}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => selected.join(", ")}
      >
        {dropdownOptions.map((data: any) => (
          <MenuItem key={data.label} value={data.value}>
            {checkBox && <Checkbox checked={value.indexOf(data.value) > -1} />}
            <ListItemText primary={data.value} />
          </MenuItem>
        ))}
      </Select>
      {errMsg ? <FormHelperText error> {errMsg} </FormHelperText> : ""}
    </FormControl>
  );
};
