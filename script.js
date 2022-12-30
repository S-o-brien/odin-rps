
let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');
let resultBox = document.getElementById('resultBox');
let resetBtn = document.getElementById('resetBtn')

//Counter for score
let playerScore = 0;
let computerScore = 0;

//Play game 
function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        result = "It's a draw!"
        resultBox.textContent = result
    } else if (computerChoice === "rock" && playerChoice === "scissors") {
        result = "You loose this round!"
        resultBox.textContent = result
        computerScore++
        updateScore();
    } else if (computerChoice === "scissors" && playerChoice ==="paper") {
        result =  "You loose this round!"
        resultBox.textContent = result
        computerScore++
        updateScore();
    }else if (computerChoice === "paper" && playerChoice === "rock") {
        result = "You lose this round!"
        resultBox.textContent = result
        computerScore++
        updateScore();
    } else {
        result = "You win this round"
        resultBox.textContent = result
        playerScore++
        updateScore();
    }
};

//Get computer choice
function randomChoice () {
    const rpsArray = ["rock", "paper", "scissors"];
    computerChoice = rpsArray[Math.floor(Math.random()*rpsArray.length)]
};

//Show score
function updateScore() {
    const playerScoreCount = document.getElementById("playerScore");
    const computerScoreCount = document.getElementById("computerScore");

    playerScoreCount.textContent = `Player: ${playerScore}`;
    computerScoreCount.textContent = `Computer: ${computerScore}`;
    if (playerScore === 5) {
        alert("You win the game!")
        resetScore()
    } else if (computerScore === 5) {
        alert("The computer wins the game!")
        resetScore()
    }
}

//Reset scores
function resetScore() {
    playerScore=0
    computerScore=0
    updateScore()
    resultBox.textContent = ""
}

//Events
rockBtn.addEventListener('click', (e) => {
    randomChoice();
    playRound(computerChoice,"rock");
});
paperBtn.addEventListener('click', (e) => {
    randomChoice();
    playRound(computerChoice,"paper");
});
scissorsBtn.addEventListener('click', (e) => {
    randomChoice();
    playRound(computerChoice,"scissors");
});
resetBtn.addEventListener('click',(e) => {
    resetScore()
})



//console.log(playRound(computerChoice,playerChoice))