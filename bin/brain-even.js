import helloUser from '../src/cli.js';
import getRandomNumber from '../src/randomNumber.js';

import readlineSync from 'readline-sync';
const isEven = (num) => num % 2 === 0; 

const gameEven = () => {
    const userName = helloUser()
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i++) { 
        const question = getRandomNumber(0,100);
        console.log('Question:',question)
        const answer = readlineSync.question('Your answer: ')
        const correctAnswer = isEven(question) ? 'yes' : 'no';
        if (answer === correctAnswer) {
            console.log('Correct!')
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
            console.log(`Let's try again, ${userName}!`);
            break
        }
        console.log(`Congratulations, ${userName}!`)
      }
   
    

}
gameEven()
