import getRandomNumber from '../helpers.js';
import runEngine from '../index.js';

const getProgression = (roundStartNumber, roundProgressionStep, progressionLength) => {
  const numbers = [];
  numbers.push(roundStartNumber);
  let getNextNum = roundStartNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    getNextNum += roundProgressionStep;
    numbers.push(getNextNum);
  }
  return numbers;
};

export const task = 'What number is missing in the progression?';

export const generateRound = () => {
  const progressionSteps = ['2', '3', '3', '5'];
  const rangeNumbers = 100;
  const startNumber = Number(getRandomNumber(rangeNumbers));
  const rangeSteps = progressionSteps.length;
  const step = Number(progressionSteps[getRandomNumber(rangeSteps)]);
  const progressionLength = 9;
  const resultNumbers = getProgression(startNumber, step, progressionLength);
  const rangeIndex = 10;
  const randomIndex = getRandomNumber(rangeIndex);
  const answer = String(resultNumbers[randomIndex]);
  resultNumbers.splice(randomIndex, 1, '..');
  const question = resultNumbers.join(' ');

  return [question, answer];
};

export const startGame = () => runEngine(task, generateRound);
