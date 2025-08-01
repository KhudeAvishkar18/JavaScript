// Accessing necessary elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector('#newGame');
let msgContainer = document.querySelector('.msgContainer');
let msg = document.querySelector('#msg');


// turn variable
let turnO = true;

// To track the draw condition
let counter = 0;

// 2d array containing winning patterns
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// To access values from 2d array
// arr[arrayNumber][index]

// Adding event listener on each box
boxes.forEach((box) => {
    box.addEventListener('click', (evt) => {
        box.innerText = (turnO === true ? 'O' : 'X');
        box.style.color = (turnO === true ? 'blue' : 'red');
        turnO = !turnO;
        box.disabled = true; // selectObject.disabled = true|false
        counter++;
        checkWinner();
    })
})


const checkWinner = () => {
    for (let arr of winPatterns) {
        let pos1 = boxes[arr[0]].innerText;
        let pos2 = boxes[arr[1]].innerText;
        let pos3 = boxes[arr[2]].innerText;
        // Checking winning condition
        if (pos1 != '' && pos2 != '' && pos3 != '' && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
        }
        else if (counter >= 9) { // Draw condition
            showWinner(null);
        }
    }
}

const showWinner = (winner) => {
    if(winner != null)
        msg.innerText = `Congrats, ${winner} is Winner`;
    else
        msg.innerText = "Ohh! It's a Draw.";

    // Showing win / draw screen
    msgContainer.classList.remove('hide');
    counter = 0;

    for (let box of boxes) {
        box.disabled = true;
    }
}

const resetGame = () => {
    msgContainer.classList.add('hide');
    turnO = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}

newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);