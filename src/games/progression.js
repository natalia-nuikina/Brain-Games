import getRandomNumber from '../helpers.js';
import runEngine from '../index.js';

const getProgression = (startNumber, progressionStep, progressionLength) => {
  const numbers = [];
  for (let i = 0; i < progressionLength; i += 1) {
    numbers.push(startNumber + progressionStep * i);
  }
  return numbers;
};

export const task = 'What number is missing in the progression?';

export const generateRound = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const startNumber = getRandomNumber(minNumber, maxNumber);

  const minStep = 1;
  const maxStep = 5;
  const step = getRandomNumber(minStep, maxStep);

  const progressionLength = 10;
  const resultNumbers = getProgression(startNumber, step, progressionLength);

  const minIndex = 0;
  const maxIndex = resultNumbers.length;
  const randomIndex = getRandomNumber(minIndex, maxIndex);

  const answer = String(resultNumbers[randomIndex]);
  resultNumbers.splice(randomIndex, 1, '..');
  const question = resultNumbers.join(' ');
  return [question, answer];
};

export const startGame = () => runEngine(task, generateRound);
