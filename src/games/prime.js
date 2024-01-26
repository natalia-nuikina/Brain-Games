import workWithUser from '../index.js';

const prime = (roundNumber) => {
  if (roundNumber < 2) {
    return 'no';
  }
  for (let i = 2; i < roundNumber / 2; i += 1) {
    if (roundNumber % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const brainGamePrime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getArrQuestionsAnswers = () => {
    const result = [];
    for (let i = 0; i < 3; i += 1) {
      const round = [];

      const roundNumber = Math.round(Math.random() * 100); // '* 100' получаем число > 0 и < 100
      const roundQuestion = roundNumber;
      const roundAnswer = prime(roundNumber);

      round.push(roundQuestion);
      round.push(roundAnswer);
      result.push(round);
    }
    return result;
  };
  workWithUser(task, getArrQuestionsAnswers());
};
export default brainGamePrime;
