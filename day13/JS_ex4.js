var scrambled_poem = "roses red are bacon crispy i bacon love and is blue violets are";

var scrambled_array = scrambled_poem.split(' ');

var unscrambled_array = function (exam) {
  var unArray = [];
  var i = 0;

  while ( i < exam.length) {
    unArray.push(exam.pop());
    unArray.push(exam.shift());
    i++;
  }

  console.log(unArray.join(' '));
};

unscrambled_array(scrambled_array);
