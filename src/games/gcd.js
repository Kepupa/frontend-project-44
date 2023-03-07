import gameRules from '../index.js';

import getRandomNumber from '../randomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';
function gcd(num1, num2) {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);

  while (min) [max, min] = [min, max % min];
  return max;
}

const gcdGame = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);
  return [question, correctAnswer];
};
const playGame = () => {
  gameRules(rule, gcdGame);
};
export default playGame;
