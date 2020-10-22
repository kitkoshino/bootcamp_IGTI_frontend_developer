import React, { useEffect, useState } from 'react';
import '../styles/calculations.scss';

function Calculations({ grades }) {
  const [isApprovedByPercentage, setIsApprovedByPercentage] = useState(false);
  const [isApprovedByModule, setIsApprovedByModule] = useState(false);
  const [sumGrades, setSumGrades] = useState(0);
  const [totalPercentage, setTotalPercentage] = useState(0);

  useEffect(() => {
    sum();
    calculateTotalPercentage();
    calculateApprovalByModule();
  }, [grades])

  function sum() {
    const result =  grades.reduce((acc, grade) => acc + Number(grade), 0);
    setSumGrades(result);
  }

  function calculateTotalPercentage() {
    const result = (grades.reduce((acc, grade) => acc + Number(grade), 0) / 500) * 100;
    setTotalPercentage(result);
    setIsApprovedByPercentage(result >= 70);
  }

  function calculateApprovalByModule() {
    let total = true;

    for(let i = 0; i < grades.length; i++) {
      const media = (Number(grades[i]) / 100) * 100;
      if (media < 60) {
        total = false;
        break;
      }
    }

    setIsApprovedByModule(total);
  }

  function formatNumber(number) {
    return new Intl.NumberFormat('pt-BR').format(number);
  }

  return (
    <div className="calculation-container">
      <h2>Cálculos</h2>
      <div className="calculations">
        <div className="box">
          <p>Nota total:</p>
          <span>{sumGrades}</span>
        </div>
        <div className="box">
          <p>Percentual total:</p>
          <span>{formatNumber(totalPercentage)} %</span>
        </div>
        <div className="box">
          <p>Aprovação pela média (60%)?</p>
          <span className={isApprovedByModule ? 'green-font' : 'red-font' }>{isApprovedByModule ? 'Sim' : 'Não'}</span>
        </div>
        <div className="box">
          <p>Aprovação pelo percentual total (70%)?</p>
          <span className={isApprovedByPercentage ? 'green-font' : 'red-font' }>{isApprovedByPercentage ? 'Sim' : 'Não'}</span>
        </div>
      </div>
    </div>
  );
}

export default Calculations;
