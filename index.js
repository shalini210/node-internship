const prompt = require("prompt-sync")()
let ch = 'y'
while(ch=='y')
{
    console.log("code is running")
    ch = prompt(" press y to continue ")
}
console.log("thanks ")
// const calc = require("./calc")


// let a = parseInt(prompt("enter first no "))
// let b = parseInt(prompt("enter second no "))

// let sum = calc.addtwo(a,b)

// console.log(`sum of ${a} and ${b} is ${sum}`)
// let c = parseInt(prompt("Enter third no "));
//  sum = calc.addthree(a,b,c)
// console.log(`sum of ${a} , ${b} and ${c} is ${sum}`)



// enter first no :
// 12
// enter second no 
// 2
// press
//  1 for additoin 
//  2 for substraction
//  3 for multiplication
//  4 for division 
//  result :
//  do you want to continue y/n 
