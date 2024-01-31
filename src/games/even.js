import getRandomNumber from '../helpers.js';
import runEngine from '../index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRound = () => {
  const rangeNumbers = 100;
  const question = getRandomNumber(rangeNumbers);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export const startGame = () => runEngine(task, generateRound);
