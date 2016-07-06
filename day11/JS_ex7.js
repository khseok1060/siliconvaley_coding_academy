var thisThat = function () {
  var triple = prompt("원하는 단어 하나쓰세요");
  var fifth = prompt("또다른 원하는 단어 하나쓰세요");

  var num = 1;
  while(num < 101) {
    if(num % 3 === 0 && num % 5 === 0 ) {
      $('#output').append(triple + fifth + '<br>');
    } else if (num % 3 === 0) {
      $('#output').append(triple + '<br>');
    } else if (num % 5 === 0) {
      $('#output').append(fifth + '<br>');
    } else {
      $('#output').append(num + '<br>');
    }
  num++;
  }
}

thisThat();
