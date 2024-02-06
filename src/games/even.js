import getRandomNumber from '../helpers.js';
import runEngine from '../index.js';

const isEven = (number) => (number % 2 === 0);

export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRound = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const question = getRandomNumber(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export const startGame = () => runEngine(task, generateRound);
