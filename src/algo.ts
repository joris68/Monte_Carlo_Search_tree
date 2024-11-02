
function rollDice(): number [] {
     const roll1 = Math.floor(Math.random() * 6) + 1;
     const roll2 = Math.floor(Math.random() * 6) + 1;
     return [roll1, roll2];
}