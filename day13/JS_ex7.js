var array_duplicator = function(inputArray) {
  var outputArray = [];

  //code here
  outputArray = inputArray.slice();
  return outputArray;
};

var original = [1, 2, 3, 4];
var duplicated = array_duplicator(original);

duplicated.pop();
duplicated.pop();
duplicated.pop();

console.log(original, duplicated)
