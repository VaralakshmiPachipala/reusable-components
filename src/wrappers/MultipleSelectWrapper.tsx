import React, { useState } from "react";
import { MultipleDropdownSelect } from "../components/Select/MultipleSelect";

const countries = [
  { label: "IN", value: "India" },
  { label: "US", value: "USA" },
  { label: "AU", value: "Australia" },
  { label: "CH", value: "China" },
  { label: "JP", value: "Japan" },
];

export const MultipleSelectWrapper = () => {
  const [country, setCountry] = useState([]);

  const handleChange = (event: any) => {
    setCountry(event.target.value);
  };
  return (
    <MultipleDropdownSelect
      dropdownOptions={countries}
      country={country}
      handleChange={handleChange}
    />
  );
};
