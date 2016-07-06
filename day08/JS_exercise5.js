var num = 1;
var text = '';

// while ( num <= 100 ) {
//   if ( num % 3 === 0 && num % 5 !== 0) {
//     text = text + ' Fizz ';
//   } else if ( num % 3 !== 0 && num % 5 === 0) {
//     text = text + ' Buzz ';
//   } else if ( num % 3 === 0 && num % 5 === 0) {
//     text = text + ' FizzBuzz ';
//   } else {
//     text = text + num + ' ';
//   }
//   num += 1;
// }
//
// document.querySelector('#FizzBuzz').textContent = text;

while ( num <= 100 ) {
  if ( num % 3 === 0 && num % 5 !== 0) {
    text = text + '<p class="Fizz">' + 'Fizz' + '</p>';
  } else if ( num % 3 !== 0 && num % 5 === 0) {
    text = text + '<p class="Buzz">'+'Buzz' + '</p>';
  } else if ( num % 3 === 0 && num % 5 === 0) {
    text = text + '<p class="FizzBuzz">'+ 'FizzBuzz' + '</p>';
  } else {
    text = text + '<p>'+ num + '</p>';
  }
  num += 1;
}

document.querySelector('#FizzBuzz').innerHTML = text;
