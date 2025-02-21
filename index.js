const prompt = require('prompt-sync')()
function print(...str){
    console.log(...str)
}

// print("Hello", "Hello")


// function add(num1, num2){
//     return num1 + num2
// }

// arrow function
// const sub = (num1, num2) => num1 - num2

// print(sub(10, 5))

    
// array & object
let objStd = [
    {
    id : 43526,
    fname : "Panuwat",
    lname : "Anu"
    },
    {
    id : 43047,
    fname : "ai",
    lname : "Sonteen"
    },
    {
    id : 10901,
    fname : "ai",
    lname : "here"
    }
]
print(objStd[1].id)


// do{
//     console.log("hello")
// }while (run)


// while(run){
//     char = prompt("End Program pass 'q' : ")
//     // char[0] === 'q' ? run = false : run = true //? = if , : = else, else_if 
//     if (char[0] == 'q') break;
//     else continue
// }