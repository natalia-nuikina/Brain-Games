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

export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getArrQuestionAnswer = () => {
  const result = [];

  const roundNumber = Math.round(Math.random() * 100); // '* 100' получаем число > 0 и < 100
  const roundQuestion = roundNumber;
  const roundAnswer = prime(roundNumber);

  result.push(roundQuestion);
  result.push(roundAnswer);
  return result;
};
