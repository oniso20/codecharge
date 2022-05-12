Title:
 // Count the divisors of a number

Parameters:
//Takes in 1 positive integers

Return:
//Return the count of numbers that are divisors (less or equal to the number)

Examples:
5
//Divisors are 1 and 5
//count of divisors = 2

Pseudocode:
//1. create a function to take in a number
//2. Initiate a counter
//2. Loop through the numbers less or equal to the number
//3. test for numbers that have a remainder of zero and increase the counter

function getDivisorsCnt(n){
    let divisorCount = 0;
    for (i=0; i <= n; i++) {
        if (n % i === 0) {
            divisorCount++
        }
    }
    return divisorCount
}

console.log(getDivisorsCnt(5))