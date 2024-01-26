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
  const task = 'What number is missing in the progression?';
  const arrProgressionSteps = ['2', '3', '3', '5'];
  const getArrQuestionsAnswers = () => {
    const result = [];
    for (let i = 0; i < 3; i += 1) {
      const round = [];

      const roundStartNumber = Math.round(Math.random() * 10); // '* 10' получаем число > 0 и < 10
      const roundStep = arrProgressionSteps[Math.floor(Math.random() * arrProgressionSteps.length)];
      const resultArr = arrRoundProgressin(roundStartNumber, roundStep);

      const randomArrIndex = Math.floor(Math.random() * 10); // '* 10' получаем число > 0 и < 10
      const roundAnswer = String(resultArr[randomArrIndex]);
      resultArr.splice(randomArrIndex, 1, '..');
      const roundQuestion = resultArr.join(' ');

      round.push(roundQuestion);
      round.push(roundAnswer);
      result.push(round);
    }
    return result;
  };
  workWithUser(task, getArrQuestionsAnswers());
};

export default brainGameProgression;
