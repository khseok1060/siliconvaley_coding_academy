var n = 5;
var i = 1;

while ( i <= n ) {
    var j = 1;
    var numText = '';
    var numText2 = '';

    if (i === 1) {
      console.log("welcome " + i);
    } else {
      if (i === 2) {
        while ( j <= i ) {
          if ( j === i-1 ) {
            numText2 = " meet " + j;
          }
          console.log("welcome "+ i + numText2);
          j = j + 1;
        }
      } else {
        while ( j <= i ) {
          if ( j === i-1 ) {
            numText2 = " and " + j;
          } else if ( j < i-1 ) {
            if( j < i-2 ){
              numText = numText + j + ', ';
            } else if ( j === i-2 )
              numText = numText + j;
          }
          var meetText = " meet " + numText + numText2;
          j = j + 1;
        }
        console.log("welcome "+ i + meetText);
      }
    }
i = i + 1;
}

// var i = 1;
// var j = 1;
// var n = 5;
// var textString = '';
// while(i <= n) {
//   textString = 'welcome ' + i;
//   j = 1;
//   while(j < i){
//     if(j === 1){
//       textString = textString +  ', meet 1';
//     } else if (j === i - 1){
//       textString = textString + ', and ' + j;
//     } else {
//       textString = textString + ', ' + j;
//     }
//     j += 1;
//   }
//   i = i + 1;
//   console.log(textString);
// }
