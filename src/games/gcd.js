import workWithUser from '../index.js';

const findGcd = (roundNumber1, roundNumber2) => {
  let gcd = (roundNumber1 <= roundNumber2) ? roundNumber1 : roundNumber2;
  for (gcd; gcd > 0; gcd -= 1) {
    if (roundNumber1 % gcd === 0 && roundNumber2 % gcd === 0) {
      return String(gcd);
    }
  }
  return undefined;
};

const brainGameGcd = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const getArrQuestionsAnswers = () => {
    const result = [];
    for (let i = 0; i < 3; i += 1) {
      const round = [];

      const roundNumber1 = Math.round(Math.ceil() * 100); // '* 100' получаем число > 0 и <= 100
      const roundNumber2 = Math.round(Math.ceil() * 100); // '* 100' получаем число > 0 и <= 100
      const roundAnswer = findGcd(roundNumber1, roundNumber2);
      const roundQuestion = `${roundNumber1} ${roundNumber2}`;

      round.push(roundQuestion);
      round.push(roundAnswer);
      result.push(round);
    }
    return result;
  };
  workWithUser(task, getArrQuestionsAnswers());
};
export default brainGameGcd;
