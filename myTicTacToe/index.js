// Fix problems - 
// 1) Any button can be clicked multiple times (use removeEventListener())
// 2) After match is finished, still we are not able to restart it.

// Turn variable
let turn = "X"; // It will be either 'X' or 'O'

// no. of clicks variable
let count = 0;

// 3 arrays for game box
let row1 = ["1", "2", "3"];
let row2 = ["4", "5", "6"];
let row3 = ["7", "8", "9"];

// To check win condition
function isWin(turn) {
    if (
        (row1[0] === row1[1] && row1[1] === row1[2]) ||
        (row2[0] === row2[1] && row2[1] === row2[2]) ||
        (row3[0] === row3[1] && row3[1] === row3[2]) ||
        (row1[0] === row2[0] && row2[0] === row3[0]) ||
        (row1[1] === row2[1] && row2[1] === row3[1]) ||
        (row1[2] === row2[2] && row2[2] === row3[2]) ||
        (row1[0] === row2[1] && row2[1] === row3[2]) ||
        (row3[0] === row2[1] && row2[1] === row1[2])
    ) {
        alert(`${turn} won the game, Please refresh the page to restart the game`);
    }
    else if (count >= 9) {
        alert("Match draw!!!, Please refresh the page to restart the game.");
    }
}

// To handle click event
function callEvent(turn, button, arr, index) {
    if (turn === "X") {
        button.innerText = "O";
        turn = "O";
    } else {
        button.innerText = "X";
        turn = "X";
    }
    arr[index] = turn;
    count++;
    isWin(turn);
}


// Selecting buttons to add click events
let a = document.querySelector("#firstRow");

let aZero = a.children[0];
let aOne = a.children[1];
let aTwo = a.children[2];

let eventFun = (evt) => {
    callEvent(turn, aZero, row1, 0);
    turn === 'X' ? turn = 'O' : turn = 'X';
}
aZero.addEventListener("click", eventFun);

aOne.addEventListener("click", (evt) => {
    callEvent(turn, aOne, row1, 1);
    turn === 'X' ? turn = 'O' : turn = 'X';
});

aTwo.addEventListener("click", (evt) => {
    callEvent(turn, aTwo, row1, 2);
    turn === 'X' ? turn = 'O' : turn = 'X';
});

let b = document.querySelector("#secondRow");

let bZero = b.children[0];
let bOne = b.children[1];
let bTwo = b.children[2];

bZero.addEventListener("click", (evt) => {
    callEvent(turn, bZero, row2, 0);
    turn === 'X' ? turn = 'O' : turn = 'X';
});

bOne.addEventListener("click", (evt) => {
    callEvent(turn, bOne, row2, 1);
    turn === 'X' ? turn = 'O' : turn = 'X';
});

bTwo.addEventListener("click", (evt) => {
    callEvent(turn, bTwo, row2, 2);
    turn === 'X' ? turn = 'O' : turn = 'X';
});

let c = document.querySelector("#thirdRow");

let cZero = c.children[0];
let cOne = c.children[1];
let cTwo = c.children[2];

cZero.addEventListener("click", (evt) => {
    callEvent(turn, cZero, row3, 0);
    turn === 'X' ? turn = 'O' : turn = 'X';
});

cOne.addEventListener("click", (evt) => {
    callEvent(turn, cOne, row3, 1);
    turn === 'X' ? turn = 'O' : turn = 'X';
});

cTwo.addEventListener("click", (evt) => {
    callEvent(turn, cTwo, row3, 2);
    turn === 'X' ? turn = 'O' : turn = 'X';
});

