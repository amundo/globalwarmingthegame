class Board {
  constructor({tileSize={x: 100, y: 100}, matrix=null}){
    this.el = document.querySelector('#board');
    this.tileSize = tileSize;

    this.initializeMatrix(matrix);
    this.render();

    this.el.style.marginLeft =  0;
    this.el.style.marginTop = 0;

    this.listen();
  }

  initializeMatrix(matrix=null){
    if(matrix){
      this.matrix = matrix
    } else { 
      this.matrix = Array(this.rows).fill().map((_,y) => 
        Array(this.columns).fill().map((_,x) => 
          new Place({x,y,terrain:'concrete'})
        )
      )
    }
    this.rows = this.matrix.length;
    this.columns = this.matrix[0].length;
  }

  get tiles(){
    return this.matrix.reduce((tiles, row) => tiles.concat(...row) , [])
  }

  render(){
    this.el.innerHTML = '';
    this.el.style.gridTemplateRows = `repeat(${this.rows}, [row] ${this.tileSize.x}px)`;
    this.el.style.gridTemplateColumns = `repeat(${this.columns}, [col] ${this.tileSize.y}px)`;

    this.matrix.forEach((row,y) => {
      row.forEach((place,x) => {
        this.el.appendChild(place.el)
      })
    })
  }

  at(x,y){
    return this.matrix[x][y]
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


