var nsa_surveillance = function(event) {
  $('label').text(event.keyCode);
  $('#target').append('<p>'+ event.keyCode + '</p>');
};

$('input#type').on('keypress', nsa_surveillance);

// $('input#type').on('keypress', function() {
//   $('label').text(event.keyCode);
//   $('#target').append('<p>'+ event.keyCode + '</p>');
// });

$('body').on('keypress', function() {
  String.fromCharCode(event.keyCode);
});
