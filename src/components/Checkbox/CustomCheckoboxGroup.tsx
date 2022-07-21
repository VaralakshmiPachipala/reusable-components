import React from "react";
import { FormControlLabel, FormGroup } from "@mui/material";
import { Checkbox } from ".";

const CustomCheckoboxGroup: React.FC<{
  checkboxList: {}[];
  orientation?: "row" | "column";
}> = ({ checkboxList, orientation }) => {
  return (
    <div style={{ display: "flex", flexDirection: orientation }}>
      {checkboxList?.length &&
        checkboxList?.map((checkbox: any) => (
          <FormGroup>
            <FormControlLabel
              control={<Checkbox {...checkbox} />}
              label={checkbox.label}
            />
          </FormGroup>
        ))}
    </div>
  );
};

export { CustomCheckoboxGroup };
