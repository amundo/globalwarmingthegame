class Game {
  constructor({board=null}){
    this.board = board || new Board({rows:20,columns:20}, {x:100, y:100});
    this.board.render();
    this.n = 0;

    this.intervalID = this.start();
  }

  update(){
    this.n++
  }

  render(){
    this.board.matrix[0][0].el.textContent = this.n;
  }

  run(){
    this.update();
    this.render();
  }

  start(){
    return setInterval(() => this.run(), 2000) 
  }

  stop(){
    clearInterval(this.intervalID) 
  }
}

let board = new Board({
    dimensions:{columns:20,rows:20},
    tileSize: {x:100,y:100}, 
    matrix: m
});
let game = new Game({board});



