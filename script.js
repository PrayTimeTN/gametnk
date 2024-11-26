// script.js

let player1Choice = null;
let player2Choice = null;

const choices = ["rock", "paper", "scissors"];
const resultDiv = document.getElementById("result");
const player1Buttons = document.querySelectorAll("#choices1 .choice");
const player2Buttons = document.querySelectorAll("#choices2 .choice");

function determineWinner(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) return "⏳ Draw!";
    if (
        (player1Choice === "rock" && player2Choice === "scissors") ||
        (player1Choice === "scissors" && player2Choice === "paper") ||
        (player1Choice === "paper" && player2Choice === "rock")
    ) {
        return "🎉 Joueur 1 gagne!";
    }
    return "🎉 Joueur 2 gagne!";
}

function updateResult() {
    if (player1Choice && player2Choice) {
        const result = determineWinner(player1Choice, player2Choice);
        resultDiv.innerHTML = `
            <p>🧍‍♂️ Joueur 1 a choisi: <strong>${player1Choice}</strong></p>
            <p>🧍‍♂️ Joueur 2 a choisi: <strong>${player2Choice}</strong></p>
            <h2>${result}</h2>
        `;
    }
}

player1Buttons.forEach((button) => {
    button.addEventListener("click", () => {
        player1Choice = button.getAttribute("data-choice");
        updateResult();
    });
});

player2Buttons.forEach((button) => {
    button.addEventListener("click", () => {
        player2Choice = button.getAttribute("data-choice");
        updateResult();
    });
});

function resetGame() {
    player1Choice = null;
    player2Choice = null;
    resultDiv.innerHTML = "<h2>Choisissez vos gestes!</h2>";
}
