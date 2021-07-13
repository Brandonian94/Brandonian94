// const startingMinutes = 1;
// let time = startingMinutes * 60;
let time = 2;

const countdownEl = document.getElementById('countdown');

const ticker = setInterval(updateCountdown, 1000);

import { clearScreenText } from './app.js';

// function clearScreenText() {
//     const allTextDuringGame = document.querySelectorAll("p");
//     const guessTextField = document.getElementById("guess");
//     const result = document.getElementById("result");

//     result.innerHTML = "";
//     guessTextField.style.display = "none";
//     allTextDuringGame.style.display = "none";
// }

// function displayGameOver() {
//     const gameOverText = document.getElementById("gameOver");
//     gameOverText.style.display = "block";
// }

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;

    time--;

    if (seconds === "00" && minutes === 0) {
        clearInterval(ticker);
        clearScreenText();
        // displayGameOver();
    }
}
