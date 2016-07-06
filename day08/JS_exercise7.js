var comAns;
var user;
var moreGame = "yes";
var com = Math.ceil(Math.random() * 10);

var welcome = alert("게임을 시작하겠습니다.");

while ( moreGame === 'yes' ) {

  if (1 <= com <= 3 ) {
    comAns = "가위";
  } else if (4 <= com <= 6) {
    comAns = "바위";
  } else if (7 <= com <= 9) {
    comAns = "보";
  }

  var user = prompt("가위, 바위, 보");

  if( user === "가위") {
    if ( comAns === "가위" ) {
      alert("비겼습니다.");
    } else if ( comAns === "바위" ) {
      alert("졌습니다.");
    } else if ( comAns === "보") {
      alert("이겼습니다.");
    }
  } else if ( user === "바위") {
    if ( comAns === "가위") {
      alert("이겼습니다.");
    } else if ( comAns === "바위" ) {
      alert("비겼습니다.");
    } else if ( comAns === "보") {
      alert("졌습니다.");
    }
  } else if ( user === "보" ) {
    if ( comAns === "가위" ) {
      alert("졌습니다.");
    } else if ( comAns === "바위" ) {
      alert("이겼습니다.");
    } else if ( comAns === "보") {
      alert("비겼습니다.");
    }
  }
  var moreGame = prompt("게임을 더하시겠습니까? Yes or No").toLowerCase();
  com = Math.ceil(Math.random() * 10);
}
