class Board {
  constructor(dimensions={columns:50, rows:50}, tileSize={x: 100, y: 100}){
    this.el = document.querySelector('#board');
    this.rows = dimensions.rows;
    this.columns = dimensions.columns;
    this.tileSize = tileSize;

    this.render();

    this.el.style.marginLeft =  0;
    this.el.style.marginTop = 0;

    this.listen();
  }

  render(){
    this.el.innerHTML = '';
    this.el.style.gridTemplateRows = `repeat(${this.rows}, [row] ${this.tileSize.x}px)`;
    this.el.style.gridTemplateColumns = `repeat(${this.columns}, [col] ${this.tileSize.y}px)`;

    this.matrix = Array(this.rows).fill().map((_,i) => 
      Array(this.columns).fill().map((_,j) => {
        return 'grass'  
      })
    )

    this.matrix.forEach((row,y) => {
      row.forEach((cell,x) => {
        this.el.insertAdjacentHTML('beforeend', `<div class=grass>[${x}, ${y}]</div>`)
      })
    })
  }


  get margins(){
    return {
      x: parseInt(this.el.style.marginLeft.replace('px','')),
      y: parseInt(this.el.style.marginTop.replace('px',''))
    }
  }

  move(x,y){
    let horizontal = this.tileSize.x * x;
    let vertical = this.tileSize.y * y;
    this.el.style.marginLeft = `${this.margins.x + horizontal}px`;
    this.el.style.marginTop = `${this.margins.y + vertical}px`;
  }


  listen(){
    document.addEventListener('keyup', keyupEvent => {
      switch(keyupEvent.key){
        case "ArrowUp":
          this.move(0,-1); 
          break; 
        case "ArrowDown":
          this.move(0,1); 
          break; 
        case "ArrowLeft":
          this.move(-1,0); 
          break; 
        case "ArrowRight":
          this.move(1,0); 
          break; 
      }
    })
  }
}

class Lake {
  constructor(origin, size){
    this.origin = origin;
    this.size = size;
  }
}



let board = new Board(dimensions={rows:10,columns:10});
board.render();



