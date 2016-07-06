var i = 0;

while ( i < 10) {
  var get_sentence = function() {

    var randomNumber = Math.round(Math.random()*100);
    var text;

    if ( 0 <= randomNumber && randomNumber <= 30 ) {
      text = "get_sentence라는 function을 script tag안에서 define하세요.";
    } else if ( 31 <= randomNumber && randomNumber <= 70 ) {
      text = "get_sentence는 2개이상의 문장에서 하나를 무작위(random)로 선택하여 반환(return)하여야 합니다.";
    } else {
      text = "new_sentence라는 variable안에 value를 저장해주세요.";
    }
    console.log(text);
    return text;
  }

  var new_sentence = get_sentence();
  document.querySelector('p').textContent = new_sentence;
  i++;
}
