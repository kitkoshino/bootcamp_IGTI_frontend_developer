import React, { useEffect, useState } from 'react';
import '../styles/grades.scss';

function Grades({ setGrades }) {
  const [gradeModule1, setGradeModule1] = useState('');
  const [gradeModule2, setGradeModule2] = useState('');
  const [gradeModule3, setGradeModule3] = useState('');
  const [gradeModule4, setGradeModule4] = useState('');
  const [gradeModule5, setGradeModule5] = useState('');

  useEffect(() => {
    setGrades([gradeModule1, gradeModule2, gradeModule3, gradeModule4, gradeModule5]);
  }, [gradeModule1, gradeModule2, gradeModule3, gradeModule4, gradeModule5, setGrades]);

  return (
    <div className="grades-container">
      <h2>Notas atuais</h2>
      <div className="inputs-container">
        <div className="inputs-box">
          <label htmlFor="module1">Módulo 01 - Fundamentos (0 - 100) </label>
          <input
            type="number"
            id="module1"
            value={gradeModule1}
            name="module1"
            onChange={(event) => setGradeModule1(event.target.value)}
            max="100"
            min="0"
            className={gradeModule1 <= 60 ? 'red-font' : ''}
          />
        </div>
        <div className="inputs-box">
          <label htmlFor="module2">Módulo 02 - Angular (0 - 100) </label>
          <input
            type="number"
            id="module2"
            value={gradeModule2}
            name="module2"
            onChange={(event) => setGradeModule2(event.target.value)}
            max="100"
            min="0"
            className={gradeModule2 <= 60 ? 'red-font' : ''}
          />
        </div>
        <div className="inputs-box">
          <label htmlFor="module3">Módulo 03 - React (0 - 100) </label>
          <input
            type="number"
            id="module3"
            value={gradeModule3}
            name="module3"
            onChange={(event) => setGradeModule3(event.target.value)}
            max="100"
            min="0"
            className={gradeModule3 <= 60 ? 'red-font' : ''}
          />
        </div>
        <div className="inputs-box">
          <label htmlFor="module4">Módulo 04 - Vue (0 - 100) </label>
          <input
            type="number"
            id="module4"
            value={gradeModule4}
            name="module4"
            onChange={(event) => setGradeModule4(event.target.value)}
            max="100"
            min="0"
            className={gradeModule4 <= 60 ? 'red-font' : ''}
          />
        </div>
        <div className="inputs-box">
          <label htmlFor="module5">Módulo 05 - Desafio final (0 - 100) </label>
          <input
            type="number"
            id="module5"
            value={gradeModule5}
            name="module5"
            onChange={(event) => setGradeModule5(event.target.value)}
            max="100"
            min="0"
            className={gradeModule5 <= 60 ? 'red-font' : ''}
          />
        </div>
      </div>
    </div>
  );
}

export default Grades;
