import userName from '../cli.js';
import workWithUser from '../index.js';

const findGcd = (roundNumber1, roundNumber2) => {
  let gcd = (roundNumber1 <= roundNumber2) ? roundNumber1 : roundNumber2;
  for (gcd; gcd > 0; gcd -= 1) {
    if (roundNumber1 % gcd === 0 && roundNumber2 % gcd === 0) {
      return String(gcd);
    }
  }
  return 1;
};

const brainGameGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const roundNumber1 = Math.round(Math.random() * 100); // '* 100' получаем число > 0 и < 100
    const roundNumber2 = Math.round(Math.random() * 100); // '* 100' получаем число > 0 и < 100
    const correctAnswer = findGcd(roundNumber1, roundNumber2);
    const question = `${roundNumber1} ${roundNumber2}`;
    const isCorrect = workWithUser(question, correctAnswer);
    if (isCorrect === 0) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default brainGameGcd;
