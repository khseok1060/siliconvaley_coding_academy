var type_tester = function(input) {
  if(Array.isArray(input)) {
    console.log('array');
  } else {
    console.log(typeof(input));
  }
}

type_tester(3);
type_tester('hello');
type_tester({});
type_tester([]);
