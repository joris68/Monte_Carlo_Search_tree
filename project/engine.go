package backgammon

type board struct {
	checkers     [24]int
	whiteCaught  int
	blackCaught  int
	blackBearing bool
	whiteBearing bool
}

func newBoard(checkers [24]int, whiteCaught int, blackCaught int, blackBearing bool, whiteBearing bool) *board {
	newBoard := board{checkers: checkers, whiteCaught: whiteCaught,
		blackCaught: blackCaught, blackBearing: blackBearing, whiteBearing: blackBearing}
	return &newBoard
}

// for black : move[0] < move[1]
// for white : move[0] < move[1]
// [from, to]
type move struct {
	from int
	to int
}


func validMoveBlack( board *board ,  move move) bool {
	if board.checkers[move.from -1] >= 0
}


