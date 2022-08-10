import Ship from "./ships";

let validCoordinates = [];
let alphabet = "ABCDEFGHIJ";
alphabet = [...alphabet];
for (let i=0; i < alphabet.length; i++){
    for (let n=1; n < 11; n++){
        validCoordinates.push(alphabet[i]+n);
    }
}

const Gameboard = () => {
    let usedSpots = [];

    let missedAttacks = [];
    let sunkShips = [];
    let allAttacks = [];
    let shipsPlaced = 0;

    const theShips = [
        Ship('Aircraft Carrier', 5),
        Ship('Battleship', 4),
        Ship('Cruiser', 3),
        Ship('Submarine', 3),
        Ship('Destroyer', 2)
    ] 

    const validatePlacement = ( index, row, column, angle) => {
        const shipToPlace = theShips[index];
        let badCoordinates = [];
        let canPlace = true;
        let getCoordinates = shipToPlace.placeOnBoard(row, column, angle);
        for (const coordinate of getCoordinates) {
            if (usedSpots.includes(coordinate) || !validCoordinates.includes(coordinate)){
                canPlace = false;
                getCoordinates = shipToPlace.placeOnBoard(row, column, 0);
                shipToPlace.placeOnBoard(row, column, 0);
            }

            else {
                badCoordinates.push(coordinate);
                shipToPlace.placeOnBoard(row, column, 0);
            }
                
        }

        return [canPlace, getCoordinates, badCoordinates];
    }

    const placeShip = (index, row, column, angle) => {
        const shipToPlace = theShips[index];
        let getRealCoordinates = shipToPlace.placeOnBoard(row, column, angle);
        console.log("get real coordinates:", getRealCoordinates)
        shipToPlace.shipPosition = getRealCoordinates;
        for (const coordinate of getRealCoordinates) {
            // console.log(coordinate)
            usedSpots.push(coordinate);
        }
        shipToPlace.createPieces();
        console.log("placing:" , shipToPlace)
    }   
    


    const receiveAttack = (position) => {

        let attackMiss = 0;

        for (let i = 0; i < theShips.length; i++) {
            // if (theShips[i].hit(position)){
            //     if(theShips[i].isSunk()){
            //         sunkShips.push(theShips[i]);
            //         // console.log("sds",theShips[i])
            //     }
            //     return true, theShips[i];
            // }
            if (theShips[i].hit(position) && theShips[i].isSunk()){
                sunkShips.push(theShips[i]);
                    // console.log("sds",theShips[i])
                
                return true, theShips[i];
            }
            else if(theShips[i].hit(position)){
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