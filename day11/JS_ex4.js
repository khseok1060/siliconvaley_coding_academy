var tripler =  function (num) {
  return num * 3;
}

var product = function (num1, num2) {
  return num1 * num2;
}

var divide = function (num1, num2) {
  return num1 / num2;
}

var remainer = function (num1, num2) {
  return num1 % num2;
}

var result = remainer(divide(product(tripler(5), 12), 2), 7);
console.log(result);



// var value_logger = function (value) {
//   console.log(value);
// }
//
// value_logger("Howdy ho, neighborino!");
//
// //value;
//
// value_logger(3 + 7);
//
// value_logger(3, 7);
//
// var doubler = function (num) {
//   return num * 2;
// }
//
// var shouldBeTen = doubler(5);
// console.log(shouldBeTen);
//
// var doubleValueLogger = function (value1, value2) {
//   console.log(value1, value2);
// }
//
// doubleValueLogger("hello", "how are you");
//
// doubleValueLogger("hello");
//
// var add = function (num1, num2) {
//   return num1 + num2;
// }
//
// var sum = add(7, 12);
// console.log(sum);
