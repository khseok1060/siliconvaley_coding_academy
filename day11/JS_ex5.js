var funnySentence = function () {
  var noun = prompt("명사를 입력하세요");
  $('#noun').text(noun);

  var verb = prompt("동사를 입력하세요");
  $('#verb').append(' ' + verb);

  var adjective = prompt("형용사를 입력하세요");
  $('#adjective').append(' ' + adjective);
}

$('#noun').css({
  'color': 'blue',
  'font-weight': 'bold'
});

$('#verb').css({
  'color': 'red'
});

$('#adjective').css({
  'color': 'orange',
});

funnySentence();
