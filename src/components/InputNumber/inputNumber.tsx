import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ErrorMessages } from '../../constants';
import { makeStyles } from "@mui/styles";

interface NumberProps {
    maxValue?: number;
    minValue?: number;
    validateOnFocusOut?: boolean;
    value?: number | string;
    label?: string;
    variant?: "standard" | "filled" | "outlined" | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}
const useStyles: any = makeStyles(() => ({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      width: "300px",
      alignItems: "flex-start",
    },
    errMsgStyles: {
      fontSize: "12px",
      color: "red",
    },
    errWrapper: {
      "& .MuiTextField-root label": {
        color: "red",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "red",
        },
      },
      "& .MuiInput-underline:before": {
        borderColor: "red",
      },
      "& .MuiInputBase-root:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "red",
        },
      },
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderColor: "red",
      },
      "& .MuiFilledInput-underline:before": {
        borderColor: "red",
      },
      "& .MuiFilledInput-underline:hover:before": {
        borderColor: "red",
      },
    },
  }));

export const InputNumber = (props: NumberProps) => {
    const { minValue , maxValue, validateOnFocusOut, value } = props;
    const classes = useStyles();
  const [errMsg, setErrMsg] = useState<string>("");

  const onBlur = () => {
    let message = "";
    if (validateOnFocusOut) {
      if (minValue && (Number(value) < minValue)) {
          message = ErrorMessages.minValueValidationMsg(minValue);
      } else if (maxValue && (Number(value) > maxValue)) {
          message = ErrorMessages.maxValueValidationMsg(maxValue);
      }
      setErrMsg(message);
    }
  };

    return (
      <Typography
      component={"div"}
      className={`${classes.wrapper} ${errMsg ? classes.errWrapper : ""}`}
    >
        <TextField type="number" {...props} onBlur={onBlur} />
        {errMsg ? (
          <Typography className={classes.errMsgStyles}>{errMsg}</Typography>
        ) : (
          <></>
        )}
      </Typography>
    );
}