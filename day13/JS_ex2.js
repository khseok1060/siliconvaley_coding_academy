var bucket_list = [];

bucket_list[0] = 'visiting SF';
bucket_list[1] = 'meet Obama';

bucket_list.push('play violin');
bucket_list.unshift('learn Python');

console.log(bucket_list.length);

var dying_wish = bucket_list.pop();

var do_it_now = bucket_list.shift();

console.log(dying_wish);
console.log(do_it_now);

console.log(bucket_list.length);
