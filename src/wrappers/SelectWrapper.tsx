import React, { useState } from "react";
import { DropdownSelect } from "../components/Select/Select";

const country = [
  { label: "IN", value: "India" },
  { label: "US", value: "USA" },
  { label: "AU", value: "Australia" },
];

export const DropdownSelectWrapper = () => {
  const [countries, setCountries] = useState("");
  const handleChange = (event: React.ChangeEvent<{value: string}>) => {
    setCountries(event.target.value);
  };

  return (
    <DropdownSelect
      dropdownOptions={country}
      countries={countries}
      handleChange={handleChange}
    />
  );
};
