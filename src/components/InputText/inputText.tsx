import { TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { ErrorMessages } from "../../constants";

interface TextProps {
  label?: string;
  placeholder?: string;
  variant?: "standard" | "filled" | "outlined" | undefined;
  maxLength?: number;
  minLength?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  validateOnFocusOut: boolean;
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

export const InputText = (props: TextProps) => {
  const {
    label,
    placeholder,
    variant,
    maxLength,
    minLength,
    onChange,
    value,
    validateOnFocusOut,
  } = props;
  const classes = useStyles();

  const [errMsg, setErrMsg] = useState<string>("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength) {
      if (event.target.value.length <= maxLength) {
        onChange(event);
      }
    } else {
      onChange(event);
    }
  };
  const onBlur = () => {
    let message = "";
    if (validateOnFocusOut) {
      if (minLength && (value.length < minLength)) {
          message = ErrorMessages.minValidationMsg(minLength);
      } else if (maxLength && (value.length > maxLength)) {
          message = ErrorMessages.maxValidationMsg(maxLength);
      }
      setErrMsg(message);
    }
  };
  return (
    <Typography
      component={"div"}
      className={`${classes.wrapper} ${errMsg ? classes.errWrapper : ""}`}
    >
      <TextField
        label={label}
        placeholder={placeholder}
        variant={variant}
        onChange={onInputChange}
        value={value}
        onBlur={onBlur}
      />
      {errMsg ? (
        <Typography className={classes.errMsgStyles}>{errMsg}</Typography>
      ) : (
        <></>
      )}
    </Typography>
  );
};
