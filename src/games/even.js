import getRandomNumber from '../helpers.js';
import runEngine from '../index.js';

const isEven = (number) => (number % 2 === 0);

export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRound = () => {
  const question = getRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export const startGame = () => runEngine(task, generateRound);
