import Ship from "../scripts/ships";
import Gameboard from "../scripts/gameboard";
import Player from "../scripts/player";





const computerPlaceShips = () => {
    const computerGameBoard = Gameboard();
    const computer = Player("Computer");

}

const playerActions = () => {
    const playerGameBoard = Gameboard();
    const player = Player("Player");

    const playerBoard = document.querySelector(".player-board-container");
    const playerAllCoordinates = playerBoard.querySelectorAll(".coordinate");

    const playerPlaceShips = () => playerAllCoordinates.forEach(coordinate => {
        coordinate.addEventListener('mouseover', (e) => {
            let eventId = e.target.id;
            let validation = playerGameBoard.validatePlacement(playerGameBoard.shipsPlaced, eventId[0], eventId.slice(1), 90);

            if(validation[0]){
                for (let validCoordinate of validation[1]){
                    if(!validCoordinate.includes("undefined")){
                        document.getElementById(validCoordinate).classList.add("valid-placement-hover");
                    }
                }
            }
            else {
                for (let badCoordinate of validation[2]){
                    if (!badCoordinate.includes("undefined")){
                    document.getElementById(badCoordinate).classList.add("invalid-placement-hover");
                    }
                }
            }
        });

        coordinate.addEventListener('mouseout', (e) => {
            let eventId = e.target.id;
            if (eventId){
            let validation = playerGameBoard.validatePlacement(playerGameBoard.shipsPlaced, eventId[0], eventId.slice(1), 90);

                for (let validCoordinate of validation[1]){
                    if(!validCoordinate.includes("undefined")){
                        document.getElementById(validCoordinate).classList.remove("valid-placement-hover");
                    }
                }
                for (let badCoordinate of validation[2]){
                    if (!badCoordinate.includes("undefined")){
                        document.getElementById(badCoordinate).classList.remove("invalid-placement-hover");
                    }
                }
            }});


    });

    

    return {playerGameBoard, player, playerPlaceShips};
}


export default playerActions;