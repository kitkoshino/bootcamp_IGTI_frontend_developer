import React from 'react';
import './App.scss';
import Calculations from './components/Calculations';
import Grades from './components/Grades';


function App() {
  return (
    <div className="App">
      <Grades />
      <Calculations />
    </div>
  );
}

export default App;
