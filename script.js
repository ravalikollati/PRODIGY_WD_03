let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function play(cell, index) {
    if (board[index] !== "") return;

    board[index] = currentPlayer;
    cell.innerText = currentPlayer;

    if (checkWinner()) {
        document.getElementById("status").innerText =
            "Player " + currentPlayer + " Wins!";
        return;
    }

    if (!board.includes("")) {
        document.getElementById("status").innerText = "It's a Draw!";
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("status").innerText =
        "Player " + currentPlayer + " Turn";
}

function checkWinner() {
    for (let combo of winningCombinations) {
        let [a, b, c] = combo;

        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";

    document.querySelectorAll(".cell").forEach(cell => {
        cell.innerText = "";
    });

    document.getElementById("status").innerText =
        "Player X Turn";
}