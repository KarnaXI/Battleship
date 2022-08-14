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
    const attack = player.playerAttack();
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
                if (turn === 0 ){
                    let coordinateAttacked = e.target.id;
                    let attackResults = computer.theComputerGameboard.receiveAttack(coordinateAttacked);
                    if (attackResults){
                        e.target.style.background = "red";
                        turn = 1;
                        console.log(computerRandomAttack());

                        if (attackResults.shipPosition){
                            for (let positions of attackResults.shipPosition ){
                                computerBoardCoordinates.querySelector(`button#${positions}`).style.backgroundImage = `url('${skullIcon.src}')`;
                            }
                        }
                    }
                    else {
                        e.target.style.background = "grey";
                        turn = 1;
                        console.log(computerRandomAttack());
                    }
                }
            }) 
        });
    }

    function computerRandomAttack(){
        const attackPosition = computer.attack();
        const attackResults = player.thePlayerGameBoard.receiveAttack(attackPosition);
        if (attackResults){
            playerBoardCoordinates.querySelector(`button#${attackPosition}`).style.background = "red";

            if (attackResults.shipPosition){
                for (let positions of attackResults.shipPosition ){
                    playerBoardCoordinates.querySelector(`button#${positions}`).style.backgroundImage = `url('${skullIcon.src}')`;
                }
            }
            turn = 0;
            return true;
            }
            else {
                playerBoardCoordinates.querySelector(`button#${attackPosition}`).style.background = "grey";
                turn = 0;
                return true;
            }
        }
        
    }
    



export default playTheGame;
