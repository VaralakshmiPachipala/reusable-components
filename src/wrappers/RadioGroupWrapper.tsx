import React from "react";
import { InputRadioGroup } from "../components/CustomRadioGroup/radioGroup";
import { ErrorMessages } from "../constants";

export const RadioGroupWrapper = () => {
  const radioOptions = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <InputRadioGroup
        options={radioOptions}
        label={"Gender"}
        defaultValue={"female"}
        onChange={handleChange}
        value={value}
        horizontal={true}
      />
      <InputRadioGroup
        options={radioOptions}
        label={"Gender (with small size, color default, label placement)"}
        defaultValue={"female"}
        onChange={handleChange}
        value={value}
        horizontal={true}
        radioProps={{
          size: "small",
          color: "default",
        }}
        labelPlacement={'bottom'}
      />
      <InputRadioGroup
        options={radioOptions}
        label={"Gender (with custom size 40, with custom color)"}
        defaultValue={"female"}
        onChange={handleChange}
        value={value}
        horizontal={true}
        radioProps={{
          sx: {
            "& .MuiSvgIcon-root": {
              fontSize: 40,
              color: "success",
            },
            color: "brown",
            "&.Mui-checked": {
              color: "brown",
            },
          },
        }}
      />
      <InputRadioGroup
        options={radioOptions}
        label={"Gender (with err msg)"}
        onChange={handleChange}
        horizontal={true}
        errorMessage={ErrorMessages.radioGrpErrorMsg}
      />
    </>
  );
};
