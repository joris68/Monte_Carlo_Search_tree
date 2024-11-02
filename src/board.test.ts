import {updateBoardWithMoveBlack, initialBoardState, blackBearing} from './board'


describe('update the board functionality', () => {

     test('test update function', () => {
         expect(JSON.stringify( updateBoardWithMoveBlack(updateBoardWithMoveBlack(initialBoardState, [[1,2]] ), [[2,1]]))).toBe(JSON.stringify(initialBoardState));
     });

     test('test update function', () => {
          expect( JSON.stringify(updateBoardWithMoveBlack(updateBoardWithMoveBlack(initialBoardState, [[1,3]]), [[3,1]]))).toBe(JSON.stringify(initialBoardState));
     });

     test('test update function', () => {
          expect( JSON.stringify(updateBoardWithMoveBlack(updateBoardWithMoveBlack(initialBoardState, [[1,4]]), [[4,1]]))).toBe(JSON.stringify(initialBoardState));
     });

});

const blackbearingExample = {
     checkers : [2, 0, 0, 0, 0, -5,   0, -3, 0 ,0 ,0 , 5,   -5, 0,0,0,3,0,   5, 3,0,5,2,1],
     whiteCaught : 0,
     blackCaught : 0,
     blackBearing : false,
     whiteBearing : false
}

describe('test black bearing off', () => {
     test('test the black bearing off', () => {
          expect(JSON.stringify(blackBearing(blackbearingExample, [2,5]))).toBe(JSON.stringify([[22,24], [19, 24]]))
     });

     test('test the black bearing off', () => {
          expect(JSON.stringify(blackBearing(blackbearingExample, [4,4, 4, 4]))).toBe(JSON.stringify([[19, 23], [19, 23], [19, 23], [18, 22]]))
     });

})