var car = {
  make: 'Toyata'
}

car["model"] = 'camry';
console.log(car['model']);
console.log(car.model);

car.model = 'Prius';
console.log(car['model']);
console.log(car.model);

var prop = 'year';

car.prop = 1992;

car["nothing_here"];
console.log(car.nothing_here);

car.dream_car = 'BMW i8';

console.log(car);

car.make = 'BMW';
car.model = 'BMW i8';
car.color = 'Silver';
car.year = 2016;
car.registered = false;

console.log(car);
