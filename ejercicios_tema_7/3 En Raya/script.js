document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const cells = document.querySelectorAll(".cell");
    const messageDisplay = document.getElementById("message");
    const restartButton = document.getElementById("restart");

    let boardState = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let gameActive = true;

    // Combinaciones ganadoras
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6]             // Diagonales
    ];

    function checkWinner() {
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                gameActive = false;
                messageDisplay.textContent = `¡${boardState[a]} ha ganado! 🎉`;
                return;
            }
        }

        if (!boardState.includes("")) {
            gameActive = false;
            messageDisplay.textContent = "¡Es un empate!";
        }
    }

    function handleCellClick(event) {
        if (!gameActive) return;

        const cell = event.target;
        const index = cell.dataset.index;

        if (boardState[index] !== "") return;

        boardState[index] = currentPlayer;
        cell.textContent = currentPlayer;

        checkWinner();

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    function resetGame() {
        boardState = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        gameActive = true;
        messageDisplay.textContent = "";

        cells.forEach(cell => {
            cell.textContent = "";
        });
    }

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    restartButton.addEventListener("click", resetGame);
});
