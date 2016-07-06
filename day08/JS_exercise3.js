var n = parseInt(prompt('원하시는 숫자를 입력해주세요'));
var start = 1;
var text = '';

// while ( start <= n ) {
//   if ( start !== n ) {
//     text = text + start + ', ';
//   } else if ( start === n ) {
//     text = text + start;
//   }
//   start = start + 1;
// }

// while ( start <= n ) {
//   if ( start !== n ) {
//     text = '<p>'+ text + start + '</p>' + '<hr></hr>';
//   } else if ( start === n ) {
//     text = '<p>'+ text + start + '</p>';
//   }
//   start = start + 1;
// }

while ( start <= n ) {
  if ( start !== n ) {
      if ( start % 2 === 0 ) {
        text = text + '<p class="even">'+ start + '</p>' + '<hr>';
      } else if ( start % 2 !== 0) {
        text = text + '<p class="odd">'+ start + '</p>' + '<hr>';
      }
    } else if ( start === n ) {
        if ( start % 2 === 0 ) {
            text = text + '<p class="even">' + start + '</p>';
        } else if ( start % 2 !== 0) {
            text = text + '<p class="odd">' + start + '</p>';
        }
    }
  start = start + 1;
}

document.querySelector('#target').innerHTML = text;
