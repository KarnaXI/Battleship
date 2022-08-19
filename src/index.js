import './style.css';
import { gameContainerElements } from './scripts/gameElements';
// import playTheGame from './scripts/game';
import {gameEngine} from './scripts/game';

const gameApp = document.querySelector("div#battle-ship");

gameApp.appendChild(gameContainerElements()["difficultyContainer"]);

gameApp.appendChild(gameContainerElements()["gameContainer"]);

gameApp.appendChild(gameContainerElements()["restartGameContainer"]);

gameEngine().startGame();

document.querySelector("button.restart-button").addEventListener("click", () => {
    location.reload();
})
