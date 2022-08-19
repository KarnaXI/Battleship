import Ship from "../scripts/ships";
import Gameboard from "../scripts/gameboard";
import Player from "../scripts/player";
import Skull from './skull.jpg';

const skullIcon = new Image();
skullIcon.src = Skull;

function startGame(){
    const difficultyButtons = document.querySelectorAll(".difficulty-button");
    difficultyButtons.forEach(button => {
        button.addEventListener("click", () => {
            playTheGame(button.id);
            document.querySelector(".game-container").style.display = "block";
            document.querySelector(".difficulty-container").style.display = "none";
            document.querySelector(".restart-game-container").style.display = "block";

            return;
        })
        
    });
    

    
}
 


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



const playTheGame = (difficulty) => {
    const gameDifficulty = difficulty;
    
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

    const computerResultsBox = document.querySelector(".computer-description-text");
    const playerResultsBox = document.querySelector(".player-description-text");
    
    function playerAttack(){
        computerPositions.forEach(coordinate => {
            coordinate.addEventListener('click', (e) => {
                if (turn === 0 && !gameEnded && player.attack(coordinate)){
                    checkGameEnded();
                    let coordinateAttacked = e.target.id;
                    let attackResults = computer.theComputerGameboard.receiveAttack(coordinateAttacked);
                    if (attackResults){
                        e.target.style.background = "red";
                        playerResultsBox.innerText = `Attack hit ${coordinateAttacked}`;
                        playerResultsBox.style.background = "Green";
                        turn = 1;
                        // checkGameEnded();

                        if (attackResults.shipPosition){
                            for (let positions of attackResults.shipPosition ){
                                computerBoardCoordinates.querySelector(`button#${positions}`).style.backgroundImage = `url('${skullIcon.src}')`;
                            }
                            playerResultsBox.innerText = `You sunk enemy ${attackResults.getName()}`;
                            playerResultsBox.style.background = "Green";
                        }
                    }
                    else {
                        e.target.style.background = "cornflowerblue";
                        playerResultsBox.innerText = `Attack miss`;
                        playerResultsBox.style.background = "cornflowerblue";
                        turn = 1;
                        // checkGameEnded();
                    }
                    checkGameEnded();
                    computerRunAttack();
                    
                }
                
            }) 
        });
    }

    function computerRandomAttack(){
        checkGameEnded();
        if(!gameEnded) {
            let sunkenShipName = '';
            const attackPosition = computer.attack();
            const attackResults = player.thePlayerGameBoard.receiveAttack(attackPosition);
            if (attackResults && !gameEnded){
                playerBoardCoordinates.querySelector(`button#${attackPosition}`).style.background = "red";                

                if (attackResults.shipPosition){
                    for (let positions of attackResults.shipPosition ){
                        playerBoardCoordinates.querySelector(`button#${positions}`).style.backgroundImage = `url('${skullIcon.src}')`;
                        sunkenShipName = attackResults.getName();
                    }
                }
                turn = 0;
                checkGameEnded();
                return [true, attackPosition, sunkenShipName];

            }
            
            else {
                playerBoardCoordinates.querySelector(`button#${attackPosition}`).style.background = "cornflowerblue";
                computerResultsBox.innerText = `Computer missed`;
                computerResultsBox.style.background = "cornflowerblue";
                turn = 0;
                checkGameEnded();
                return false;
            }
        }
    }

    function computerRunAttack(){
        
            
        let successfulAttacks = [];
        let anySunkenShip = [];
        for (let i=0; i < gameDifficulty; i++){
            checkGameEnded()
            if (!gameEnded){

                let computerStatus = computerRandomAttack();
                const successAttack = computerStatus[0];
                if (successAttack){
                    successfulAttacks.push(computerStatus[1]);
                    if (computerStatus[2].length > 0){
                        anySunkenShip.push(computerStatus[2])
                    }
                }
            }
        }
        if (successfulAttacks.length > 0){
            computerResultsBox.innerText = `Computer hit on ${successfulAttacks.join(', ')}`;
            computerResultsBox.style.background = "Green";
        }
        if (anySunkenShip.length > 0){
            computerResultsBox.innerText = `Computer sunk player's ${anySunkenShip.join(' + ')}`;
            computerResultsBox.style.background = "Green";
            checkGameEnded();

        }
        
    }

    function checkGameEnded(){
        if(player.thePlayerGameBoard.sunkShips.length === 5){
            computerResultsBox.style.fontWeight = 700;
            playerResultsBox.style.fontWeight = 700;
            playerResultsBox.innerText = "Game Ended Player Lost";
            playerResultsBox.style.background = "#d33d02";
            computerResultsBox.innerText = "Computer Wins!!!";
            computerResultsBox.style.background = "gold";
            computerResultsBox.style.color = "black";
            gameEnded = true;
        }
        else if(computer.theComputerGameboard.sunkShips.length === 5){
            computerResultsBox.style.fontWeight = 700;
            playerResultsBox.style.fontWeight = 700;
            computerResultsBox.innerText = "Game Ended Player Won";
            computerResultsBox.style.background = "red";
            playerResultsBox.innerText = "You Win!!!";
            playerResultsBox.style.background = "gold";
            playerResultsBox.style.color = "black";
            gameEnded = true;
        }
    }
        
}
    



export function gameEngine(){
    return {playTheGame, startGame};
}
