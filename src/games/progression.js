import getRandomNum from '../helpers.js';
import runEngine from '../index.js';

const arrRoundProgressin = (roundStartNumber, roundProgressionStep, arrLength) => {
  const resultArr = [];
  resultArr.push(roundStartNumber);
  let getNextNum = roundStartNumber;
  for (let i = 0; i < arrLength; i += 1) {
    getNextNum = Number(getNextNum) + Number(roundProgressionStep);
    resultArr.push(getNextNum);
  }
  return resultArr;
};

export const task = 'What number is missing in the progression?';

export const generateRound = () => {
  const arrProgressionSteps = ['2', '3', '3', '5'];

  const startNumber = getRandomNum();
  const step = arrProgressionSteps[Math.floor(Math.random() * arrProgressionSteps.length)];
  const resultArr = arrRoundProgressin(startNumber, step, 9); // 9 -- желаемая длинна прогрессии

  const randomArrIndex = Math.floor(Math.random() * 10); // '* 10' получаем число > 0 и < 10
  const answer = String(resultArr[randomArrIndex]);
  resultArr.splice(randomArrIndex, 1, '..');
  const question = resultArr.join(' ');

  return [question, answer];
};

export const startGame = () => runEngine(task, generateRound);
