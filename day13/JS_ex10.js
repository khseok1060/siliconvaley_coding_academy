var words = ['OMG', 'No', 'Yes', "I don't know", 'What?', 'Pardon?', 'Go!!', 'Me,too', 'Shhhhh~', 'Absolutely'];
var wordsRefresh = [];

$('button#ask').click(function(){
  var rand = Math.floor(Math.random() * words.length);
  var star = '*';

  for(i = 0 ; i < words[rand].length ; i++){
    star += '*';
  }

  $('#answerSheet').append('<div id=answer></div>');
  $('#answer').append('<p>' + $('input').val() + '</p>');
  $('#answer').append('<p>' + star + '</p>');
  $('#answer').append('<p>' + words[rand] + '</p>');
  $('#answer').append('<p>' + star + '</p>');

  if(words.length > 0) {
    var wordsSplice = words.splice(rand ,1);
    wordsRefresh.push(wordsSplice);
  }

  console.log(wordsSplice);
  console.log(wordsRefresh);

});

$('button#refresh').click(function() {
  $('#answerSheet').html(
    "<div id=answer></div>"
  );

  words = words.concat(wordsRefresh); //words에 남아있는 것과 wordsrefresh를 합치기
  wordsRefresh = []; //wordsRefresh empty하는 방법.
});
