import userName from '../cli.js';
import workWithUser from '../index.js';

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
  const arrMathOperations = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const roundNumber1 = Math.round(Math.random() * 100); // '* 100' получаем число > 0 и < 100
    const roundNumber2 = Math.round(Math.random() * 100); // '* 100' получаем число > 0 и < 100
    const roundOperation = arrMathOperations[Math.floor(Math.random() * arrMathOperations.length)];
    const question = `${roundNumber1} ${roundOperation} ${roundNumber2}`;
    const correctAnswer = calc(roundOperation, roundNumber1, roundNumber2);
    const isCorrect = workWithUser(question, correctAnswer);
    if (isCorrect === 0) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default brainGameCalc;
