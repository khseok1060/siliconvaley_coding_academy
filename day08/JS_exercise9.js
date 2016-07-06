var currentMoney = parseInt(prompt("현재금액은 얼마인가요?"));
var purposeMoney = parseInt(prompt("목표금액은 얼마인가요?"));
var interestRate = (parseFloat(prompt("연이자율은 얼마인가요?")))/100.00;
var changingMoney = currentMoney;
var years = 0;

while ( changingMoney < purposeMoney ) {
  changingMoney = changingMoney + (changingMoney * interestRate);
  years = years + 1;
}

var output = "현재의 금액 " + currentMoney +"원이 이자율 "
              + (interestRate * 100) + "로 목표금액 " +
              purposeMoney + "가 되려면 필요한 시간은 " +
              years + "년 입니다.";

document.querySelector('#output').textContent = output;
