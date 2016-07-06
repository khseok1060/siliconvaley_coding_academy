var n = 0

while ( n <= 20 ) {
  if ( n !== 13) {
    if ( n % 2 === 0) {
      console.log("I like the number " + n + ", a nice even number.");
    } else if ( n % 2 !== 0) {
      console.log("I like the number " + n + ", odd is okay too!");
    }
  } else {
    console.log("la-la-la, nothing to say here");
  }
  n++;
}

//   if ( n !== 13 && n % 2 === 0 ) {
//     console.log("I like the number " + n + ", a nice even number.")
//   } else if ( n !== 13 && n % 2 !== 0 ) {
//     console.log("I like the number " + n + ", odd is okay too!")
//   } else {
//     console.log("la-la-la, nothing to say here")
//   }
//   n++
// }
