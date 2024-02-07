import getRandomNumber from '../helpers.js';
import runEngine from '../index.js';

const isPrime = (number) => {
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
  const question = getRandomNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export const startGame = () => runEngine(task, generateRound);
