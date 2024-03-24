let randomNumber = parseInt(Math.random() * 100 + 1)
// console.log(randomNumber)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');
const p = document.createElement('p');


let prevGuess = []
let numGuess = 1
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGame(guess)
    })
}




function validateGame(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid Number')
    } else if (guess < 1) {
        alert('Number Must be grater than 1 or Equal To 1')
    } else if (guess >= 100) {
        alert('Number Must be Less than 100 or Equal To 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over and random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }

    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Your guess is right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is Toooo Low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is Toooo high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} | `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h1>${message}</h1>`
}


function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id="newGame">Restart</button>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')

    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })

}