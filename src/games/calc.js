import gameRules from '../index.js'

import getRandomNumber from '../randomNumber.js';
const rule = 'What is the result of the expression?'
const gameCulc = (num1, num2, operator) => {
    switch (operator){
        case '+':
         return num1 + num2
        case '-':
        return num1 - num2
        case '*':
        return num1 * num2
    }

}

const calc = () => {
    const num1 = getRandomNumber(0,100)
    const num2 = getRandomNumber(0,100)
    const operators = ['+','-','*']
    const randomOperator = getRandomNumber(0, operators.length -1)
    const question = `${num1} ${operators[randomOperator]} ${num2}`
    const correctAnswer = gameCulc(num1,num2,operators[randomOperator])
    return [question,correctAnswer]
} 
const playGame = () => {
    gameRules (rule,calc)
}
export default playGame
