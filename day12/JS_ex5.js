// var el_finder = function(event) {
//   console.log("calling el_finder for:", this, event.target);
//   $(this).attr('id', 'active');
// }
//
// $('div').click(el_finder);

// var change_id = function(event) {
//   $('#output').attr('id', this.id);
//   $('div').removeClass('highlighted');
//   $(this).addClass('highlighted');
// };

// var output = $('#output'); //주소값 저장입니까??

var output = $('#output');

var change_id = function(event) {
  output.attr('id', this.id);
  $('div').removeClass('highlighted');
  $(this).addClass('highlighted');
};

$('#first-para').click(change_id);
$('#second-para').click(change_id);
$('#third-para').click(change_id);
