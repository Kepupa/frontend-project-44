import { question } from 'readline-sync';

const gameRules = (rules, game) => {
  const sdf = game();
  const [question1, correctAnswer] = sdf;

  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const sdf = game();
    const [question1, correctAnswer] = sdf;
    console.log('Question:', question1);
    const answer = question('Your answer: ');
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
