let firstNumber
let secondNumber
let step = 0
let operation
let result = 0

let numArray = []
let secondNumArray = []

let display= document.getElementById('display')


function getNumber(num){
    if (step === 0 || step === 1) {
        numArray.push(num)
        step = 1
        firstNumber = Number(numArray.join('')) //merge into one string
        display.value = firstNumber
    } else if (step === 2){
        secondNumArray.push(num)
        secondNumber=Number(secondNumArray.join(''))
        display.value = secondNumber
    }
}

function getOperator(op) {
    step = 2
    operation = op
}

const CALCULATESEQUALS = () => {
    if (operation === '+'){
        result=firstNumber + secondNumber
        display.value = result
    }else if(operation === '-'){
        result  = firstNumber - secondNumber
        display.value = result
    }
}
