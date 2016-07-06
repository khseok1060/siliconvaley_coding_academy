var factorialOfN = function (num) {
  var result = 1;
  while (num > 1) {
    result =  result * num;
    num--;
  }
  return result;
}

var factResult = factorialOfN(parseInt(prompt("숫자를 입력하세요")));
document.querySelector('#output').textContent = factResult;

var count = function(num1, num2) {
  var start = 0;
  while (start < num1) {
    console.log(start);
    start = start + num2;
  }
}

count(parseInt(prompt("어디까지 갈까요?")), parseInt(prompt("얼마씩 갈까요?")));
