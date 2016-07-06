var mouse_tracker = function(event) {
  console.log(event.pageX, event.pageY, !!event.which);
};

// $('body').on('mousemove', mouse_tracker);


var mouse_follow = function(event) {
  $('#dog').css({
    'top': event.pageY - 100 + 'px',
    'left': event.pageX - 100 + 'px'
  });
}

$('body').on('mousemove', mouse_follow );
