var ask = prompt('green, red, blue 중 어떤 색의 웹페이지를 보고 싶으신가요?');
var breakNum = 0;

while(true) {
  if(ask === 'green' || ask === 'red' || ask ==='blue') {
    break;
  } else {
    ask = prompt('green, red, blue 중 어떤 색의 웹페이지를 보고 싶으신가요?');
  }
}

if ( ask === 'green' ) {
  $('body').css('background-color', 'lightgreen');
  $('#exam').css('color', 'green');
  $('div').css('border', '1px solid darkgreen');
  $('body').append('<div class="result"><p>Green을 적용한 값입니다.</p></div>');
  $('body').append('<img style="width:300px; height:300px;" src="http://i.jootix.com/o/Leaf-green-leaf.jpg">');
} else if ( ask === 'red' ) {
  $('body').css('background-color', 'pink');
  $('#exam').css('color', 'red');
  $('div').css('border', '1px solid darkred');
  $('body').append('<div class="result"><p>Red를 적용한 값입니다.</p></div>');
  $('body').append('<img style="width:300px; height:300px;" src="http://efdreams.com/data_images/dreams/red/red-05.jpg">');
} else if ( ask === 'blue' ) {
  $('body').css('background-color', '#00ffff');
  $('#exam').css('color', 'blue');
  $('div').css('border', '1px solid #4000ff');
  $('body').append('<div class="result"><p>Blue를 적용한 값입니다.</p></div>');
  $('body').append('<img style="width:300px; height:300px;" src="https://pixabay.com/static/uploads/photo/2013/04/14/20/24/water-103817_960_720.jpg">');
}
