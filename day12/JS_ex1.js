var fn = function () {
  console.log('heeey');
}

fn();

document.querySelector('#target').addEventListener('click',fn);

document.querySelector('#target').addEventListener('click', function() {
  console.log('same deal');
});

var beeper = function () {
  $('#target').append('<p>beep</p>');
}

document.querySelector('#btn').addEventListener('click', beeper);
