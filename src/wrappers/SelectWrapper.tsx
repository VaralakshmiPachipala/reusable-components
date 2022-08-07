import React, { useState } from "react";
import { DropdownSelect } from "../components/Select/Select";

const country = [
  { label: "IN", value: "India" },
  { label: "US", value: "USA" },
  { label: "AU", value: "Australia" },
];

export const DropdownSelectWrapper = () => {
  const [countries, setCountries] = useState("");
  const onChange = (event: any) => {
    setCountries(event.target.value);
  };

  return (
    <DropdownSelect
      label="Countries"
      dropdownOptions={country}
      value={countries}
      onChange={onChange}
      variant="outlined"
      validateOnFocusOut={true}
    />
  );
};
