$('body').append('<div id="container"></div>');
$('#container').append('<img id="number1" src="http://svce.acm.org/wp-content/uploads/2013/07/keep-calm-and-try-coding.png">');
$('img').css({"width":"80%", "height":"60%"});
$('#container').append('<img id="number2" src="http://cdnph.upi.com/sv/b/i/UPI-5221440075520/2015/1/14400768644886/Google-study-Coding-is-a-low-priority-in-US-schools.jpg">');
$('#container').append('<img id="number3" src="https://d.ibtimes.co.uk/en/full/1396989/coding-national-curriculum-computing.jpg">');
$('#container').append('<img id="number4" src="http://www.diegopulido.com/wp-content/uploads/2013/08/coding-future.jpg">');
$('img').css({"width":"200px", "height":"200px"});

var interval = setInterval(function() {
    $('#number1').effect( "bounce", { times: 3 } , "slow" );
    $('#number2').effect( "clip" );
    $('#number3').effect( "drop" , "right" );
    $('#number4').effect( "explode" );
}, 500);

var x = Math.round(Math.random() * 1000);
var y = Math.round(Math.random() * 1000);

$('#number1').innerHeight(x);
