// Simple String Characters
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

function solve(str){
  let upper = 0
  let lower = 0
  let numbers = 0
  let special = 0

  for (i = 0; i < str.length; i++) { 
      if (str[i] >= 'A' && str[i] <='Z'){
          upper++
      } else if (str[i] >= 'a' && str[i] <= 'z'){
          lower++
      } else if (str[i] >= '0' && str[i] <= '9'){
          numbers++
      } else {
          special++
      }
      
  }

  let num = [upper, lower, numbers, special]
  
  return num
}

console.log(solve('aaAAdtyy5555yuuii778ioo@////@@..'))