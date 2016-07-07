var inputArray = [];

$('button#addTrigger').click(function() {
  if($('input#userInput').val() !== '끝'){
    inputArray.push($('input#userInput').val());
    console.log(inputArray);

  } else if ($('input#userInput').val() === '끝' || $('button#showResult').click()) {
    $('#myInput').append('<p>'+ inputArray + '</p>');
    $('#result').append('<p>'+ inputArray + '</p>');
  }
});
