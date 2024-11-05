import Canvas from 'drawille';
import { initialBoardState } from './board';

// Initialize data object
let data = {
    counter: 0,
    size: 40, // Starting size of the rectangle
    growing: true, // Direction of growth
};

// Create a Drawille canvas (80x20 pixels for the console)
const canvas = new Canvas(160, 80);

function drawRectangle() {
    // Clear the canvas for a fresh draw
    canvas.clear();

    const size = data.size;
    const x = 50; // Starting x-coordinate for rectangle
    const y = 5;  // Starting y-coordinate for rectangle

    // Draw top and bottom sides of the rectangle
    for (let i = 0; i < size; i++) {
        canvas.set(x + i, y);           // Top side
        canvas.set(x + i, y + size - 1); // Bottom side
    }

    // Draw left and right sides of the rectangle
    for (let i = 0; i < size; i++) {
        canvas.set(x, y + i);           // Left side
        canvas.set(x + size - 1, y + i); // Right side
    }

    // Display the canvas in the console
    console.clear();
    console.log(canvas.frame());

}


// Run the update every 200 milliseconds
setInterval(drawRectangle(), 200);
