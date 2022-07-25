import * as React from 'react';
import { TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  DateRangePicker,
  DateRange
} from "@mui/x-date-pickers-pro/DateRangePicker";
import Box from "@mui/material/Box";

interface DateProps {
  select?: string;
}

export default function DatePickers(props : DateProps) {
  const [value, setValue] = React.useState<Date | null>(new Date());
  const [rangeValue, setRangeValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {
        props.select === "single disabled" ? (
          <DatePicker
            disableFuture
            label="Select Date"
            value={value}
            onChange={(value) => {
              setValue(value);
            }}
            renderInput={(params:any) => <TextField {...params} />}
          />
        ) : props.select === "single" ? (
          <DatePicker
            views={['day']}
            value={value}
            onChange={(value) => {
              setValue(value);
            }}
            renderInput={(params:any) => <TextField {...params} />}
          />
        ) : props.select === "multi" ? (
          <div>Range picker</div>
          // <DateRangePicker
          // calendars={1}
          // value={value}
          // onChange={(newValue) => {
          //   setRangeValue(newValue);
          // }}
          // renderInput={(startProps, endProps) => (
          //   <React.Fragment>
          //     <TextField {...startProps} />
          //     <Box sx={{ mx: 2 }}> to </Box>
          //     <TextField {...endProps} />
          //   </React.Fragment>
          // )}
          // />
        ) : props.select === "all" ? (
          <DatePicker
            disableFuture
            label="Select Date"
            openTo="year"
            views={['year', 'month', 'day']}
            value={value}
            onChange={(value) => {
              setValue(value);
            }}
            renderInput={(params:any) => <TextField {...params} />}
          />
        ) : null
      }
    </LocalizationProvider>
  );
}
