var new_div = $('<div class="important">Got a new div coming in here!</div>');

new_div.css('color','red').attr('id','primary').text("Hi, I'm new here");

$('body').append(new_div);

new_div.fadeOut(2000).delay(1000).fadeIn().slideUp(4000);
