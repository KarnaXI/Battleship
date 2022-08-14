import Ship from "../scripts/ships";
import Gameboard from "../scripts/gameboard";
import Player from "../scripts/player";
import Skull from './skull.jpg';

const skullIcon = new Image();
skullIcon.src = Skull;


const computerActions = () => {
    const computer = Player("computer");
    const theComputerGameboard = computer.playerGameBoard;
    const enemy = computer.getEnemyName();
    const computerPlaceShips = computer.computerPlaceShips;
    const attack = computer.computerAttack;
    return {computer, computerPlaceShips, enemy, theComputerGameboard, attack};
}

const playerActions = () => {
    const player = Player("player");
    const thePlayerGameBoard = player.playerGameBoard;
    const enemy = player.getEnemyName();
    const playerPlaceTheShips = player.playerPlaceShips;
    const attack = player.playerAttackCheck;
    return {player, enemy, playerPlaceTheShips, thePlayerGameBoard, attack};
}

let gameEnded = false;



const playTheGame = () => {
    let turn = 0;
    let sunkShips = 0;
    const computerBoardCoordinates = document.querySelector(".computer-board-container");
    const computerPositions = computerBoardCoordinates.querySelectorAll(".coordinate");
    const playerBoardCoordinates = document.querySelector(".player-board-container");
    const player = playerActions();
    const computer = computerActions();

    function waitForPlayerPlaceShips() {
        if(!player.playerPlaceTheShips()) {
            window.setTimeout(waitForPlayerPlaceShips.bind(null), 500); 
        } else {
            computer.computerPlaceShips();
            playerAttack();

        }
    }

    waitForPlayerPlaceShips();

    let gameEnded = false;

    
    function playerAttack(){
        computerPositions.forEach(coordinate => {
            coordinate.addEventListener('click', (e) => {
                if (turn === 0 && !gameEnded && player.attack(coordinate)){
                    checkGameEnded();
                    let coordinateAttacked = e.target.id;
                    let attackResults = computer.theComputerGameboard.receiveAttack(coordinateAttacked);
                    if (attackResults){
                        e.target.style.background = "red";
                        turn = 1;
                        checkGameEnded();
                        computerRandomAttack();

                        if (attackResults.shipPosition){
                            for (let positions of attackResults.shipPosition ){
                                computerBoardCoordinates.querySelector(`button#${positions}`).style.backgroundImage = `url('${skullIcon.src}')`;
                            }
                        }
                    }
                    else {
                        e.target.style.background = "grey";
                        turn = 1;
                        checkGameEnded();
                        computerRandomAttack();
                    }
                    
                }
            }) 
        });
    }

    function computerRandomAttack(){
        checkGameEnded();
        if(!gameEnded) {
            const attackPosition = computer.attack();
            const attackResults = player.thePlayerGameBoard.receiveAttack(attackPosition);
            if (attackResults && !gameEnded){
                playerBoardCoordinates.querySelector(`button#${attackPosition}`).style.background = "red";

                if (attackResults.shipPosition){
                    for (let positions of attackResults.shipPosition ){
                        playerBoardCoordinates.querySelector(`button#${positions}`).style.backgroundImage = `url('${skullIcon.src}')`;
                    }
                }
                turn = 0;
                }
                else {
                    playerBoardCoordinates.querySelector(`button#${attackPosition}`).style.background = "grey";
                    turn = 0;
                }
                checkGameEnded();
            }
        }

    function checkGameEnded(){
        if(player.thePlayerGameBoard.sunkShips.length === 5){
            gameEnded = true;
            console.log("game ended computer won")
        }
        else if(computer.theComputerGameboard.sunkShips.length === 5){
            gameEnded = true;
            console.log("game ended player won")
        }
    }
        
}
    



export default playTheGame;
