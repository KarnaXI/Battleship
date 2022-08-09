import Gameboard from "./gameboard";
import Ship from "./ships";

const Player = (name) => {

    const getPlayerName = () => name;
    let enemyName = "none";
    const getEnemyName = () => {
        if (getPlayerName() === "player"){
            enemyName = "computer"
        }
        else {
            enemyName = "player"
        }
        return enemyName;
    }
    const playerGameBoard = Gameboard();

    const playerBoard = document.querySelector(`.${getPlayerName()}-board-container`);
    const playerAllCoordinates = playerBoard.querySelectorAll(".coordinate");

    const playerDescriptionText = document.querySelector("p.player-description-text");
    playerDescriptionText.innerHTML = `
    Place your ships, ships remaining: ${5-(playerGameBoard.shipsPlaced)}
    `

    let theAngle = 180;
    const rotateShipButton = document.querySelector(`.${getPlayerName()}-rotate-button`);
    rotateShipButton.addEventListener("click", (e) => {
        if (theAngle === 180){
            theAngle = 90
        }
        else{
            theAngle = 180;
        }
    });

    
   

    const playerPlaceShips = () => {
        playerAllCoordinates.forEach(coordinate => {
            coordinate.addEventListener('mouseover', (e) => {
                if (playerGameBoard.shipsPlaced < 5) {
                    let eventId = e.target.id;
                    playerGameBoard.validatePlacement(playerGameBoard.shipsPlaced, eventId[0], eventId.slice(1), 0);
                    let validation = playerGameBoard.validatePlacement(playerGameBoard.shipsPlaced, eventId[0], eventId.slice(1), theAngle);
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
                }
            });
            
            coordinate.addEventListener('mouseout', (e) => {
                if (playerGameBoard.shipsPlaced < 5) {
                    let eventId = e.target.id;
                    playerGameBoard.validatePlacement(playerGameBoard.shipsPlaced, eventId[0], eventId.slice(1), 0);
                    if (eventId){
                    let validation = playerGameBoard.validatePlacement(playerGameBoard.shipsPlaced, eventId[0], eventId.slice(1), theAngle);

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
                    }
                }
            });

            coordinate.addEventListener("click", (e) => {
                if (playerGameBoard.shipsPlaced < 5) {
                    let eventId = e.target.id;
                    let validation = playerGameBoard.validatePlacement(playerGameBoard.shipsPlaced, eventId[0], eventId.slice(1), theAngle);
                    if (validation[0]){
                        playerGameBoard.placeShip(playerGameBoard.shipsPlaced, eventId[0], eventId.slice(1), theAngle);
                        for (let validCoordinate of validation[1]){
                                document.getElementById(validCoordinate).classList.add("ship-placed");
                        }
                        playerGameBoard.shipsPlaced += 1;

                        if (playerGameBoard.shipsPlaced < 5) {
                                
                            playerDescriptionText.innerHTML = `
                            Place your ships, ships remaining: ${5-(playerGameBoard.shipsPlaced)}
                            `
                        }
                        else {
                            playerDescriptionText.innerHTML = `
                            Time to attack!!!`
                            rotateShipButton.style.display = "none";


                            return true;

                        }
                    }
                }
            });
        });
    };

    let positionsAttacked = [];
    
    let positionsAvailable = [];
    let alphabet = "ABCDEFGHIJ";
    alphabet = [...alphabet];
    for (let i=0; i < alphabet.length; i++){
        for (let n=1; n < 11; n++){
            positionsAvailable.push(alphabet[i]+n);
        }
    }

    const computerPlaceShips = () => {
        const angles = [90, 180];

        for (let i = 0; playerGameBoard.shipsPlaced < 5; i++){

            const randomCoordinate = positionsAvailable[Math.floor(Math.random() * positionsAvailable.length)];
            const randomAngle = angles[Math.floor(Math.random() * angles.length)];
            let validation = playerGameBoard.validatePlacement(playerGameBoard.shipsPlaced, randomCoordinate[0], randomCoordinate.slice(1), randomAngle);

            if (validation[0]){
                console.log("Validation: ",validation)
                playerGameBoard.placeShip(playerGameBoard.shipsPlaced, randomCoordinate[0], randomCoordinate.slice(1), randomAngle);
                playerGameBoard.shipsPlaced += 1;
                // console.log(playerGameBoard.theShips[i])
                validation[1].forEach(coordinate => {
                    const shipCoords = playerBoard.querySelector(`button#${coordinate}`);
                    shipCoords.style.background = "yellow";
                })
            }
        
        }
        
    }

    const computerAttack = () => {
        const random = Math.floor(Math.random() * positionsAvailable.length);
        const attackCoordinate = positionsAvailable[random];
        positionsAvailable = positionsAvailable.filter(coordinate => coordinate !== attackCoordinate);
        positionsAttacked.push(attackCoordinate);
        return attackCoordinate;
    }

    const playerAttack = (coordinate) => {
        if (!positionsAttacked.includes(coordinate)){
            positionsAttacked.push(coordinate);
            return coordinate;
        }
        
    }

    return {getPlayerName, playerGameBoard, computerAttack, playerAttack, positionsAvailable,
        positionsAttacked, playerPlaceShips, computerPlaceShips, getEnemyName}
}


export default Player;