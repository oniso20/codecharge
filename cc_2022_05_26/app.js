PREP 
//Title: Vowel Count

Parameters:
//Takes in a string, made of lower case letters and/or spaces

Return:
//Returns an integer. The count of vowels in the given string.

Examples:
//'John is a boy' will result in => 4

Pseudocode:

// The function takes in an input string only consisting of lower case letters and/or spaces.
// Loop through the strings
//Counts the number of vowels i.e a, e, i, o, u

function getCount(str) {
    let vowelsCount = 0;
    str = str.split('')
    
    str.forEach(item => {
        if (item.includes('a') || (item.includes('e')) || (item.includes('i'))|| (item.includes('o'))|| (item.includes('u'))) {
            vowelsCount++
        }
    })
    
    return vowelsCount;
  }
console.log(getCount('abaei'))
