import Gameboard from "./gameboard";

const Player = (name) => {

    const getPlayerName = () => name;
    const playerGameBoard = Gameboard();

    const playerBoard = document.querySelector(`.${getPlayerName()}-board-container`);
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

    let positionsAttacked = [];
    
    let positionsAvailable = [];
    let alphabet = "ABCDEFGHIJ";
    alphabet = [...alphabet];
    for (let i=0; i < alphabet.length; i++){
        for (let n=1; n < 11; n++){
            positionsAvailable.push(alphabet[i]+n);
        }
    }

    const computerAttack = () => {
        const random = Math.floor(Math.random() * positionsAvailable.length);
        const attackCoordinate = positionsAvailable[random];
        playerOneGameBoard.receiveAttack(attackCoordinate);
        positionsAvailable = positionsAvailable.filter(coordinate => coordinate !== attackCoordinate);
        positionsAttacked.push(attackCoordinate);
        return attackCoordinate;
    }

    const playerAttack = (coordinate) => {
        if (!positionsAttacked.includes(coordinate)){
            computerGameboard.receiveAttack(coordinate);
            positionsAttacked.push(coordinate);
            return coordinate;
        }
        
    }

    return {getPlayerName, computerAttack, playerAttack, positionsAvailable, positionsAttacked, playerPlaceShips}
}


export default Player;