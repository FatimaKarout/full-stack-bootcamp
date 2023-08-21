function addNumbers(num1, num2) {
    return num1 + num2;
  }
  console.log(addNumbers(5, 7)); // Output: 12

console.log(addNumbers(-3, 11)); // Output: 8

console.log(addNumbers(0, 0)); // Output: 0 

function findMax(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    } else {
      return "Both are equal";
    }
  }
  
  console.log(findMax(5, 7)); // Output: 7
  console.log(findMax(-3, 11)); // Output: 11
  console.log(findMax(8, 8)); // Output: Both are equal  


  function compute(num1, num2, operation) {
    function add() {
      return num1 + num2;
    }
    
    function subtract() {
      return num1 - num2;
    }
    
    function multiply() {
      return num1 * num2;
    }
    
    function divide() {
      return num1 / num2;
    }
    
    switch (operation) {
      case 'add':
        return add();
      case 'subtract':
        return subtract();
      case 'multiply':
        return multiply();
      case 'divide':
        return divide();
      default:
        return 'Invalid operation';
    }
  }
  
  console.log(compute(5, 3, 'add')); // Output: 8
  console.log(compute(10, 4, 'subtract')); // Output: 6
  console.log(compute(7, 2, 'multiply')); // Output: 14
  console.log(compute(20, 5, 'divide')); // Output: 4
  console.log(compute(5, 3, 'modulus')); // Output: Invalid operation     



  for (let i = 1; i <= 10; i++) {
    console.log(i);
  } 

  let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
} 

let number = 1;

do {
  if (number % 2 === 0) {
    console.log(number);
  }
  number++;
} while (number <= 10);


const fruits = ['apple', 'banana', 'orange', 'kiwi', 'strawberry', 'mango'];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].length > 5) {
    console.log(fruits[i]);
  }
}