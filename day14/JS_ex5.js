//obj ex

var obj = {
    greeting: 'howdy',
    direction: 'down',
    color: 'red',
    'spaces-and-dashes can be used': ' but need to have quotes'
}

//Cat object

var my_cat = {};

my_cat['species'] = 'corgi';
my_cat['age'] = 4;
my_cat['alive'] = true;
my_cat['favorite_toy'] = 'Tennis Ball';
my_cat['napping_spot'] = 'near boiler';

//My dream Life
var my_dream_life = {};
var property_key = 'job';

my_dream_life[property_key] = 'Programmer';

var another_property_key = 'salary';

my_dream_life[another_property_key] = '$200,000';

var next_property = 'car';

my_dream_life[next_property] = 'BMW i8';

property_key = 'place';
my_dream_life[property_key] = 'Seoul';

property_key = 'work place';
my_dream_life[property_key] = 'Google';

property_key = 'travel';
my_dream_life[property_key] = 'Spain';

//car
var car = {
  make: 'Toyata'
}

car["model"] = 'camry';

car.model = 'Prius';

var prop = 'year';

car.prop = 1992;

car["nothing_here"];

car.dream_car = 'BMW i8';

car.make = 'BMW';
car.model = 'BMW i8';
car.color = 'Silver';
car.year = 2016;
car.registered = false;

//Ex5
for(var key in my_cat) {
  console.log(key + ': ' + my_cat[key]);
}

for(var key in my_dream_life) {
  console.log(key + ': ' + my_dream_life[key]);
}

for(var key in car) {
  console.log(key + ': ' + car[key]);
}

for(var key in car) {
  if(key === 'color') {
    $('#target').append('<p>' + car[key] +'</p>');
  }
}

for(var i in obj) {
  if(obj[i] === 'down') {
    $('#target2').append('<p>' + i +'</p>');
  }
}

var target_key = 'greeting';

for (var i in obj) {
  if(i === target_key) {
    $('#target3').append('<p>' + obj[target_key] +'</p>');
  }
}
