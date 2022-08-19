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
playerName.innerText = "Player Status"
playerContainer.appendChild(playerName);
const playerRowItems = div.cloneNode(false);
playerRowItems.classList.add("player-row-items");
const playerDescriptionText = document.createElement("p");
playerDescriptionText.classList.add("player-description-text");
playerRowItems.appendChild(playerDescriptionText);
const playerRotateButton = document.createElement("button");
playerRotateButton.classList.add("player-rotate-button", "rotate-buttons");
playerRotateButton.innerText = "ROTATE SHIP";
playerRowItems.appendChild(playerRotateButton);
playerContainer.appendChild(playerRowItems);

const computerContainer = div.cloneNode(false);
computerContainer.classList.add("computer-container");
const computerName = document.createElement("h2");
computerName.innerText = "Computer Status"
computerContainer.appendChild(computerName);
const computerDescriptionText = document.createElement("p");
computerDescriptionText.classList.add("computer-description-text");
computerDescriptionText.innerText = "Placing ships";
computerContainer.appendChild(computerDescriptionText);
const computerRotateButton = document.createElement("button");
computerRotateButton.classList.add("computer-rotate-button", "rotate-buttons");
computerRotateButton.innerText = "ROTATE SHIP";
computerContainer.appendChild(computerRotateButton);


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


const playerSide = div.cloneNode(false);
playerSide.classList.add("player-side");
playerSide.appendChild(playerContainer);
playerSide.appendChild(playerBoardContainer);

boardsContainer.appendChild(playerSide);

const computerSide = div.cloneNode(false);
computerSide.classList.add("computer-side");
computerSide.appendChild(computerContainer);
computerSide.appendChild(computerBoardContainer);

boardsContainer.appendChild(computerSide);

gameContainer.appendChild(playerComputerContainer);
gameContainer.appendChild(boardsContainer);

const difficultyContainer = div.cloneNode(false);
difficultyContainer.classList.add("difficulty-container");


const difficultyTextContainer = div.cloneNode(false);
difficultyContainer.classList.add("difficulty-text-container");

const difficultyButtonsContainer = div.cloneNode(false);
difficultyButtonsContainer.classList.add("difficulty-buttons-container");

difficultyContainer.appendChild(difficultyTextContainer);
difficultyContainer.appendChild(difficultyButtonsContainer);

const difficultyText = document.createElement("h2");
difficultyText.innerText = "Choose Difficulty";
difficultyTextContainer.appendChild(difficultyText);

const easyButton = document.createElement("button");
easyButton.id = 1;
easyButton.classList.add("difficulty-button", "easy");
easyButton.innerText = "EASY";
difficultyButtonsContainer.appendChild(easyButton);

const mediumButton = document.createElement("button");
mediumButton.id = 2;
mediumButton.classList.add("difficulty-button", "medium");
mediumButton.innerText = "MEDIUM";
difficultyButtonsContainer.appendChild(mediumButton);

const hardButton = document.createElement("button");
hardButton.id = 3;
hardButton.classList.add("difficulty-button", "hard");
hardButton.innerText = "HARD";
difficultyButtonsContainer.appendChild(hardButton);

const heroicButton = document.createElement("button");
heroicButton.id = 4;
heroicButton.classList.add("difficulty-button", "heroic");
heroicButton.innerText = "HEROIC";
difficultyButtonsContainer.appendChild(heroicButton);

const restartGameContainer = div.cloneNode(false);
restartGameContainer.classList.add("restart-game-container");
const restartButton = document.createElement("button");
restartButton.innerText = "RESTART GAME";
restartButton.classList.add("restart-button");
restartGameContainer.appendChild(restartButton);


export function gameContainerElements(){
    return {gameContainer, difficultyContainer, restartGameContainer}
}