export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getArrQuestionAnswer = () => {
  const result = [];
  const roundQuestion = Math.ceil(Math.random() * 100); // '* 100' получаем число > 0 и <= 100
  const roundAnswer = (roundQuestion % 2 === 0) ? 'yes' : 'no';
  result.push(roundQuestion);
  result.push(roundAnswer);
  return result;
};
