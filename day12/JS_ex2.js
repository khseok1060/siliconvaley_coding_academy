$('div').on('click', function() {
  console.log('A div has been clicked!');
});

$('#target').click(function() {
  $('#target').show().css('color', 'red').text('boom goes the dynamite!');
});

$('#money').click(function() {
  $('#money').show().html('<img id="showmoney" style="width: 100px; height: 100px;" src="http://www.preapps.com/blog/wp-content/uploads/2016/04/GTY_stock_cash_pile_money_dollar_bills-thg-130726_33x16_1600.jpg">');
  $('#oprahpic').hide();
  $('#money').show().append('<p>show me the money</p>');
  $('#money').click(function() {
    $('#showmoney').hide();
  });
});

$('#oprah').click(function() {
  $('#oprah').show().html('<img id="oprahpic" style="width: 100px; height: 100px;" src="http://static.oprah.com/images/o2/201404/oprah-tour-bio-1-949x534.jpg">');
  $('#showmoney').hide();
  $('#oprah').show().append('<p>show me the oprah</p>');
  $('#oprah').click(function() {
    $('#oprahpic').hide();
  });
});
