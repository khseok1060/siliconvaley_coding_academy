var userAns = parseInt(prompt("정수를 입력하세요"));

if (userAns === NaN) {
  userAns = parseInt(prompt("정수를 다시 입력하세요"));
}

var count = 0;
var comAns = Math.ceil(Math.random() * 100);

while ( comAns !== userAns ) {
  count = count + 1;
  if ( comAns < userAns ) {
    alert("정답은 더 작은 정수입니다.");
  } else if ( comAns > userAns ) {
    alert("정답은 더 큰 정수입니다.")
  }
  userAns = parseInt(prompt("정수를 입력하세요"));

  if (userAns === NaN) {
    userAns = parseInt(prompt("정수를 다시 입력하세요"));
  }
}

var answer = "정답은 " + comAns + " 입니다."
var displayCount = count + "번 만에 정답을 맞췄습니다."
var story = "상으로 재미있는 문제를 내겠습니다. 발이 두개 달린 소는? 이발소"

document.querySelector("#answer").textContent = answer;
document.querySelector("#displayCount").textContent = displayCount;
document.querySelector("#story").textContent = story;
