var text = '';

var newDate = function () {
  console.log("어서오세요!" + new Date());
  var text = "어서오세요!" + new Date();
  return text;
}

newDate();
document.querySelector('#output').textContent = newDate();

var enthu = "열정적인 문자";
$('#output').append(enthu);
