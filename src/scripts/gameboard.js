import Ship from "./ships";

const invalidCoordinates = ["A11", "B11", "C11", "D11", "E11", "F11", "G11", "H11", "I11", "J11",
"undefined1","undefined2", "undefined3", "undefined4", "undefined5","undefined6", "undefined7", "undefined8", "undefined9", "undefined10"];
let usedSpots = [];

// function validatePlacement(coordinateList){
//     let coordinatesToCheck = coordinateList;
//     for (const coordinate of coordinatesToCheck) {
//         if (usedSpots.includes(coordinate) || invalidCoordinates.includes(coordinate)){
//             const canPlace = false;
//             return [canPlace, coordinatesToCheck];
//         }
//         else {
//             const canPlace = true;
//             return [canPlace, coordinatesToCheck]
//         }
//     }
// }

const Gameboard = () => {

    let missedAttacks = [];
    let sunkShips = [];
    let allAttacks = [];
    let shipsPlaced = 4;

    const theShips = [
        Ship('Aircraft Carrier', 5),
        Ship('Battleship', 4),
        Ship('Cruiser', 3),
        Ship('Submarine', 3),
        Ship('Destroyer', 2)
    ]

    // const placeShip = (index, row, column, angle) =>{
    //     const shipToPlace = theShips[index];
    //     let getCoordinates = shipToPlace.placeOnBoard(row, column, angle);
    //     let shipPlaceable = validatePlacement(getCoordinates)[0] === true;
    //     console.log(shipPlaceable);
    //     if (shipPlaceable){
    //         for (const coordinate of getCoordinates) {
    //             usedSpots.push(coordinate);
    //         }
    //         shipToPlace.createPieces();
    //     }
    //     else{
    //         console.log("cant place ship: ", shipToPlace.getName());
    //     }
    // }   

    const validatePlacement = ( index, row, column, angle) => {
        const shipToPlace = theShips[index];
        let badCoordinates = [];
        let canPlace = true;
        let getCoordinates = shipToPlace.placeOnBoard(row, column, angle);
        const originalCoordinates = getCoordinates;
        for (const coordinate of getCoordinates) {
            if (usedSpots.includes(coordinate) || invalidCoordinates.includes(coordinate)){
                canPlace = false;
                getCoordinates = shipToPlace.placeOnBoard(row, column, 0);
            }

            else {
                shipToPlace.placeOnBoard(row, column, 0);
            }

        }
        if (!canPlace){
            badCoordinates = originalCoordinates;
        }

        
        return [canPlace, getCoordinates, badCoordinates];
    }

    const placeShip = (index, row, column, angle) =>{
        const shipToPlace = theShips[index];
        let getCoordinates = shipToPlace.placeOnBoard(row, column, angle);
        for (const coordinate of getCoordinates) {
                usedSpots.push(coordinate);
            }
            shipToPlace.createPieces();
    }   
    
    const receiveAttack = (position) => {
        let attackMiss = 0;

        for (let i = 0; i < theShips.length; i++) {
            if (theShips[i].hit(position)){
                if(theShips[i].isSunk()){
                    sunkShips.push(theShips[i]);
                }
                return true;
            }
            else {
                attackMiss = 1;
            }
        }
        if (attackMiss === 1){
            missedAttacks.push(position);

        }

        if (!allAttacks.includes(position)){
            allAttacks.push(position);
        }

    };

    return {receiveAttack, theShips, placeShip, missedAttacks, sunkShips, shipsPlaced, validatePlacement};
}




export default Gameboard;