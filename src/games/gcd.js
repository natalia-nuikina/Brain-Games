import getRandomNumber from '../helpers.js';
import runEngine from '../index.js';

const findGcd = (roundNumber1, roundNumber2) => {
  let gcd = (roundNumber1 <= roundNumber2) ? roundNumber1 : roundNumber2;
  for (gcd; gcd > 0; gcd -= 1) {
    if (roundNumber1 % gcd === 0 && roundNumber2 % gcd === 0) {
      return String(gcd);
    }
  }
  return 1;
};

export const task = 'Find the greatest common divisor of given numbers.';

export const generateRound = () => {
  const rangeNumbers = 100;
  const number1 = getRandomNumber(rangeNumbers);
  const number2 = getRandomNumber(rangeNumbers);
  const answer = findGcd(number1, number2);
  const question = `${number1} ${number2}`;

  return [question, answer];
};

export const startGame = () => runEngine(task, generateRound);
