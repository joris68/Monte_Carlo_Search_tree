import {generateBlackMoves, board} from './board'


function rollDice(): number [] {
     const roll1 = Math.floor(Math.random() * 6) + 1;
     const roll2 = Math.floor(Math.random() * 6) + 1;
     if(roll1 === roll2){
          return [roll1, roll1, roll1, roll1];
     }
     return [roll1, roll2];
}

function uniFormDecision(moves : number [][][]){
     const choice =  Math.floor(Math.random() * moves.length) +1;
     return moves[choice];
}

function chooseUniformly(board : board ,  isBlack : boolean){
     const dice = rollDice();
     if(isBlack){
          const blackMoves = generateBlackMoves(board, dice);

     }else{
          
     }
}
