import Grid from "./Grid.js"
import Tile from './Tile.js'

const gameBoad = document.getElementById("game-board");

const grid = new Grid(gameBoad);
grid.generateNewCell().tile = new Tile(gameBoad)
grid.generateNewCell().tile = new Tile(gameBoad)

setupInput()

console.log(grid.cells)
console.log(grid.cellsByRow)

function setupInput() {
    window.addEventListener("keydown", handleInput, { once: true })
}

function handleInput(e) {
    console.log(e.key)
    switch (e.key) {
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowDown":
            moveDown();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
        case "ArrowRight":
            moveRight();
            break;
        default:
            setupInput()
            return
    }

    setupInput()
}

function moveUp() {
    slideTiles(grid.cellsByColumn)
}