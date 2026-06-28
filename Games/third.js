const tool = ["STONE 🪨", "PAPER 📃", "SCISSOR ✂️"];

let turn = "player-1";


// Randomly Question denga //
function RandomChoice(){

    return tool[Math.floor(Math.random()*tool.length)];
}

const btn1 = document.querySelector('.play1');
const btn2 = document.querySelector('.play2');
const display1 = document.querySelector('.play1-result');
const display2 = document.querySelector('.play2-result');
const resultText = document.getElementById('result');
resultText.innerText = "Player 1 turn";

const rules = {
    "STONE 🪨-STONE 🪨": "DRAW",
    "STONE 🪨-PAPER 📃": "PAPER 📃",
    "STONE 🪨-SCISSOR ✂️": "STONE 🪨",

    "PAPER 📃-STONE 🪨": "PAPER 📃",
    "PAPER 📃-PAPER 📃": "DRAW",
    "PAPER 📃-SCISSOR ✂️": "SCISSOR ✂️",

    "SCISSOR ✂️-STONE 🪨": "STONE 🪨",
    "SCISSOR ✂️-PAPER 📃": "SCISSOR ✂️",
    "SCISSOR ✂️-SCISSOR ✂️": "DRAW"
};


function checkWinner(){

    const player1 = display1.innerHTML;
    const player2 = display2.innerHTML;
    
        
        const winner = rules[`${player1}-${player2}`];
            if(winner === "DRAW"){
                return "Match is Draw 😂";
            }

            else if(winner === player1){
                return "player 1 is 👈 winner";
            }

            else {
                return "player 2 is winner 👉";
            }
}


btn1.addEventListener('click', () => {

    if(turn !== "player-1") return;
        display1.innerHTML = RandomChoice();

        turn = "player-2";
        resultText.innerText = "Player 2 turn";
});

btn2.addEventListener('click', () => {
    if(turn !== "player-2") return;
        display2.innerHTML = RandomChoice();

       resultText.innerText = checkWinner();
       turn = "Game Over";
});


const RESET = document.querySelector('.reset');
RESET.addEventListener('click', () => {
    display1.innerHTML = "";
    display2.innerHTML = ""
    resultText.innerText = "Player 1 turn";
    turn = "player-1";
});
