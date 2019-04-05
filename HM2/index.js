'use stric'
let userInput; 
const numbers = [];
let total = 0;



do{
    userInput = prompt ('Введите число',''); 
    numbers.push(Number(userInput));
} while (userInput !=null);
// console.log(numbers)

for(let item of numbers){
    total = total + item;
    }

    alert (`Общая сумма чисел ровна ${total}`);




// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num != null);
// console.log(num)