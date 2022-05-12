// Name Shuffler

// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str) {
  //.sort() alone did not pass all the test
  return str.split(' ').reverse().join(' ');
}
console.log(nameShuffler('john McClane'));