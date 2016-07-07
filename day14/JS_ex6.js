var number = [2, 4, 5, 37, 0];
var doubled_numbers = {};

for(i=0; i<number.length; i++){
  doubled_numbers[number[i]] = number[i] * 2;
}

console.log(doubled_numbers);
