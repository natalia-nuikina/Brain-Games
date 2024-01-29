import readlineSync from 'readline-sync';
import { task as taskEven, getArrQuestionAnswer as qAEven } from './games/even.js';
import { task as taskCalc, getArrQuestionAnswer as qACalc } from './games/calc.js';
import { task as taskGcd, getArrQuestionAnswer as qAGcd } from './games/gcd.js';
import { task as taskPrime, getArrQuestionAnswer as qAPrime } from './games/prime.js';
import { task as taskProgression, getArrQuestionAnswer as qAProgression } from './games/progression.js';

import workWithUser from './index.js';

export const replayGame = (task, questionAnswer, name) => {
  let choiseReplay = '0';
  while (choiseReplay !== '2') {
    console.log(`Do you want to play again, ${name}?`);
    console.log('1. Yes');
    console.log('2. No');
    const replay = readlineSync.question('Write the number of choice, or write any, if you whant to go out: ');
    if (replay === '1') {
      workWithUser(task, questionAnswer);
    } else if (replay === '2') {
      choiseReplay = '2';
      break;
    } else {
      console.log(`Goodbay, ${name}!`);
      return;
    }
  }
};

export const userName = () => {
  const name = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < 100; i += 1) {
    console.log('Choose one of the games:');
    console.log('1. Brain-even -- Number is even?');
    console.log('2. Brain-calc -- Сalculate the result.');
    console.log('3. Brain-gcd -- Find the greatest common divisor.');
    console.log('4. Brain-prime -- Number is prime?');
    console.log('5. Brain-progression -- What number is missing?');
    const choiceGame = readlineSync.question('Write the number of the selected game, or write any, if you whant to go out: ');
    switch (choiceGame) {
      case '1':
        console.log('BRAIN-EVEN');
        workWithUser(taskEven, qAEven, name);
        replayGame(taskEven, qAEven, name);
        break;
      case '2':
        console.log('BRAIN-CALC');
        workWithUser(taskCalc, qACalc, name);
        replayGame(taskCalc, qACalc, name);
        break;
      case '3':
        console.log('BRAIN-GCD');
        workWithUser(taskGcd, qAGcd, name);
        replayGame(taskGcd, qAGcd, name);
        break;
      case '4':
        console.log('BRAIN-PRIME');
        workWithUser(taskPrime, qAPrime, name);
        replayGame(taskPrime, qAPrime, name);
        break;
      case '5':
        console.log('BRAIN-PROGRESSION');
        workWithUser(taskProgression, qAProgression, name);
        replayGame(taskProgression, qAProgression, name);
        break;
      default:
        console.log(`Goodbay, ${name}!`);
        return;
    }
    console.log(`Congratulations, ${name}! You have played 100 games. Have a rest, take care of your eyes ;\\)`);
  }
};
