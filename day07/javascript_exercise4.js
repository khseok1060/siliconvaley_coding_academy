var hero, badGuy;

hero = prompt("hero가 strong한가요?");

if (hero === 'strong') {
  badGuy = prompt('Bad Guy가 weak한가요?');
  if (badGuy === 'weak') {
    console.log('적이 약하군, 아주 쉬운 싸움이겠어');
  }
} else {
    console.log('만만한 상대가 아니군, 끝까지 싸워보자!');
}
