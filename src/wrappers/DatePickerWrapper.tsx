import React from 'react';
import DatePickers from '../components/DatePicker/datePicker';

export const DatePickerWrapper = () => {
    return(
        <div>
            {/* select = "single" for selecting single date */}
            <DatePickers select="single"/>
            {/* select = "multi" for selecting in a range */}
            <DatePickers select='multi'/>
            {/* select = "single disabled" for disabling the next dates */}
            <DatePickers select='single disabled'/>
            {/* select= "all" for selecting month, date and year  */}
            <DatePickers select='all'/>
        </div>
    ) 
}