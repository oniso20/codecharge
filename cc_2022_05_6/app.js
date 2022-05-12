PREP 
Title: Credit Card Mask
  
Parameters:
//Takes in any input
  
Return:
//Returns all but the last four characters into '#'
  
Examples:
"4556364607935616" --> "############5616"
"64607935616" -->      "#######5616"
"1" -->                "1"
"" -->                 ""
"Skippy" --> "##ippy"
  
Pseudocode:
//1. create a function to take in a single parameter
//2. text if the input length is > 4
// or just replace up to -4 length

function maskify(cc) {
    return cc.split('').map((item, idx) => idx < cc.length -4 ? '#' : item ).join('')
    }
console.log(maskify("4556364607935616"))