var original = [1, 2, 3, 4, 5, 6, 7, 8];

var reverser = function(array) {
  var reversed_array = [];
  for (i = array.length; i > 0; i--) {
    reversed_array.push(array[i-1]);
  }
  return reversed_array;
}

console.log(reverser(original));
