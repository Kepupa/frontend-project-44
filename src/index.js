import readlineSync from 'readline-sync';
import helloUser from './cli.js';

const gameRules = (rules, game) => {
  const userName = helloUser();

  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) console.log(`Congratulations, ${userName}!`);
  }
};
export default gameRules;
