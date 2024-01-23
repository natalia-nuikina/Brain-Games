import readlineSync from 'readline-sync';
import userName from './cli.js';

const brainGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const toGetWholeNum = 100;
  let correctAnswer;
  for (let i = 0; i < 3; i += 1) {
    const roundNumber = Math.round(Math.random() * toGetWholeNum);
    console.log(`Question: ${roundNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    correctAnswer = (roundNumber % 2 === 0) ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default brainGame;
