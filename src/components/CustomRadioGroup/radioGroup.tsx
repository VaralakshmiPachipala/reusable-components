import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles: any = makeStyles(() => ({
    errMsgStyles: {
            fontSize: "12px",
            color: "red",
    },
    errWrapper: {
      "& .MuiFormLabel-root": {
        color: "red",
      }
    },
  }));

interface RadioGroupProps {
    label?: string;
    defaultValue?: string | number;
    options: {label: string, value: string}[] | {[value: string]: string | number}[],
    name?: string;
    horizontal?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    value?: string | number;
    radioProps?: {};
    labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
    errorMessage?: string;
}

export const InputRadioGroup = (props: RadioGroupProps) => {
    const { label, defaultValue, name, options = [], horizontal, onChange, value, radioProps, labelPlacement = 'end', errorMessage } = props;
    const classes = useStyles();
  return (
    <FormControl
    className={errorMessage ? classes.errWrapper : ''}
    >
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        defaultValue={defaultValue}
        name={name}
        row={horizontal}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
            <FormControlLabel labelPlacement={labelPlacement} value={option.value} control={<Radio {...radioProps} />} label={option.label} />
        ))}
      </RadioGroup>
      {errorMessage ? <div className={classes.errMsgStyles}>{errorMessage}</div> : <></>}
    </FormControl>
  );
};
