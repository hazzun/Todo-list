const form = document.querySelector(".guess-form");
const guessNumber = document.querySelector(".guess-number");
const answerCompare = document.querySelector(".compare");
const answerResult = document.querySelector(".result");
const inputRange = document.querySelector(".number-range");

function playGame(event) {
    event.preventDefault();
    const guessNumberInput = guessNumber.value;
    console.log(guessNumberInput);

    const inputRangeValue = parseInt(inputRange.value) + 1;
    const createRange = Math.floor(Math.random() * inputRangeValue);
    localStorage.setItem("randomNumber", createRange);
    console.log(createRange);
    answerCompare.innerText = `You chose: ${guessNumberInput}, the machine chose: ${createRange}.`;
    answerCompare.classList.remove("hidden");

    if (guessNumberInput === localStorage.getItem("randomNumber")) {
        answerResult.innerText = `You won!`;
        answerResult.classList.remove("hidden");
    } else {
        answerResult.innerText = `You lost!`;
        answerResult.classList.remove("hidden");
    }
}

form.addEventListener("submit", playGame);