$('button#ask').click(function(){
  var words = ['OMG', 'No', 'Yes', "I don't know", 'What?', 'Pardon?', 'Go!!', 'Me,too', 'Shhhhh~', 'Absolutely'];
  var rand = Math.floor(Math.random() * words.length);
  var star = '*';

  for(i = 0 ; i < words[rand].length ; i++){
    star += '*';
  }

  $('#answer').text(words[rand]);
  $('#up').text(star);
  $('#down').text(star);

});
