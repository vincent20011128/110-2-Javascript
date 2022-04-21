const userInput = document.querySelector(`#input-numper`);
const cBtn = document.querySelector('#btn-c');
const fBtn = document.querySelector('#btn-f');
const currentCalculation = document.querySelector('#current-calculation');

const gerUseInput = () => {
  return parseFloat(userInput.value);
};

const c2f = () => {
  const enteredInput = gerUseInput();
  // console .log('enteredInput',enteredInput);
  result = ((enteredInput * 9) / 5 + 32).toFixed(2);
  currentCalculation.textContent = ` ${enteredInput} C = ${result} F`;
};

const f2c = () => {
  const enteredInput = gerUseInput();
  // console .log('enteredInput',enteredInput);
  result = (((enteredInput - 32) * 5) / 9).toFixed(2);
  currentCalculation.textContent = ` ${enteredInput} F = ${result} C`;
};

cBtn.addEventListener('click', c2f);
fBtn.addEventListener('click', f2c);
