import getRandomNum from '../helpers.js';
import runEngine from '../index.js';

const isEven = (number) => number % 2 === 0;

export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generateRound = () => {
  const number = getRandomNum();
  const question = number;
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

export const startGame = () => runEngine(task, generateRound);
