import workWithUser from '../index.js';

const brainGameEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getArrQuestionsAnswers = () => {
    const result = [];
    for (let i = 0; i < 3; i += 1) {
      const round = [];

      const roundQuestion = Math.ceil(Math.random() * 100); // '* 100' получаем число > 0 и <= 100
      const roundAnswer = (roundQuestion % 2 === 0) ? 'yes' : 'no';

      round.push(roundQuestion);
      round.push(roundAnswer);
      result.push(round);
    }
    return result;
  };
  workWithUser(task, getArrQuestionsAnswers());
};

export default brainGameEven;
