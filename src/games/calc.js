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
  const minNumber = 0;
  const maxNumber = 100;
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const minIndexOfOperators = 0;
  const maxIndexOfOperators = operators.length - 1;
  const operator = operators[getRandomNumber(minIndexOfOperators, maxIndexOfOperators)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(operator, number1, number2));

  return [question, answer];
};

export const startGame = () => runEngine(task, generateRound);
