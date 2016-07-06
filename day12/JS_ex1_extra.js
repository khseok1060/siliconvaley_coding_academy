//var randomColor1 = '#' + Math.random().toString(16);

//Check how to work above var.
//console.log(randomColor1);
//console.log(randomColor);

$('button#change').click( function() {
  var randomColor = '#' + Math.random().toString(16).slice(2, 8);
  $('body').removeAttr('style');
  $('body').css({
    'background-color': randomColor
  });
});
