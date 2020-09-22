window.addEventListener('load', start);

var firstNumber = 0;
var secondNumber = 0;
var inputFirstNumber = null;

function start() {
  inputFirstNumber = document.querySelector('#primeiroNumero');
  inputSecondNumber = document.querySelector('#segundoNumero');
  inputFirstNumber.focus();

  activateFirstInput();
  activateSecondInput();
  clearButton();
}

function activateFirstInput() {
  function handleTyping(event) {
    let typedNumber = Number(event.target.value);
    firstNumber = typedNumber;

    results(firstNumber, secondNumber);
  }
  inputFirstNumber.addEventListener('keyup', handleTyping);
}

function activateSecondInput() {
  function handleTyping(event) {
    let typedNumber = Number(event.target.value);
    secondNumber = typedNumber;

    results(firstNumber, secondNumber);
  }
  inputSecondNumber.addEventListener('keyup', handleTyping);
}

function results(firstNumber, secondNumber) {
  function sumAplusB() {
    let totalSumInput = document.querySelector('#soma');
    let totalSum = firstNumber + secondNumber;

    totalSumInput.value = formatNumber(totalSum);
  }

  function subAminusB() {
    let totalMinusInput = document.querySelector('#subtracao');
    let totalMinus = firstNumber - secondNumber;

    totalMinusInput.value = formatNumber(totalMinus);
  }

  function subBminusA() {
    let totalMinusInput2 = document.querySelector('#subtracao2');
    let totalMinusB = secondNumber - firstNumber;

    totalMinusInput2.value = formatNumber(totalMinusB);
  }

  function multiply() {
    let totalMultiplyInput = document.querySelector('#multiplicacao');
    let totalMultiply = firstNumber * secondNumber;

    totalMultiplyInput.value = formatNumber(totalMultiply);
  }

  function divisionAforB() {
    let totalDivisionInput = document.querySelector('#divisao1');
    let totalDivision = firstNumber / secondNumber;

    if (secondNumber === 0) {
      totalDivisionInput.value = 'Divisão por 0';
    } else {
      totalDivisionInput.value = formatNumber(totalDivision.toFixed(2));
    }
  }

  function divisionBforA() {
    let totalDivisionInputB = document.querySelector('#divisao2');
    let totalDivisionB = secondNumber / firstNumber;

    if (firstNumber === 0) {
      totalDivisionInputB.value = 'Divisão por 0';
    } else {
      totalDivisionInputB.value = formatNumber(totalDivisionB.toFixed(2));
    }
  }

  function powerOfTwoA() {
    let totalPowerOftwoInput = document.querySelector('#quadradoA');
    let totalPowerOftwoA = firstNumber * firstNumber;

    totalPowerOftwoInput.value = formatNumber(totalPowerOftwoA);
  }

  function powerOfTwoB() {
    let totalPowerOfTwoInputB = document.querySelector('#quadradoB');
    let totalPowerOfTwoB = secondNumber * secondNumber;

    totalPowerOfTwoInputB.value = formatNumber(totalPowerOfTwoB);
  }

  function dividersA() {
    let totalDividerInputA = document.querySelector('#divisoresA');
    let totalDividersA = [];

    for (let i = 1; i <= firstNumber; i++) {
      if (firstNumber % i === 0) {
        totalDividersA.push(i);
      }
    }

    const totalOfDividers = totalDividersA.join(', ');

    totalDividerInputA.value = `${totalOfDividers} (${totalDividersA.length})`;
  }

  function dividersB() {
    let totalDividersInputB = document.querySelector('#divisoresB');
    let totalDividersB = [];

    for (let i = 1; i <= secondNumber; i++) {
      if (secondNumber % i === 0) {
        totalDividersB.push(i);
      }
    }

    const totalOfDividersB = totalDividersB.join(', ');
    totalDividersInputB.value = `${totalOfDividersB} (${totalDividersB.length})`;
  }

  function factorialA() {
    let totalFactorialAinput = document.querySelector('#fatorialA');
    let totalFactorialA = 1;

    if (firstNumber > 21) {
      totalFactorialAinput.value = 'Número muito grande';
    } else {
      for (let i = 1; i <= firstNumber; i++) {
        totalFactorialA *= i;
      }
      totalFactorialAinput.value = formatNumber(totalFactorialA);
    }
  }

  function factorialB() {
    let totalFactorialBinput = document.querySelector('#fatorialB');
    let totalFactorialB = 1;

    if (secondNumber > 21) {
      totalFactorialBinput.value = 'Número muito grande';
    } else {
      for (let i = 1; i <= secondNumber; i++) {
        totalFactorialB *= i;
      }
      totalFactorialBinput.value = formatNumber(totalFactorialB);
    }
  }

  sumAplusB();
  subAminusB();
  subBminusA();
  multiply();
  divisionAforB();
  divisionBforA();
  powerOfTwoA();
  powerOfTwoB();
  dividersA();
  dividersB();
  factorialA();
  factorialB();
}

function formatNumber(number) {
  return new Intl.NumberFormat('pt-BR').format(number);
}

function clearButton() {
  function clear() {
    let allInputs = document.querySelectorAll('input');

    allInputs.forEach(input => input.value = '');
    inputFirstNumber.focus();

  }

  let button = document.getElementById('clear');
  button.addEventListener('click', clear);
}

