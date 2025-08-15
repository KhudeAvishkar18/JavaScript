// Creating Score Variables
let userScore = 0;
let compScore = 0;

// Creating choice variables
let userChoice = 'rock';
let compChoice = 'paper';

// Accessing necessary elements
let choices = document.querySelectorAll('.choice');
let uScore = document.querySelector('#userScore');
let computerScore = document.querySelector('#compScore');
let msg = document.querySelector('#msg');
let newGame = document.querySelector('.restart');

// Generating random choice of computer
const chooseComputerChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * 3); // generating value between 0, 1, & 2
    // The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1
    return options[randomIndex];
}

// Showing winner
const showWinner = (isUserWon, userChoice, compChoice) => {
    if (isUserWon) {
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `You : ${userChoice}, Computer : ${compChoice} (You Won)`;
        msg.style.backgroundColor = 'green';
    }
    else {
        compScore++;
        computerScore.innerText = compScore;
        msg.innerText = `You : ${userChoice}, Computer : ${compChoice} (Computer Won)`;
        msg.style.backgroundColor = 'red';
    }
}

// Checking Winner
const checkWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        msg.innerText = `It's a Draw (Both chooses ${userChoice})`;
        msg.style.backgroundColor = '#081b31';
    }
    else {
        let userWin = true;
        if (userChoice === 'rock')
            userWin = compChoice === 'paper' ? false : true;
        else if (userChoice === 'paper')
            userWin = compChoice === 'rock' ? true : false;
        else if (userChoice === 'scissor')
            userWin = compChoice === 'rock' ? false : true;

        showWinner(userWin, userChoice, compChoice);
    }
}

// Adding click events on each choice
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        userChoice = choice.getAttribute('id');
        compChoice = chooseComputerChoice();
        checkWinner(userChoice, compChoice);
    })
})

// Restart the game
newGame.addEventListener('click', () => {
    userScore = 0;
    uScore.innerText = userScore;
    compScore = 0;
    computerScore.innerText = compScore;
    msg.innerText = 'Choose your Move';
    msg.style.backgroundColor = '#081b31';
})