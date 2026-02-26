const choices = ["rock", "paper", "scissor"];
const emojiMap = {
    rock: "👊",
    paper: "✋",
    scissor: "✌️",
};

const computerEmo =
    document.getElementById("computer_emo") ||
    document.getElementById("player-output");
const computerOutput = document.getElementById("computer-output");
const result = document.getElementById("result");

function select(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    computerEmo.textContent = emojiMap[computerChoice];
    computerOutput.textContent = emojiMap[playerChoice];

    if (playerChoice === computerChoice) {
        result.textContent = "It's a Tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        result.textContent = "You Win!";
    } else {
        result.textContent = "You Lose!";
    }
}
