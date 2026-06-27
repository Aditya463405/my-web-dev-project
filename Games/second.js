let turn = 'O';
let total_turn = 0;
const status = document.querySelector('.status');
const board = document.querySelector('.board');

let winner = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

const board_array = new Array(9).fill("E");

function checkWinner(){
    
    for(let [index0, index1, index2] of winner){
        
        if(board_array[index0]!='E' && board_array[index0]===board_array[index1] && board_array[index1]===board_array[index2]){
            return 1;
        }
    }
    return 0;
}

// Printing O and X

const printer = (event) => {

    const element = event.target;
    if(board_array[element.id]==="E"){

        total_turn++;
    if(turn === 'O'){

    status.innerHTML = "Player X's Turn";    
    element.innerHTML = 'O';
    board_array[element.id] = 'O';

    if(checkWinner()){
        document.getElementById('winning-message').innerHTML = "Winner is O";
        board.removeEventListener('click', printer);
        return;
    }

    turn = 'X';
    }

    else{
        status.innerHTML = "Player O's Turn";
        element.innerHTML = 'X';
        board_array[element.id] = 'X';
        
        if(checkWinner()){
            document.getElementById('winning-message').innerHTML = "Winner is X";
            board.removeEventListener('click', printer);
        }
        turn = 'O';
    }

    if(total_turn == 9){
        document.getElementById('winning-message').innerHTML = "Match is Draw";
        board.removeEventListener('click', printer);
        return;
    }
}

}

board.addEventListener('click', printer);

const restart = document.querySelector('.reset-btn');
restart.addEventListener('click', () => {
    const cell = document.querySelectorAll('.cell');
    
    Array.from(cell).forEach((value) => {
        value.innerHTML = "";
    });

    turn = "O";
    total_turn = 0;
    board_array.fill("E");
    document.getElementById('winning-message').innerHTML = "";
    board.addEventListener('click', printer);
    status.innerHTML = "Player O's Turn"; 
});
