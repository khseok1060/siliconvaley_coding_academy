var n = parseInt(prompt("숫자를 입력하세요!"));
var sum = 1;
var text = '';
var startNum = 1;

while ( startNum <= n ) {
  sum = sum * startNum ;
  startNum = startNum + 1;
}

var textN = '<p class="startNum">시작 정수 값: '+ n + text + '</p><hr>';
var textSum = '<p>' + sum + text +'</p>';

document.querySelector('#startNum').innerHTML = textN;
document.querySelector('#target').innerHTML = textSum;
