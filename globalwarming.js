class Board {
  constructor(matrix){
    this.el = document.querySelector('#board');
    this.matrix = matrix;
    this.height = matrix.length;
    this.width = matrix[0].length;
  }

  render(){
    this.matrix.forEach((row,x) => {
      row.forEach((cell,y) => {
        board.el.insertAdjacentHTML('beforeend', `<div class=grass>[${x}, ${y}]</div>`)
      })
    })
  }

}

class Lake {
  constructor(origin, size){
    this.origin = origin;
    this.size = size;
  }
}

let matrix = 
  Array(10).fill().map((_,i) => 
    Array(6).fill().map((_,j) => {
      return 'grass'  
    })
  )


let board = new Board(matrix);
board.render();



