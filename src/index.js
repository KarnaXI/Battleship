import './style.css';
import { gameContainerElements } from './scripts/gameElements';
import playerActions from './scripts/game';

const gameApp = document.querySelector("div#battle-ship");

gameApp.appendChild(gameContainerElements()["gameContainer"]);

const playerPlayGame = playerActions();

playerPlayGame.playerPlaceShips();