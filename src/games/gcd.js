const findGcd = (roundNumber1, roundNumber2) => {
  let gcd = (roundNumber1 <= roundNumber2) ? roundNumber1 : roundNumber2;
  for (gcd; gcd > 0; gcd -= 1) {
    if (roundNumber1 % gcd === 0 && roundNumber2 % gcd === 0) {
      return String(gcd);
    }
  }
  return undefined;
};

export const task = 'Find the greatest common divisor of given numbers.';

export const getArrQuestionAnswer = () => {
  const result = [];

  const roundNumber1 = Math.ceil(Math.random() * 100); // '* 100' получаем число > 0 и <= 100
  const roundNumber2 = Math.ceil(Math.random() * 100); // '* 100' получаем число > 0 и <= 100
  const roundAnswer = findGcd(roundNumber1, roundNumber2);
  const roundQuestion = `${roundNumber1} ${roundNumber2}`;

  result.push(roundQuestion);
  result.push(roundAnswer);
  return result;
};
