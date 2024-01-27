import readlineSync from 'readline-sync';

const workWithUser = (task, getArrQuestionAnswer) => {
  const name = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const arrQuestionAnswer = getArrQuestionAnswer();
    // console.log(arrQuestionAnswer);
    const question = arrQuestionAnswer[0];
    const correctAnswer = arrQuestionAnswer[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default workWithUser;
