class Pollution {
  constructor(board){
    this.board = board;
  }

  score(){
    let bad = this.board.tiles.map(tile => tile.terrain)
    let good = this.board.tiles.map(tile => tile.terrain)
  }
}
