if (true) {
  console.log('안녕하세요!');
}

if (false) {
  console.log('이거는 실행안될겁니다.');
}

if (window.prompt("기분이 어때요?")==='기분이 좋지 않다') {
  console.log('힘내세요!');
}

if (window.prompt("숫자를 쓰세요") !== '3') {
  window.alert("틀렸습니다");
}

if (window.prompt("Passowrd를 쓰세요") === '1234') {
  console.log("환영합니다");
} else {
  window.location = "http://www.google.com";
}
