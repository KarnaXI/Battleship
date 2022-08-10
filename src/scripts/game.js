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
    const computerPlaceShips = computer.computerPlaceShips();
    const attack = computer.computerAttack();
    return {computer, computerPlaceShips, enemy, theComputerGameboard, attack};
}

const playerActions = () => {
    const player = Player("player");
    const thePlayerGameBoard = player.playerGameBoard;
    const enemy = player.getEnemyName();
    const playerPlaceTheShips = player.playerPlaceShips();
    const attack = player.playerAttack();
    return {player, playerPlaceTheShips, enemy, thePlayerGameBoard, attack};
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
    player.playerPlaceTheShips;
    computer.computerPlaceShips;
    computerPositions.forEach(coordinate => {
        coordinate.addEventListener('click', (e) => {
            // if(player.playerGameBoard.shipsPlaced === 5 && turn === 0){
            let coordinateAttacked = e.target.id;
            console.log("Coordinate attacked: ",coordinateAttacked);

            if(turn === 0){
                let attackResults = computer.theComputerGameboard.receiveAttack(coordinateAttacked);

   
                if (attackResults){
                    console.log("at")
                    e.target.style.background = "red";
                    console.log("attack results: ",attackResults);

                    // if ((computer.theComputerGameboard.sunkShips).length > sunkShips){
                    //     // console.log("sdsd: ", computer.computerGameboard.sunkShips);
                    //     sunkShips += 1;
                    //     // console.log(computer.theComputerGameboard.sunkShips);
                     
                    // }
                    if (attackResults.shipPosition){
                        for (let positions of attackResults.shipPosition ){
                            // computerBoardCoordinates.querySelector(`button#${positions}`).style.background = "purple";
                            // computerBoardCoordinates.querySelector(`button#${positions}`).style.background = "none";
                            console.log(skullIcon.src)
                            computerBoardCoordinates.querySelector(`button#${positions}`).style.backgroundImage = `url('${skullIcon.src}')`;
                        }
                    }
                    
                    
                }
                else{
                    e.target.style.background = "grey";
                }
            }

        }) 
    });
    

    
}


export default playTheGame;
