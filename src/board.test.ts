import {updateBoardWithMoveBlack, initialBoardState} from './board'


describe('update the board functionality', () => {

     test('test update function', () => {
         expect( updateBoardWithMoveBlack(updateBoardWithMoveBlack(initialBoardState, [1,2]), [2,1])).toBe(initialBoardState);
     });

     test('test update function', () => {
          expect( updateBoardWithMoveBlack(updateBoardWithMoveBlack(initialBoardState, [1,3]), [3,1])).toBe(initialBoardState);
     });

     test('test update function', () => {
          expect( updateBoardWithMoveBlack(updateBoardWithMoveBlack(initialBoardState, [1,4]), [4,1])).toBe(initialBoardState);
     });

});

//describe('test black bearing off')