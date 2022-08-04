const div = document.createElement("div");

const gameContainer = div.cloneNode(false);
gameContainer.classList.add("game-container");

const playerComputerContainer = div.cloneNode(false);
playerComputerContainer.classList.add("player-computer-container");

const boardsContainer = div.cloneNode(false);
boardsContainer.classList.add("game-boards-container");

const playerContainer = div.cloneNode(false);
playerContainer.classList.add("player-container");
const playerName = document.createElement("h2");
playerName.innerText = "Player"
playerContainer.appendChild(playerName);
const playerDescriptionText = document.createElement("p");
playerDescriptionText.classList.add("player-description-text");
playerContainer.appendChild(playerDescriptionText);
const playerRemainingShips = div.cloneNode(false);
playerRemainingShips.classList.add("player-remaining-ships");
playerContainer.appendChild(playerRemainingShips);
const playerActionsText = div.cloneNode(false);
playerActionsText.classList.add("player-actions-text");
playerContainer.appendChild(playerActionsText);
const playerRotateButton = document.createElement("button");
playerRotateButton.classList.add("player-rotate-button", "rotate-buttons");
playerRotateButton.innerText = "Rotate Ship";
playerContainer.appendChild(playerRotateButton);

const computerContainer = div.cloneNode(false);
computerContainer.classList.add("computer-container");
const computerName = document.createElement("h2");
computerName.innerText = "Computer"
computerContainer.appendChild(computerName);
const computerDescriptionText = document.createElement("p");
computerDescriptionText.classList.add("computer-description-text");
computerContainer.appendChild(computerDescriptionText);
const computerRemainingShips = div.cloneNode(false);
computerRemainingShips.classList.add("computer-remaining-ships");
computerContainer.appendChild(computerRemainingShips);
const computerActionsText = div.cloneNode(false);
computerActionsText.classList.add("computer-actions-text");
computerContainer.appendChild(computerActionsText);
const computerRotateButton = document.createElement("button");
computerRotateButton.classList.add("computer-rotate-button", "rotate-buttons");
computerRotateButton.innerText = "Rotate Ship";
computerContainer.appendChild(computerRotateButton);

playerComputerContainer.appendChild(playerContainer);
playerComputerContainer.appendChild(computerContainer);


const playerBoardContainer = div.cloneNode(false);
playerBoardContainer.classList.add("player-board-container");
playerBoardContainer.classList.add("board-container");

const computerBoardContainer = div.cloneNode(false);
computerBoardContainer.classList.add("computer-board-container");
computerBoardContainer.classList.add("board-container");

let allAvailableCoordinates = [];
let alphabet = "ABCDEFGHIJ";
alphabet = [...alphabet];
for (let i=0; i < alphabet.length; i++){
    for (let n=1; n < 11; n++){
        allAvailableCoordinates.push(alphabet[i]+n);
    }
}

playerBoardContainer.innerHTML = allAvailableCoordinates.map(coordinate => {
    return `
    <button id="${coordinate}" class="coordinate"></button>
    `
}).join('')

computerBoardContainer.innerHTML = allAvailableCoordinates.map(coordinate => {
    return `
    <button id="${coordinate}" class="coordinate"></button>
    `
}).join('')


boardsContainer.appendChild(playerBoardContainer);
boardsContainer.appendChild(computerBoardContainer);

gameContainer.appendChild(playerComputerContainer);
gameContainer.appendChild(boardsContainer);


export function gameContainerElements(){
    return {gameContainer}
}