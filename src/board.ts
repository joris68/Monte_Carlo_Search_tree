// black is +
//white is -
type board = {
     checkers : number [];
     whiteCaught : number;
     blackCaught : number;
     blackBearing : boolean;
     whiteBearing : boolean;
}

export const initialBoardState: board = {
     checkers : [2, 0, 0, 0, 0, -5,   0, -3, 0 ,0 ,0 , 5,   -5, 0,0,0,3,0,   5, 0,0,0,0,-2],
     whiteCaught : 0,
     blackCaught : 0,
     blackBearing : false,
     whiteBearing : false
}

// for black : move[0] < move[1]
// for white : move[0] < move[1]
// [from, to]
type move = [number, number] 


// 


function rollDice(): number [] {
     const roll1 = Math.floor(Math.random() * 6) + 1;
     const roll2 = Math.floor(Math.random() * 6) + 1;
     return [roll1, roll2];
}

function generateBlackMoves(board: board, dice : number []){

     if(board.blackCaught === 0 && board.blackBearing === false){
          return genBlackNormal(board, dice);

     } else if(board.blackCaught > 0){

          const  [newboard, insertions] = insertBlackCheckers(board, dice);
          if(newboard.blackCaught === 0 && insertions < dice.length ){
               return genBlackNormal(newboard, dice.slice(insertions))
          }else{
               return [];
          }

     }else if(board.blackBearing){
          // this is a deterministic algorithm
     }
}


function validMoveBlack(board : board, move : move) : boolean {
          if(board.checkers[move[1] -1] >= 0 || board.checkers[move[1] -1] === -1 && move[1] -1 <= 23){
               return true;
          }
          return false;
}


function genBlackNormal(board: board, dice: number[]) {
     const allPossMoves: move[][] = [];
 
     // for normal case
     function backtracking(innerBoard: board, innerDice: number[], innerList: move[]) {
         if (innerDice.length === 0) {
             allPossMoves.push(innerList);
             return;
         }
         
         for (let x = 0; x < innerBoard.checkers.length; x++) {
             if (innerBoard.checkers[x] > 0 && validMoveBlack(innerBoard, [x + 1, x + 1 + innerDice[0]])) {
                 const move: move = [x + 1, x + 1 + innerDice[0]];
                 const newInnerList = [...innerList, move]; 
                 backtracking(updateBoardWithMoveBlack(innerBoard, [move]), innerDice.slice(1), newInnerList);
             }
         }
     }

     backtracking(board , dice, []);
     
     return allPossMoves;
}

function insertBlackCheckers(board : board, dice : number[]): [board, number] {

     const moves : move[] = [];
     let insertions = 0;
     for (let x= 0; x < dice.length; x++){
          const field = board.checkers[dice[x]-1];
          if(field === 0 || field === -1){
               moves.push([-1, field]);
               insertions +=1;
          }
     }

     return [updateBoardWithMoveBlack(board, moves), insertions];

}
 
 

console.log(genBlackNormal(initialBoardState, [2,3]));

export function updateBoardWithMoveBlack(board: board, moves : move []) : board {

     const newboard : board = JSON.parse(JSON.stringify(board));

     for (let i = 0; i < moves.length; i++){

          if(moves[i][0] === -1){
               newboard.checkers[moves[i][1]] += 1;
               newboard.blackCaught -= 1;
               continue;
          }
     
          newboard.checkers[moves[i][0]] -= 1;
          
          if(newboard.checkers[moves[i][1]] === -1){
               //white Checker gets Eaten
               newboard.whiteCaught += 1 ;
               newboard.checkers[moves[i][1]] = 1;
               continue;
          }
     
          if(newboard.checkers[moves[i][1]] >= 0){
               newboard.checkers[moves[i][1]] += 1;
               continue;
          }
     }
     return newboard;
}

// TODO: Bearing off Algorithm
// black goes from 0 to end
export function blackBearing(board : board, dice : number[]) : move []{

     const startField = 18;
     const lastIndex = 23;
     const endPoint = 24;
     const moves : move[] = [];

     for (let x = 0; x < dice.length; x++){
          const optimal = endPoint - dice[x];
          if(board.checkers[optimal] > 0 ){
               moves.push([optimal, optimal + dice[x]]);
               continue;
          } 
          
          for (let y = optimal -1; y >= startField ; y-- ){
               if(board.checkers[y] > 0){
                    moves.push([y, y + dice[x]]);
                    continue;
               }
          }
          for(let z = optimal; z <= lastIndex; z++){
               if(board.checkers[z] > 0){
                    moves.push()
               }
          }
          
     }
     return moves;
}

// TODO: white bearing off








