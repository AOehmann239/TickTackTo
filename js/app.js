let currentTurn = "x";
let board = ["","","","","","","","","",];

winCombos = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],             // tie is anything other than these ooooooorrrrrr when all the boxes are clicked 
    [1, 4, 7],             // and there is no winner
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];

//define winner function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

//some game states that will be true false that would end the game
//let gameOver = false

    let checkWinner = () => {
        let winner = false;
        winCombos.forEach((combo) => {
            const a = board[combo[0]];
            const b = board[combo[1]];
            const c = board[combo[2]];
            if (a === "" || b === "" || c === ""){
            return;
        }
            if (a === b && b === c){
                winner = true;
                return;
            }
            

        })
        return winner

    }

//reset button    
    let resetBoard = () => {
        window.location.reload();
    }



let handleClick = (event) => {
    let targetClass;
 

    //makes position on board of the one square clicked
    board[event.target.id]= currentTurn;
    event.target.innerHTML = currentTurn;
    let roundPotentialWinner = currentTurn;
    
    //valid click
    if(currentTurn === "x"){ 
        currentTurn = "o";
    } 
    else {
       
        currentTurn = "x";
    }

    console.log(board);

    //check for winning conditions
    let isGameWon = checkWinner();
        if (isGameWon){
        document.querySelector("#winMessage").innerHTML = "The winner is " + roundPotentialWinner;
        document.querySelectorAll(".square").forEach(
            (square) => {
                square.removeEventListener('click', handleClick)
            })}
    // tie condition    
        if (!board.includes("") && !checkWinner()) {
        document.querySelector("#tieMessage").innerHTML = "The game is a tie!  Hit reset and try again"
        }    
        
    }


       
        
        
    document.querySelectorAll(".square").forEach(
        (square) => {
            square.addEventListener('click', handleClick)
        }
    ); 
    document.querySelector("#reset").addEventListener("click", resetBoard);