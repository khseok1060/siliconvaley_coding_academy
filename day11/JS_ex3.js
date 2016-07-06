
var logAndReturn = function() {
    console.log(arguments);
    return arguments;
}

var returnedValues = logAndReturn(1, 2, 3);

document.querySelector('#output').textContent = logAndReturn(returnedValues);
