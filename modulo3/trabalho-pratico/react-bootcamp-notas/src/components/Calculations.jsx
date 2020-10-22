import React from 'react';
import '../styles/calculations.scss';

function Calculations() {
  return (
    <div className="calculation-container">
      <h1>Cálculos</h1>
      <div className="calculations">
        <div className="box">
          <p>Nota total:</p><span>500</span>
        </div>
        <div className="box">
          <p>Percentual total:</p><span>500</span>
        </div>
        <div className="box">
          <p>Aprovação pela média (60) ?</p><span>Sim</span>
        </div>
        <div className="box">
          <p>Aprovação pelo percentual total (70%)?</p><span>Sim</span>
        </div>
      </div>
    </div>
  );
}

export default Calculations;
