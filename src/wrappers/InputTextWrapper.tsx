import React, { useState } from "react";
import { InputText } from "../components/InputText/inputText";

export const InputTextWrapper = () => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <InputText
      label="Name"
      placeholder="Enter name"
      maxLength={6}
      minLength={2}
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
      validateOnFocusOut={true}
    />
  );
};
