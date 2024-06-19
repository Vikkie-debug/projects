// Game variables
let board;
let currentPlayer;
let gameActive;

// Initialization function
function initGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.getElementById('status').innerText = "Player " + currentPlayer + "'s turn";
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = "");
}

// Function to handle player moves
function placeMarker(index) {
    if (gameActive && board[index] === "") {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        if (checkWin()) {
            gameActive = false;
            document.getElementById('status').innerText = "Player " + currentPlayer + " wins!";
        } else if (!board.includes("")) {
            gameActive = false;
            document.getElementById('status').innerText = "It's a tie!";
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            document.getElementById('status').innerText = "Player " + currentPlayer + "'s turn";
        }
    }
}

// Function to check for win conditions
function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    return winConditions.some(condition => {
        return condition.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

// Function to reset the game
function resetGame() {
    initGame();
}

// Initialize the game on page load
document.addEventListener('DOMContentLoaded', () => {
    initGame();
});