Title:
//Find the vowels

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].
Example:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

function vowelIndices(word){
  let vowelIdx = []
  let vowels = 'aeiouyAEIOUY'
  word.split('').forEach((item, idx) => {
      if (vowels.includes(item)) {
          vowelIdx.push(idx + 1)
      }
  })
  return vowelIdx
}

console.log(vowelIndices('super'))