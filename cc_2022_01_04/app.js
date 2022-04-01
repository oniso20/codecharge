// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//Make a function that takes in an array
//map through the array, double each element (*2) and return the resulting array

function doubles(array){
    return array.map(item=>item*2)
  }

  //Test
  doubles([1,2,3])
  console.log(doubles([1,2,3]),[4,6,8])