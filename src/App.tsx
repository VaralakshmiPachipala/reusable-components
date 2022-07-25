import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import { DatePickerWrapper } from './wrappers/DatePickerWrapper';
import { InputNumberWrapper } from './wrappers/InputNumberWrapper';
import { InputTextWrapper } from './wrappers/InputTextWrapper';
import { CheckboxWrapper } from "./wrappers/CheckboxWrapper";

const App = () => {
  return (
      <div className="App">
        <ul>
          <li>
            <Link to="/text">Text</Link>
          </li>
          <li>
            <Link to="/number">Number</Link>
          </li>
          <li>
            <Link to="/datePicker">Date Picker</Link>
          </li>
          <li>
          <Link to="/checkbox">Checkbox</Link>
        </li>
        </ul>
        <Routes>
          <Route path='/' element={<InputTextWrapper />}></Route>
          <Route path='/text' element={<InputTextWrapper />}></Route>
          <Route path='/number' element={<InputNumberWrapper />}></Route>
          <Route path='/datePicker' element={<DatePickerWrapper />}></Route>
          <Route path="/checkbox" element={<CheckboxWrapper />}></Route>
        </Routes>
      </div>
  );
};

export default App;
