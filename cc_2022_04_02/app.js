// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//I need to .split(''), then .reverse() but they only work on strings
//I convert to string first with .toString()
//Numbers were still string... I used .map to produce a new array which didn't work until I multiplied the item by 1 (item*1)

function reverseNum(r){
    return r.toString().split('').reverse().map(item => item * 1)
  }
  
  console.log(reverseNum(348597))