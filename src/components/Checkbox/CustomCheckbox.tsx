import React from "react";
import { Checkbox } from "@mui/material";

const CustomCheckbox: React.FC<{
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "default"
    | undefined;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  disableRipple?: boolean;
  defaultChecked?: boolean;
  size?: "small" | "medium" | undefined;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: {};
}> = ({
  color,
  checked,
  defaultChecked,
  disabled,
  required,
  disableRipple,
  size,
  icon,
  checkedIcon,
  onChange,
  ...props
}) => {
  return (
    <Checkbox
      size={size}
      icon={icon}
      color={color}
      checked={checked}
      disabled={disabled}
      required={required}
      disableRipple={disableRipple}
      defaultChecked={defaultChecked}
      checkedIcon={checkedIcon}
      onChange={onChange}
      {...props}
    />
  );
};

export { CustomCheckbox };
