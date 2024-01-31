import getRandomNumber from '../helpers.js';
import runEngine from '../index.js';

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default: throw new Error(`Unknown order state: '${operator}'!`);
  }
};

export const task = 'What is the result of the expression?';

export const generateRound = () => {
  const operators = ['+', '-', '*'];
  const rangeNumbers = 100;
  const number1 = getRandomNumber(rangeNumbers);
  const number2 = getRandomNumber(rangeNumbers);
  const rangeOperators = operators.length;
  const operator = operators[getRandomNumber(rangeOperators)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(operator, number1, number2));

  return [question, answer];
};

export const startGame = () => runEngine(task, generateRound);
