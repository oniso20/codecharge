// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str) {
  let newString = str.split('-');
  newString = newString.map(
    //.map takes in... arr.map(function(item, index, array) {
    function(item, index) {
      if (index == 0) {
        return item.toLowerCase()
      } else {
        return item[0].toUpperCase() + item.slice(1)
      }
    }
  )
  newString = newString.join('')
  return newString
}

console.log(camelize('border-left-width'))

