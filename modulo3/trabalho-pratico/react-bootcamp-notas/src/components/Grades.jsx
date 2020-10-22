import React from 'react';
import '../styles/grades.scss';

function Grades() {
  return (
    <div className="grades-container">
      <h1>Notas atuais</h1>
      <div className="inputs-container">
        <div className="inputs-box">
          <label htmlFor="module1">Módulo 01 - Fundamentos (0 - 100) </label>
          <input type="number" id="module1" />
        </div>
        <div className="inputs-box">
          <label htmlFor="module2">Módulo 02 - Angular (0 - 100) </label>
          <input type="number" id="module2" />
        </div>
        <div className="inputs-box">
          <label htmlFor="module3">Módulo 03 - React (0 - 100) </label>
          <input type="number" id="module3" />
        </div>
        <div className="inputs-box">
          <label htmlFor="module4">Módulo 04 - Vue (0 - 100) </label>
          <input type="number" id="module4" />
        </div>
        <div className="inputs-box">
          <label htmlFor="module5">Módulo 05 - Desafio final (0 - 100) </label>
          <input type="number" id="module5" />
        </div>
      </div>
    </div>
  );
}

export default Grades;
