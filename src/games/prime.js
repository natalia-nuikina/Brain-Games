import getRandomNum from '../helpers.js';
import runEngine from '../index.js';

const isEven = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generateRound = () => {
  const number = getRandomNum();
  const question = number;
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

export const startGame = () => runEngine(task, generateRound);
