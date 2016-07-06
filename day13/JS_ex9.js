var array_plucker = function(array1, index_to_remove) {
  var removed_value;

  removed_value = array1.splice(index_to_remove);
  return removed_value;
}

var days_of_school = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

var day_off = array_plucker(days_of_school, 4);

console.log("I'll go to school on: ", days_of_school);
console.log("but I'm taking vacation on ", day_off);
