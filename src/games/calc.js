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
  const task = 'What is the result of the expression?';
  const getArrQuestionsAnswers = () => {
    const result = [];
    const arrMath = ['+', '-', '*'];
    for (let i = 0; i < 3; i += 1) {
      const round = [];

      const roundNumber1 = Math.round(Math.random() * 100); // '* 100' получаем число > 0 и < 100
      const roundNumber2 = Math.round(Math.random() * 100); // '* 100' получаем число > 0 и < 100
      const roundOperation = arrMath[Math.floor(Math.random() * arrMath.length)];
      const roundQuestion = `${roundNumber1} ${roundOperation} ${roundNumber2}`;
      const roundAnswer = calc(roundOperation, roundNumber1, roundNumber2);

      round.push(roundQuestion);
      round.push(roundAnswer);
      result.push(round);
    }
    return result;
  };
  workWithUser(task, getArrQuestionsAnswers());
};
export default brainGameCalc;
