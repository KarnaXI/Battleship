import Ship from "../scripts/ships";
import Gameboard from "../scripts/gameboard";
import Player from "../scripts/player";

const computerGameboard = Gameboard();
const playerGameboard = Gameboard();
const computer = Player("Computer");
const player = Player("Player");

computerGameboard.placeShip(0, "A", 1, 90);
computerGameboard.placeShip(1, "A", 2, 90);
computerGameboard.placeShip(2, "A", 3, 180);
computerGameboard.placeShip(3, "C", 4, 90);
computerGameboard.placeShip(4, "D", 5, 90);
// console.log(computerGameboard.theShips[0]);


describe("ship interaction with gameboard", () => {

    test('Attacking position A1 should be a hit on the Aircraft Carrier so should be true', () => {
        expect(computerGameboard.receiveAttack("A1")).toBeTruthy();
    });

    test('Attacking position D5 and E5 should be hits on the Destroyer so should be true and sink it', () => {
        expect(computerGameboard.receiveAttack("D5")).toBeTruthy();
        expect(computerGameboard.receiveAttack("E5")).toBeTruthy();
        expect(computerGameboard.sunkShips.length).toBeGreaterThan(0);
    });

    test('Attacking position C5 should be a miss and value of missed attacks array should be greater than 0', () => {
        expect(computerGameboard.receiveAttack("C5")).toBeFalsy();
        expect(computerGameboard.missedAttacks.length).toBeGreaterThan(0);
    });


});

