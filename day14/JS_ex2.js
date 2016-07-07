var my_dream_life = {};
var property_key = 'job';

my_dream_life[property_key] = 'Programmer';

var another_property_key = 'salary';

my_dream_life[another_property_key] = '$200,000';

console.log(my_dream_life[property_key]);
console.log(my_dream_life[another_property_key]);

var next_property = 'car';

my_dream_life[next_property] = 'BMW i8';

console.log(my_dream_life[next_property]);
console.log(my_dream_life['car']);

property_key = 'place';
my_dream_life[property_key] = 'Seoul';

property_key = 'work place';
my_dream_life[property_key] = 'Google';

property_key = 'travel';
my_dream_life[property_key] = 'Spain';

console.log(my_dream_life);
console.log(my_dream_life[property_key]);
