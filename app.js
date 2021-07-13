const animals = ['cow', 'pig', 'chicken', 'hen', 'rooster', 'turkey', 'horse', 'donkey', 'barn cat', 'sheep'];
const animalNameDisplay = document.getElementById('animalName');
let randomAnimalIndex = Math.floor(Math.random() * animals.length);
let randomAnimal = animals[randomAnimalIndex];

// SCRAMBLE CODE STARTS
function getNewRandomAnimal() {
    randomAnimalIndex = Math.floor(Math.random() * animals.length);
    randomAnimal = animals[randomAnimalIndex];
}

function scramble(animalName) {

    let firstWord = "",
        secondWord = ""; // for animals that have more than one word
    const animalNameArray = animalName.split(""); // convert string to array for isolating each letter

    for (let i = 0; i < animalNameArray.length; i++) {
        let character = animalNameArray[i];

        if (character === " ") { // if the animal name contains a space therfore is more than one word
            const a = animalName.split(" ");
            firstWord = a[0];
            secondWord = a[1];
            break;
        }
    }

    while (true) { // will loop more than once if the "scrambled" word by chance turns out to be the same as the original word
        let scrambledName = "";

        if (secondWord === "") { // if animal name is only one word
            scrambledName = scrambleAnimalName(animalName);
            if (scrambledName !== animalName) { // ensure the result isn't the same as the original unscrambled word
                return scrambledName;
            }
        } else { // animals that are two words
            let firstWordScrambled = "",
                secondWordScrambled = "";

            firstWordScrambled = scrambleAnimalName(firstWord)
            secondWordScrambled = scrambleAnimalName(secondWord);
            scrambledName = firstWordScrambled + " " + secondWordScrambled;

            if (firstWord !== firstWordScrambled && secondWord !== secondWordScrambled) { // ensure the result of both words isn't the same as the original unscrambled words
                return scrambledName;
            }
        }
    }
}

animalNameDisplay.innerHTML = scramble(randomAnimal);

function scrambleAnimalName(animalName) {
    const a = animalName.split(""), n = a.length;

    for (let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)),
            temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    scrambledWord = a.join("");
    return scrambledWord;
}
// SCRAMBLE CODE STOPS

// GET INPUT AND VALIDATE STARTS
function changeScreenElements() {
    const guess = document.getElementById("guess").value;
    const result = document.getElementById("result");

    if (guess.toLowerCase() === randomAnimal) {
        document.getElementById("guess").value = "";
        result.innerHTML = "Correct!";
        changeScrambledAnimalOnScreen();
    } else {
        document.getElementById("guess").value = "";
        result.innerHTML = "Incorrect";
    }

    function changeScrambledAnimalOnScreen() {
        animals.splice(animals.indexOf(randomAnimal), 1);
        // if (animals.length === 0) arrayIsEmpty = true;
        getNewRandomAnimal();
        animalNameDisplay.innerHTML = scramble(randomAnimal);
    }
}
// GET INPUT AND VALIDATE ENDS

// function displayGameOver() {
//     const gameOverText = document.getElementById("gameOver");
//     gameOverText.style.display = "block";
// }

// function clearScreenText() {
//     const div = document.querySelector('div');
//     const timer = document.getElementById('countdown');
//     div.style.display = 'none';
//     timer.style.display = 'none';
// }

exports.clearScreenText = () => {
    const div = document.querySelector('div');
    const timer = document.getElementById('countdown');
    div.style.display = 'none';
    timer.style.display = 'none';
}