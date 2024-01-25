import userName from '../cli.js';
import workWithUser from '../index.js';

const arrRoundProgressin = (roundStartNumber, roundProgressionStep) => {
  const resultArr = [];
  resultArr.push(roundStartNumber);
  let getNextNum = roundStartNumber;
  for (let i = 0; i < 9; i += 1) {
    getNextNum = Number(getNextNum) + Number(roundProgressionStep);
    resultArr.push(getNextNum);
  }
  return resultArr;
};

const brainGameProgression = () => {
  console.log('What number is missing in the progression?');
  const arrProgressionSteps = ['2', '3', '3', '5'];
  for (let i = 0; i < 3; i += 1) {
    const roundStartNumber = Math.round(Math.random() * 10); // '* 10' получаем рандомное число > 0
    const roundProgressionStep = arrProgressionSteps[Math.floor(Math.random() * arrProgressionSteps.length)];
    const resultArr = arrRoundProgressin(roundStartNumber, roundProgressionStep);

    const randomArrIndex = Math.floor(Math.random() * 10); // '* 10' получаем рандомное число > 0
    const correctAnswer = String(resultArr[randomArrIndex]);
    resultArr.splice(randomArrIndex, 1, '..');
    const question = resultArr.join(' ');

    const isCorrect = workWithUser(question, correctAnswer);
    if (isCorrect === 0) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default brainGameProgression;
