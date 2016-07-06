var fibonacci = function () {
  var count = parseInt(prompt("몇번째 피보나치 수열 값을 보고 싶으세요?"));
  var start = 1;
  var num1 = 0
  var num2 = 1
  var num3 = 0;

  if (count === 1) {
    var num3 = 0;
  } else if (count === 2) {
    num3 = 1;
  } else {
    while (start < count-1) {
      var num3 = num1 + num2;
      num1 = num2;
      num2 = num3;
      start++;
    }
  }
  return num3;
}

$('#output').append(fibonacci());
