import getRandomNum from '../helpers.js';
import runEngine from '../index.js';

export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRound = () => {
  const question = getRandomNum();
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, answer];
};

export const startGame = () => runEngine(task, generateRound);
