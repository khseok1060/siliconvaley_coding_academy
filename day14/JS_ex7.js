var favorites = []

var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt',
    'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis']

var obama_jobs = []

var politicos = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
}

for(i=0; i<famous.length; i++) {
  if(famous[i][0] === 'a'){
      favorites.push(famous[i]);
  }
}

console.log(favorites);

for(var i in politicos) {
  famous.push(politicos[i]);
}

console.log(famous);

for(var j in politicos) {
  if(politicos[j].match('obama')) {
    obama_jobs.push(j);
  }
}

console.log(obama_jobs);

var b_named_politicos ={};

for(var i in politicos) {
  if(politicos[i][0].match('b') || politicos[i].match(' b')) {
    b_named_politicos[i] = politicos[i];
  }
}

console.log(b_named_politicos);

var reverse_politico_lookup = {};

for (var i in politicos) {
  reverse_politico_lookup[politicos[i]] = i;
}

console.log(reverse_politico_lookup);
