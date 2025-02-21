const prompt = require('prompt-sync')()
let Sum = 0
let i = 0
let num = Number(prompt("Enter numbers (negative to stop) : "))

while(num > 0){
    Sum += num
    num = Number(prompt("Enter numbers (negative to stop) : "))
    i++
}

console.log("Average:", Sum / i)