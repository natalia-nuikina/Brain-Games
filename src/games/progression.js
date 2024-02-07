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
  const startNumber = getRandomNumber(0, 100);
  const step = getRandomNumber(1, 5);
  const progression = getProgression(startNumber, step, 10);
  const randomIndex = getRandomNumber(0, progression.length - 1);

  const answer = String(progression[randomIndex]);
  progression.splice(randomIndex, 1, '..');
  const question = progression.join(' ');
  return [question, answer];
};

export const startGame = () => runEngine(task, generateRound);
