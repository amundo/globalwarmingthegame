class Board {
  constructor({dimensions={columns:50, rows:50}, tileSize={x: 100, y: 100}, matrix=null}){
console.log(matrix);
    this.el = document.querySelector('#board');
    this.rows = dimensions.rows;
    this.columns = dimensions.columns;
    this.tileSize = tileSize;

    this.initializeMatrix(matrix);
    this.render();

    this.el.style.marginLeft =  0;
    this.el.style.marginTop = 0;

    this.listen();
  }

  initializeMatrix(matrix=null){
    if(matrix){
console.log(matrix);
      this.matrix = matrix
    } else { 
      this.matrix = Array(this.rows).fill().map((_,y) => 
        Array(this.columns).fill().map((_,x) => 
          new Place({x,y,terrain:'concrete'})
        )
      )
    }
  }

  render(){
    this.el.innerHTML = '';
    this.el.style.gridTemplateRows = `repeat(${this.rows}, [row] ${this.tileSize.x}px)`;
    this.el.style.gridTemplateColumns = `repeat(${this.columns}, [col] ${this.tileSize.y}px)`;

    this.matrix.forEach((row,y) => {
      row.forEach((place,x) => {
        this.el.appendChild(place.render())
      })
    })
  }

  at(x,y){
    return this.matrix[x][y]
  }

  putItemAt(item, x,y){
    this.at(x,y).appendChild(item);
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
    /* prevent scrollback from mouse */
    history.pushState(null, null, location.href);
    window.onpopstate = function(event) {
        history.go(1);
    };
  }
}

class Lake {
  constructor(origin, size){
    this.origin = origin;
    this.size = size;
  }
}


