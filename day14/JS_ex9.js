var complex_object = {
  string: "I'm a string!",
  number: 42,
  array: ["all sorts of stuff", 10, true, undefined, {me: "an object", more: "find me in here!"}, function(){console.log('beepity-beep')}],
  simple_object: {name: 'bob', location: 'basement'},
  fn: function(){
    console.log("fn has been invoked! Checking both kinds of invocation-time inputs...");
    console.log("what is my calling context?", this);
    console.log("what are my arguments?", arguments);
  }
}

for (var i in complex_object) {
    if(i === 'string' || i === 'number') {
      $('#primitive_data_types').append('<p>'+ i +'</p>');
    }
}

for (i=0 ; i<complex_object.array.length; i++) {
  if (typeof(complex_object.array[i]) !== 'object' && typeof(complex_object.array[i]) !== 'function') {
      $('#array_values').append('<p>'+ complex_object.array[i] +'</p>');
  } else {
    var objectList = '';
    for(var j in complex_object.array[i]) {
      objectList = objectList + j + ': ' + complex_object.array[i][j] + ' ';
    }
    $('#array_values').append('<p> { ' + objectList +' } </p>');
  }
}

for (var b in complex_object.simple_object) {
  $('#bobDescription').append('<p>'+ b +': '+complex_object.simple_object[b] +'</p>');
}

complex_object.array[5]();
complex_object.fn();
