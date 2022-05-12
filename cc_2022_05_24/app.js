PREP 
Title: Sum - Square Even, Root Odd

Parameters:
//Takes in an array of numbers

Return:
//Return the sum - even numbers squared and odd numbers square root
//Rounded the sum to 2 decimal places

Examples:
[4,9]
//Square of 4 = 16
//Square root of 9 = 3
//Sum = 19
//2 decimal places = 19.00

Pseudocode:
//1. function that takes a list of numbers (nums), as the only argument to the function. 
//2. Take each number in the list and square it if it is even, Math.pow(4, 2)
// or square root the number if it is odd. Math.sqrt(9)
//3. Take this new list and return the sum of it, .reduce()
//4. rounded to two decimal places. toFixed(2)

const sumSquareEvenRootOdd = ns => {
    let sum = []
    ns.forEach((item) => {
        if (item % 2 === 0) {
            sum.push(Math.pow(item, 2))
        } else {
            sum.push(Math.sqrt(item))
        }
    })
    //I had to wrap everything to make it a number. toFixed returns a string
    return Number(sum.reduce((a,c) => a + c, 0 ).toFixed(2))
  };

  console.log(sumSquareEvenRootOdd([4,9]))