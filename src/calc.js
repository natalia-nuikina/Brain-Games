import userName from './cli.js';
import workWithUser from './index.js';

const calc = (roundMathOperation, roundNumber1, roundNumber2) => {
  let result;
  switch (roundMathOperation) {
    case '+':
      result = String(roundNumber1 + roundNumber2);
      return result;
    case '-':
      result = String(roundNumber1 - roundNumber2);
      return result;
    case '*':
      result = String(roundNumber1 * roundNumber2);
      return result;
    default: return null;
  }
};

const brainGameCalc = () => {
  console.log('What is the result of the expression?');
  const toGetWholeNum = 100;
  const arrMathOperations = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const roundNumber1 = Math.round(Math.random() * toGetWholeNum);
    const roundNumber2 = Math.round(Math.random() * toGetWholeNum);
    const roundMathOperation = arrMathOperations[Math.floor(Math.random() * arrMathOperations.length)];
    const question = `${roundNumber1} ${roundMathOperation} ${roundNumber2}`;
    const correctAnswer = calc(roundMathOperation, roundNumber1, roundNumber2);
    const isCorrect = workWithUser(question, correctAnswer);
    if (isCorrect === 0) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default brainGameCalc;
