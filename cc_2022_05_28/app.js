Title:
//Sum of two lowest positive integers

Parameters:
//Takes in an array of minimum 4 positive integers

Return:
//Return the sum of the two lowest positive numbers

Examples:
[5,2,99,100]
//lowest numbers = 5 & 2
//Sum = 7

Pseudocode:

//1. Create a function that takes in an arr
//loop through the arr and returns the lowest numbers - forEach //min
//3. get the sum of the two lowest positive numbers - .reduce

function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a,b) => a-b).slice(0,2).reduce((acc,cur)=> acc + cur, 0)
  }
 
 console.log(sumTwoSmallestNumbers([5,2,99,100]))