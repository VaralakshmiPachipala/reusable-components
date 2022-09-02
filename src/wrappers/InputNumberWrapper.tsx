import React, { useState } from "react";
import { InputNumber } from "../components/InputNumber/inputNumber";

export const InputNumberWrapper = () => {
  const [inputValue, setInputValue] = useState<string>("");
  
  return (
    <InputNumber
      label="Emp Id"
      variant="outlined"
      minValue={1}
      maxValue={5}
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
      validateOnFocusOut={true}
    />
  );
};
