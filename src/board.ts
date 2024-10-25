// black is +
//white is -
type board = {
     checkers : number [];
     blackCheckers : number [];
     whiteCheckers : number [];
     whiteCaught : number;
     blackCaught : number;
     blackBearing : boolean;
     whiteBearing : boolean;
}

const initialBoardState: board = {
     checkers : [2, 0, 0, 0, 0, -5,   0, -3, 0 ,0 ,0 , 5,   -5, 0,0,0,3,0,   5, 0,0,0,0,-2],
     blackCheckers : [4 , 1, 12, 17, 19],
     whiteCheckers : [4, 24, 13, 8, 6 ],
     whiteCaught : 0,
     blackCaught : 0,
     blackBearing : false,
     whiteBearing : false
}

// for black : move[0] < move[1]
// for white : move[0] < move[1]
// [from, to]
type move = [number, number] 


function rollDice(): number [] {
     const roll1 = Math.floor(Math.random() * 6) + 1;
     const roll2 = Math.floor(Math.random() * 6) + 1;
     return [roll1, roll2];
}

function generateMoves(board : board, dice : number[], isBlack : boolean) {
     if(isBlack) {
          return generateBlackMoves(board, dice);
     } else{
         // return generateWhiteMoves(board, dice);
     }
};



function generateBlackMoves(board : board, dice : number []) : move [] {

     const possBlackMoves : move [] = [];

     function recursion(innerBoard : board, innerDice : number[]){
          for(let x = 1; x < innerBoard.blackCheckers.length; x++){
               const  potNextPlace = innerBoard.blackCheckers[x] + innerDice[0] -1;
               if(innerBoard.checkers[potNextPlace] >= 0 ){
                    const newMove : move = [innerBoard.blackCheckers[x], innerBoard.blackCheckers[x] + innerDice[0]]
                    possBlackMoves.push(newMove);
                    innerBoard = updateBoardWithMoveBlack(innerBoard, newMove);
                    innerDice.shift()
                    recursion(innerBoard, innerDice);
                    const reversedNewMove : move = [newMove[1], newMove[0]];
                    innerBoard = updateBoardWithMoveBlack(innerBoard, reversedNewMove);
               }
          } 
     }

     recursion(board, dice);
     return possBlackMoves;
}

// this function should update the input board in-place
function updateBoardWithMoveBlack(board: board, move : move) : board {
     board.checkers[move[0] -1] -= 1;
     if(board.checkers[move[1] -1] === 0){
          //adds a new stack to blackChecker Vector
          board.checkers[move[1] -1] = 1;
          board.blackCheckers[0] += 1;
          

     } else if(board.checkers[move[1] -1] >= 1){
          // adds to existing stack

     }else if(board.checkers[move[1] -1] === -1){
          // beats white checker
          board.checkers[move[1] -1] = 1;
          board.whiteCaught +=1;
     } else{
          console.log("This should not happen...");
     }
}

// TODO: Bearing off Algorithm

console.log(generateBlackMoves(initialBoardState, [4,4]));

module.exports = {
     generateMoves,
     initialBoardState
}





