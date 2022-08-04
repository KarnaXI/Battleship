
const Ship = (name, length) => {
    const getName = () => name;

    const shipBody = Array.from({length}, (v,i) => i);

    let alphabet = "ABCDEFGHIJ";
    alphabet = [...alphabet];
    const alphaCode = {};
    for (let i=0; i < alphabet.length; i++){
        alphaCode[alphabet[i]] = i;
    }

    let shipPosition = [];
    let shipPieces = {};


    function createPieces(){
        let pieces = shipPosition.reduce((a, v) => ({ ...a, [v]: "O"}), {})
        shipPieces = pieces;
    }

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }

    const placeOnBoard = (row, column, angle) => {
        if (angle === 90){
            let startCount = alphaCode[(row)];
            for (let i=0; i < shipBody.length; i++){
                shipPosition.push(getKeyByValue(alphaCode,startCount) + column);
                startCount++;

            }
        }
        else if (angle === 180){
            let startCount = alphaCode[(row)];
            for (let i=0; i < shipBody.length; i++){
                shipPosition.push(getKeyByValue(alphaCode,startCount) + (column));
                column++;

            }
        }
        else {
            shipPosition = [];
        }
        
        return shipPosition;
    }

    function hit(position) {
        if (position in shipPieces) {
            shipPieces[position] = "X";
            return shipPieces[position];
        }
        else {
            // console.log("not hit")
        }
    }

    function isSunk(){
        let checkSunk = Object.values(shipPieces).every( value => value === "X");
        return checkSunk;
    };

    return { getName, shipPosition, placeOnBoard, hit, shipPieces, isSunk, createPieces };
}

export default Ship;
