import Drawille from 'drawille';
import { off } from 'process';


const canvas = new Drawille(100, 100);

const upperLine =86;
const sideLine = 46;

const offset = 0;

function drawOutline(){


    for (let x = 0 ; x < upperLine; x++){
        canvas.set(offset+x, offset)
    }

    for (let x = 0 ; x < upperLine; x++){
        canvas.set(offset +x , sideLine + offset);
    }
}

function drawFields(){

}

function renderBoard() {
    console.clear();
    canvas.clear();
    drawOutline();

    // Move the cursor to the top-left of the console before rendering
    process.stdout.write('\x1b[H');
    console.log(canvas.frame());
}

// Simulate background update (can update the board state here if needed)
function updateState() {
    // Example: move the line downwards each frame
    // Add more logic here to make the board dynamic
}

// Main loop
setInterval(() => {
    updateState();
    renderBoard();
}, 1000);
