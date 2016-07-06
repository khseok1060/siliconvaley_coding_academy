$('button#go').on('click', function() {
  var colorText = $('input#color').val();
  $('#output').text( colorText );
  $('body').css({
    'background-color': colorText
  });
});
