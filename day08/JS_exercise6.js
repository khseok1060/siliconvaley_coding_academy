var answer = 32;
var num;

while ( num !== answer ) {
  num = parseInt(prompt("0보다 큰 정수를 입력해주세요!!"));
  if ( num < answer ) {
    alert("더 큰 숫자를 입력해주세요!");
  } else if ( num > answer ) {
    alert("더 작은 숫자를 입력해주세요!");
  }
}

var congra = "정답입니다.";
document.querySelector("#congra").textContent = congra;
