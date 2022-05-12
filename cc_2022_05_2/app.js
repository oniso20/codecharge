Title:
//Disemvowel Trolls

// vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function getCount(str) {
    str = str.split('')
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    return str.filter((item) => !vowels.includes(item)).join('') 
  }
console.log(getCount('This website is for losers LOL!'))