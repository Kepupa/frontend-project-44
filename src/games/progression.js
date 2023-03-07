import gameRules from '../index.js';

import getRandomNumber from '../randomNumber.js';

const rule = 'What number is missing in the progression?';

const progression = () => {
  const progress = [];
  const step = getRandomNumber(1, 15);
  for (let i = getRandomNumber(7, 30), j = 0; j < 10; i += step, j += 1) {
    progress.push(i);
  }

  const randomNum = getRandomNumber(1, 10);
  const correctAnswer = progress[randomNum];
  progress.splice(randomNum, 1, '..');
  const question = progress.join(' ');
  return [question, correctAnswer];
};

const playGame = () => {
  gameRules(rule, progression);
};
export default playGame;
