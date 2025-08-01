// Creating Score Variables
let userScore = 0;
let compScore = 0;

// Creating choice variables
let userChoice = 'Rock';
let compChoice = 'Paper';

// Generating random choice of computer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    // The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1
}
const chooseComputerChoice = (compChoice) => {
    let randomNum = getRandomInt(3);
    if (randomNum === 1)
        compChoice = 'Rock';
    else if (randomNum === 2)
        compChoice = 'Paper';
    else
        compChoice = 'Scissor';

    return compChoice;
}

// Accessing necessary elements
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');
let uScore = document.querySelector('#userScore');
let computerScore = document.querySelector('#compScore');
let msg = document.querySelector('#msg');
let newGame = document.querySelector('.restart');

// Checking Winner
const checkWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice)
        msg.innerText = `It's a Draw (Both chooses ${userChoice})`;
    else if (userChoice === 'Rock' && compChoice === 'Paper') {
        compScore++;
        computerScore.innerText = compScore;
        msg.innerText = `User : ${userChoice}, Computer : ${compChoice} (Computer Won)`;
    }
    else if (userChoice === 'Paper' && compChoice === 'Rock') {
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `User : ${userChoice}, Computer : ${compChoice} (User Won)`;
    }
    else if (userChoice === 'Rock' && compChoice === 'Scissor') {
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `User : ${userChoice}, Computer : ${compChoice} (User Won)`;
    }
    else if (userChoice === 'Scissor' && compChoice === 'Rock') {
        compScore++;
        computerScore.innerText = compScore;
        msg.innerText = `User : ${userChoice}, Computer : ${compChoice} (Computer Won)`;
    }
    else if (userChoice === 'Paper' && compChoice === 'Scissor') {
        compScore++;
        computerScore.innerText = compScore;
        msg.innerText = `User : ${userChoice}, Computer : ${compChoice} (Computer Won)`;
    }
    else if (userChoice === 'Scissor' && compChoice === 'Paper') {
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `User : ${userChoice}, Computer : ${compChoice} (User Won)`;
    }
}

// Adding click events on each choice
rock.addEventListener('click', (evt) => {
    userChoice = 'Rock';
    compChoice = chooseComputerChoice(compChoice);
    checkWinner(userChoice, compChoice);
})

paper.addEventListener('click', (evt) => {
    userChoice = 'Paper';
    compChoice = chooseComputerChoice(compChoice);
    checkWinner(userChoice, compChoice);
})

scissor.addEventListener('click', (evt) => {
    userChoice = 'Scissor';
    compChoice = chooseComputerChoice(compChoice);
    checkWinner(userChoice, compChoice);
})

// Restart the game
newGame.addEventListener('click', () => {
    userScore = 0;
    uScore.innerText = userScore;
    compScore = 0;
    computerScore.innerText = compScore;
    msg.innerText = 'Play your Move';
})