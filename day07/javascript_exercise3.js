alert('모험을 시작해봅시다!!');

var vehicle = prompt("배를 타고 갈까요? 비행기를 타고 갈까요?");

if (vehicle === "배") {
  var firstEnding = "빙하에 부딪혔습니다. 모험이 끝났습니다.";
  alert(firstEnding);
  document.querySelector('#vehicle').textContent = firstEnding;
} else {
  alert("모험의 장소에 도착했습니다.");
  var direction = prompt("오른쪽으로 갈까요? 왼쪽으로 갈까요?");
  if (direction === "오른쪽") {
    alert("하하~~ 절벽이네요. 모험이 끝났습니다.");
  } else {
    var weapon = prompt("몬스터가 나타났습니다. 불을 쓸까요? 물을 쓸까요?");
    if (weapon === "물") {
      alert("아무 소용 없습니다. 모험이 끝났습니다.");
    } else {
      var final = prompt("몬스터를 물리쳤습니다. 절벽으로 갈까요? 동굴로 갈까요?");
      if (final === '절벽') {
        alert('몬스터 가족이 나타났습니다. 모험이 끝났습니다.');
      } else {
        alert('보물을 발견했습니다. 당신의 승리자입니다.');
      }
    }
  }
}
