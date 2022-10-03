const gameForm = document.querySelector("#gameForm");
const maxNumInput = document.querySelector("#maxNumber");
const guessNumInput = document.querySelector("#guessNumber");
const score = document.querySelector("#score");
const result = document.querySelector("#result");
const resultArea = document.querySelector("#resultArea");

const HIDDEN_CLASSNAME = "hidden";

function getRandomInt(max) {
  const result1 = Array.from({ length: max }, () =>
    Math.floor(Math.random() * max)
  );
  result1.push(max);
  const result2 = result1[Math.floor(Math.random() * result1.length)];

  return result2;
}

function onLoginSubmit(event) {
  event.preventDefault();

  let maxNumber = parseInt(maxNumInput.value);
  let guessNumber = parseInt(guessNumInput.value);
  let machineNumber = getRandomInt(maxNumber);

  if (maxNumber === "" || guessNumber === "") {
    alert("값을 입력해주세요!!");
    resultArea.classList.add(HIDDEN_CLASSNAME);
  } else if (maxNumber <= 0) {
    alert("최대값을 0보다 크게 입력해주세요!!");
    resultArea.classList.add(HIDDEN_CLASSNAME);
  } else if (guessNumber < 0) {
    alert("추측값을 0이상 입력해주세요!!");
    resultArea.classList.add(HIDDEN_CLASSNAME);
  } else if (maxNumber < guessNumber) {
    alert("추측값이 최대값보다 큽니다!!");
    resultArea.classList.add(HIDDEN_CLASSNAME);
  } else {
    resultArea.classList.remove(HIDDEN_CLASSNAME);
  }
  score.innerText = `You chose: ${guessNumber}, the machine chose: ${machineNumber}`;

  if (machineNumber !== guessNumber) {
    result.innerText = "You Lose";
  } else {
    result.innerText = "You Won";
  }
}

gameForm.addEventListener("submit", onLoginSubmit);
