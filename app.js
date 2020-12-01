
const p1Button = document.getElementById("p1Button");
const p2Button = document.getElementById("p2Button");
const resetButton = document.getElementById("resetButton");

const p1Score = document.getElementById("p1Score");
const p2Score = document.getElementById("p2Score");

const playerWon = document.getElementById("playerWon");

const playToSelect = document.getElementById("playTo");

let player1 = 0, player2 = 0;

let winningScore = parseInt(playToSelect.value);

let isGameOver = false;

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        player1++;
        p1Score.innerText = player1;
        if (player1 === winningScore) {
            isGameOver = !isGameOver;
            playerWon.innerText = " Player 1 WON!!";
            p1Score.classList.add("winner");
            p2Score.classList.add("loser");
        }
    }
});

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        player2++;
        p2Score.innerText = player2;
        if (player2 === winningScore) {
            isGameOver = !isGameOver;
            playerWon.innerText = " Player 2 WON!!";
            p2Score.classList.add("winner");
            p1Score.classList.add("loser");
        }
    }
});

resetButton.addEventListener('click', () => {
    resetGame();
})

playToSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
});

resetGame = () => {
    player1 = 0;
    p1Score.innerText = '0';
    p2Score.innerText = '0';
    player2 = 0;
    playerWon.innerText = "";
    isGameOver = false;
    p1Score.classList.remove("winner", "loser");
    p2Score.classList.remove("loser", "winner");
}