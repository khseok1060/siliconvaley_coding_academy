var response, image_path,
    secret_saying = document.querySelector('#message').textContent;

if (secret_saying === '독수리는 자정에 날라갑니다') {
  response = "통과하세요";
  image_path = "images/open_door.png";
} else {
  response = "적이다 공격하라";
  image_path = "images/attack.png";
}

document.querySelector('#result').textContent = response;
document.querySelector('img').src = image_path;
