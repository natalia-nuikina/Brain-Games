import getRandomNum from '../helpers.js';
import runEngine from '../index.js';

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default: throw new Error(`Unknown order state: '${operator}'!`);
  }
};

export const task = 'What is the result of the expression?';

export const generateRound = () => {
  const operators = ['+', '-', '*'];

  const number1 = getRandomNum();
  const number2 = getRandomNum();
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(operator, number1, number2);

  return [question, answer];
};

export const startGame = () => runEngine(task, generateRound);
