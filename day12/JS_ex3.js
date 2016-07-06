$('#target').on('mouseover', function() {
  $('#target').addClass('highlighted');
});

$('#target').on('mouseleave', function() {
  $('#target').removeClass('highlighted');
});

$('#magic').on('mouseover', function() {
  $('#pic').hide();
});
