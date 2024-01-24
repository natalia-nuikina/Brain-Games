import userName from './cli.js';
import workWithUser from './index.js';

const brainGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const toGetWholeNum = 100;
  let correctAnswer;
  for (let i = 0; i < 3; i += 1) {
    const roundNumber = Math.round(Math.random() * toGetWholeNum);
    correctAnswer = (roundNumber % 2 === 0) ? 'yes' : 'no';
    const question = roundNumber;
    const isCorrect = workWithUser(question, correctAnswer);
    if (isCorrect === 0) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default brainGame;
