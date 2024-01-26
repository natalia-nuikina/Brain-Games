import readlineSync from 'readline-sync';

const workWithUser = (task, getQuAn) => {
  const name = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const question = getQuAn[i][0];
    const correctAnswer = getQuAn[i][1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    }
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default workWithUser;
