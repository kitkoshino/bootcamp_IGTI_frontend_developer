import React, { useState } from 'react';
import './App.scss';
import Calculations from './components/Calculations';
import Grades from './components/Grades';

function App() {
  const [grades, setGrades] = useState([]);


  return (
    <div className="App">
      <h1>Controle de notas do Bootcamp IGTI com React</h1>
      <hr />
      <div className="content">
        <Grades setGrades={setGrades} />
        <Calculations grades={grades} />
      </div>
    </div>
  );
}

export default App;
