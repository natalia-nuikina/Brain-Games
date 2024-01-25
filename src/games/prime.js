import userName from '../cli.js';
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
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const roundNumber = Math.round(Math.random() * 100); // '* 100' получаем рандомное число > 0 и < 100
    const question = roundNumber;
    const correctAnswer = prime(roundNumber);

    const isCorrect = workWithUser(question, correctAnswer);
    if (isCorrect === 0) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default brainGamePrime;
