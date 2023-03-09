#!/usr/bin/env node
import gameRules from '../index.js';

import getRandomNumber from '../randomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeGame = () => {
  const num1 = getRandomNumber(0, 100);
  const question = `${num1}`;
  const correctAnswer = isPrime(num1) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const playGame = () => {
  gameRules(rule, isPrimeGame);
};
export default playGame;
