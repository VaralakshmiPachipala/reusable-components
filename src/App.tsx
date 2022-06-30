import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import { InputNumberWrapper } from './wrappers/InputNumberWrapper';
import { InputTextWrapper } from './wrappers/InputTextWrapper';

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
        </ul>
        <Routes>
          <Route path='/' element={<InputTextWrapper />}></Route>
          <Route path='/text' element={<InputTextWrapper />}></Route>
          <Route path='/number' element={<InputNumberWrapper />}></Route>
        </Routes>
      </div>
  );
}

export default App;
