const prompt = require('prompt-sync')()

do{
    let num1 = Number(prompt("Enter fisrt number : "))
    let num2 = Number(prompt("Enter second number : "))
    let symbol = prompt("Enter symbol :")
    if (symbol == `+`){
        Sum = num1 + num2
    }else{
        Sum = num1 - num2
    }
    console.log("Total : ", Sum)
    Cont = prompt("Continue Y/N : ")
}while(Cont.toUpperCase() === 'Y')