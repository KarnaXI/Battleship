import './style.css';
import { gameContainerElements } from './scripts/gameElements';
import playTheGame from './scripts/game';

const gameApp = document.querySelector("div#battle-ship");

gameApp.appendChild(gameContainerElements()["gameContainer"]);

playTheGame();

