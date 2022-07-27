const Player = (name) => {

    const getPlayerName = () => name;

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

    return {getPlayerName, computerAttack, playerAttack, positionsAvailable, positionsAttacked}
}


export default Player;