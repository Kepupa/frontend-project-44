import gameRules from '../index.js'


import getRandomNumber from '../randomNumber.js';
const isEven = (num) => num % 2 === 0; 
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
    
   const question = getRandomNumber(0,100);
   const correctAnswer = isEven(question) ? 'yes': 'no';
return [question,correctAnswer]  
};
const playGame = () =>{
    gameRules(rule, gameEven);
};
export default playGame;

 