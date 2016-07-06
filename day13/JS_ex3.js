var recipe = ['pizza', 'pasta', 'cheesecake', 'donkatsu'];

var bucket_list = [];

bucket_list[0] = 'visiting SF';
bucket_list[1] = 'meet Obama';

bucket_list.push('play violin');
bucket_list.unshift('learn Python');

//recipe 넣기
var i = 0;
while ( i < recipe.length) {
  $('#recipe').append('<p>'+ recipe[i] +'</p>');
i++
};

//bucket_list 넣기
var j = 0;
while ( j < recipe.length) {
  $('#bucket_list').append('<p>'+ bucket_list[j] +'</p>');
j++
};


var append_strings = function ( index ) {
  var i = 0;
  while( i < index.length ) {
    console.log(index[i]);
    i++;
  }
}

append_strings(recipe);
append_strings(bucket_list);


var exam = 'exam';
var append_strings = function ( arrayOfStrings, element ) {
  var i = 0;
  var target = '#' + element;
  while(i < arrayOfStrings.length){
    $(target).append('<p>'+ arrayOfStrings[i] + '</p>');
    i++;
  }
}

append_strings(recipe, exam);
